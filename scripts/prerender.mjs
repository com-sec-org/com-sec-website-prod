// Prerenders every content route to static HTML after `vite build`, so crawlers
// that don't run JavaScript (AI crawlers, curl, social scrapers) get the same
// headings and body text that users see. Every visitor gets the same file; the
// app then renders over it with createRoot() as before.
//
// Output: "/" -> dist/spa/index.html, "/soc2" -> dist/spa/soc2.html,
// "/blog/x" -> dist/spa/blog/x.html (flat files, so Netlify serves them without a
// trailing-slash redirect). The untouched app shell is kept as spa-shell.html and
// is what the SPA fallback serves for redirects and unknown URLs.

import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist", "spa");
const SHELL_FILE = "spa-shell.html";
const CONCURRENCY = 4;
const MIN_TEXT_CHARS = 200;

const MIME = {
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".html": "text/html; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

// Content routes from client/main.tsx: skips commented-out routes, <Navigate>
// redirects, the "*" catch-all and param routes, then adds one page per case study id.
function getRoutes() {
  const main = fs
    .readFileSync(path.join(ROOT, "client", "main.tsx"), "utf8")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .replace(/^\s*\/\/.*$/gm, "");
  const routes = new Set();
  for (const [, routePath, element] of main.matchAll(
    /<Route\s+path="([^"]+)"\s+element=\{([\s\S]*?)\}\s*\/>/g,
  )) {
    if (routePath === "*" || routePath.includes(":") || element.includes("<Navigate")) continue;
    routes.add(routePath);
  }

  const caseStudies = fs.readFileSync(path.join(ROOT, "client", "pages", "CaseStudies.tsx"), "utf8");
  for (const [, id] of caseStudies.matchAll(/^\s+id: "([^"]+)",$/gm)) {
    routes.add(`/case-studies/${id}`);
  }

  return [...routes];
}

function outputFile(route) {
  return route === "/" ? path.join(DIST, "index.html") : path.join(DIST, `${route.slice(1)}.html`);
}

// Serves built assets, and the untouched shell for every route, like the SPA fallback.
function startServer(shellHtml) {
  const server = http.createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const file = path.join(DIST, pathname);
    if (path.extname(pathname) && file.startsWith(DIST) && fs.existsSync(file) && fs.statSync(file).isFile()) {
      res.writeHead(200, {
        "content-type": MIME[path.extname(file).toLowerCase()] ?? "application/octet-stream",
        "content-length": fs.statSync(file).size,
      });
      fs.createReadStream(file).pipe(res);
      return;
    }
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end(shellHtml);
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

async function renderRoute(page, origin, route, shellScriptSrcs) {
  await page.goto(origin + route, { waitUntil: "networkidle0", timeout: 60000 });
  await page.waitForSelector("#root h1", { timeout: 20000 });
  // react-helmet writes <head> tags on the next animation frame.
  await page.evaluate(
    () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => setTimeout(resolve, 100)))),
  );

  const info = await page.evaluate(() => ({
    pathname: location.pathname,
    h1: document.querySelector("#root h1")?.textContent?.replace(/\s+/g, " ").trim() ?? "",
    textChars: document.getElementById("root")?.innerText.replace(/\s+/g, " ").trim().length ?? 0,
  }));
  if (info.pathname !== route) throw new Error(`redirected to ${info.pathname}`);
  if (info.h1 === "404") throw new Error("rendered the 404 page");
  if (info.textChars < MIN_TEXT_CHARS) throw new Error(`only ${info.textChars} characters of text`);

  await page.evaluate((shellSrcs) => {
    // The shell's default description and CanonicalLink's canonical sit next to
    // the page's own Helmet tags; keep only one of each, preferring Helmet's.
    for (const selector of ['meta[name="description"]', 'link[rel="canonical"]']) {
      const tags = [...document.head.querySelectorAll(selector)];
      const keep = tags.find((tag) => tag.hasAttribute("data-react-helmet")) ?? tags[tags.length - 1];
      tags.forEach((tag) => tag !== keep && tag.remove());
    }
    // Scripts injected at runtime by loaders in the shell (e.g. Apollo's tracker)
    // would load twice, since the loader runs again in the browser.
    document.querySelectorAll("script[src]").forEach((script) => {
      if (!shellSrcs.includes(script.getAttribute("src"))) script.remove();
    });
  }, shellScriptSrcs);

  const file = outputFile(route);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, await page.content());
  return info;
}

async function main() {
  const indexPath = path.join(DIST, "index.html");
  const shellHtml = fs.readFileSync(indexPath, "utf8");
  if (!shellHtml.includes('<div id="root"></div>')) {
    throw new Error("dist/spa/index.html is not the empty app shell; run `vite build` first.");
  }
  fs.writeFileSync(path.join(DIST, SHELL_FILE), shellHtml);
  const shellScriptSrcs = [...shellHtml.matchAll(/<script\b[^>]*\ssrc="([^"]+)"/g)].map(([, src]) => src);

  const routes = getRoutes();
  const server = await startServer(shellHtml);
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  console.log(`Prerendering ${routes.length} routes with Node ${process.version}, ${await browser.version()}`);

  const started = Date.now();
  const failures = [];
  const queue = [...routes];
  const worker = async () => {
    // A separate context opens a separate window, so every worker's page is in the
    // foreground and gets animation frames (react-helmet waits for one).
    const context = await browser.createBrowserContext();
    const page = await context.newPage();
    await page.setRequestInterception(true);
    // Only load our own build: no analytics hits, trackers or widgets during the build.
    page.on("request", (request) => {
      const url = request.url();
      if (url.startsWith(origin) || url.startsWith("data:") || url.startsWith("blob:")) request.continue();
      else request.abort();
    });
    for (let route = queue.shift(); route; route = queue.shift()) {
      try {
        const info = await renderRoute(page, origin, route, shellScriptSrcs);
        console.log(`  ok  ${route}  (${info.textChars} chars, h1: ${info.h1.slice(0, 60)})`);
      } catch (error) {
        failures.push(route);
        console.error(`  FAIL ${route}: ${error.message}`);
      }
    }
    await context.close();
  };

  try {
    await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`Prerendered ${routes.length - failures.length}/${routes.length} routes in ${((Date.now() - started) / 1000).toFixed(1)}s`);
  if (failures.length) {
    throw new Error(`Prerender failed for: ${failures.join(", ")}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
