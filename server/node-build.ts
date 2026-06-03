import path from "path";
import fs from "fs";
import { createServer } from "./index";
import * as express from "express";
import { ogCrawlerMiddleware } from "./routes/og-crawler";
import { SEO_ROUTES } from "./routes/seo-routes";

const app = createServer();
const port = process.env.PORT || 3000;

// In production, serve the built SPA files
const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");

// Read index.html once at startup and cache it
const indexHtmlPath = path.join(distPath, "index.html");
let indexHtmlTemplate = "";
try {
  indexHtmlTemplate = fs.readFileSync(indexHtmlPath, "utf-8");
} catch {
  // Will fall back to sendFile if template can't be read
}

function injectSeoTags(html: string, pathname: string): string {
  const seo = SEO_ROUTES[pathname];
  if (!seo) return html;

  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

  let result = html
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(seo.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escape(seo.description)}" />`
    );

  // Inject or update og: / twitter: tags right before </head>
  const ogTags = `
  <meta property="og:title" content="${escape(seo.title)}" />
  <meta property="og:description" content="${escape(seo.description)}" />
  <meta property="og:url" content="${escape(seo.canonical)}" />
  ${seo.image ? `<meta property="og:image" content="${escape(seo.image)}" />` : ""}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Com-Sec" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escape(seo.title)}" />
  <meta name="twitter:description" content="${escape(seo.description)}" />
  ${seo.image ? `<meta name="twitter:image" content="${escape(seo.image)}" />` : ""}
  <link rel="canonical" href="${escape(seo.canonical)}" />`;

  result = result.replace("</head>", `${ogTags}\n</head>`);

  return result;
}

// Return lightweight OG-tag HTML to social media crawlers before serving static files
app.use(ogCrawlerMiddleware);

// Serve static files
app.use(express.static(distPath));

// Handle React Router - serve index.html for all non-API routes
app.get("*", (req, res) => {
  // Don't serve index.html for API routes
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }

  if (indexHtmlTemplate) {
    const html = injectSeoTags(indexHtmlTemplate, req.path);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.send(html);
  }

  res.sendFile(indexHtmlPath);
});

app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
