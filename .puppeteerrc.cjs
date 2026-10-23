const { join } = require("path");

// Keep the downloaded Chrome inside node_modules so Netlify's dependency cache
// restores it between builds (the default ~/.cache location is not cached).
/** @type {import("puppeteer").Configuration} */
module.exports = {
  cacheDirectory: join(__dirname, "node_modules", ".cache", "puppeteer"),
};
