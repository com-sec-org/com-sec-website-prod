import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";
import { SEO_ROUTES } from "./server/routes/seo-routes";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist/spa",
    target: "chrome76",
  },
  plugins: [react(), expressPlugin(), seoPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve",
    configureServer(server) {
      const app = createServer();
      server.middlewares.use(app);
    },
  };
}

function seoPlugin(): Plugin {
  return {
    name: "seo-plugin",
    apply: "serve",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const pathname = (ctx.originalUrl ?? ctx.path ?? "/").split("?")[0];
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
      },
    },
  };
}