import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import type { Plugin } from "vite";
import { allArticles } from "../shared/blog-posts";
import { generateRss } from "../shared/rss";

// Parse actual JSX routes; resolve article aliases without changing application routing.
export function canonicalBlogPaths(source: string): Map<string, string> {
  const tree = ts.createSourceFile("main.tsx", source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const paths = new Set<string>();
  const redirects = new Map<string, string>();
  function visit(node: ts.Node) {
    if ((ts.isJsxSelfClosingElement(node) || ts.isJsxOpeningElement(node)) && node.tagName.getText(tree) === "Route") {
      const attrs = node.attributes.properties;
      const routePath = attrs.find(a => ts.isJsxAttribute(a) && a.name.getText(tree) === "path") as ts.JsxAttribute | undefined;
      const element = attrs.find(a => ts.isJsxAttribute(a) && a.name.getText(tree) === "element") as ts.JsxAttribute | undefined;
      const expression = element?.initializer && ts.isJsxExpression(element.initializer) ? element.initializer.expression : undefined;
      const component = expression && ts.isJsxSelfClosingElement(expression) ? expression.tagName.getText(tree) : undefined;
      if (routePath?.initializer && ts.isStringLiteral(routePath.initializer) && component && routePath.initializer.text.startsWith("/blog/")) {
        const pathname = routePath.initializer.text;
        if (component === "Navigate" && expression && ts.isJsxSelfClosingElement(expression)) {
          const destination = expression.attributes.properties.find(a => ts.isJsxAttribute(a) && a.name.getText(tree) === "to") as ts.JsxAttribute | undefined;
          if (destination?.initializer && ts.isStringLiteral(destination.initializer)) {
            redirects.set(pathname, destination.initializer.text);
          }
        } else {
          paths.add(pathname);
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(tree);
  const canonical = new Map<string, string>();
  for (const start of [...paths, ...redirects.keys()]) {
    const visited = new Set<string>();
    let destination = start;
    while (redirects.has(destination) && !visited.has(destination)) {
      visited.add(destination);
      destination = redirects.get(destination)!;
    }
    // Only terminate at a real blog article, never at home, a missing route or a cycle.
    if (paths.has(destination) && !redirects.has(destination)) canonical.set(start, destination);
  }
  return canonical;
}

export function rssPlugin(): Plugin {
  let root = process.cwd();
  const render = (posts = allArticles) => generateRss(posts, canonicalBlogPaths(fs.readFileSync(path.join(root, "client/main.tsx"), "utf8")));
  return {
    name: "blog-rss",
    configResolved(config) { root = config.root; },
    generateBundle() {
      this.emitFile({ type: "asset", fileName: "rss.xml", source: render() });
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url?.split("?")[0] !== "/rss.xml") return next();
        try {
          const module = await server.ssrLoadModule("/shared/blog-posts.ts");
          res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
          res.end(render(module.allArticles));
        } catch (error) { next(error); }
      });
    }
  };
}
