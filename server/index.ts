import express from "express";
import cors from "cors";
import dotenv from "dotenv"; // 👈 ADD THIS LINE
import { handleDemo } from "./routes/demo";
import phishingTestRoutes from "./routes/phishing-test";
import submitPhishingTestRoutes from "./routes/submitPhishingTest";
import { handleChatbot } from "./routes/chatbot";
import { generateSitemap } from "./routes/seo-routes";

// ✅ Load environment variables from .env
dotenv.config();

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  // Phishing test routes
  app.use("/api", phishingTestRoutes);
  app.use("/api", submitPhishingTestRoutes);

  // Chatbot route
  app.post("/api/chat", handleChatbot);

  // Dynamic sitemap — auto-includes every route in seo-routes.ts
  app.get("/sitemap.xml", (_req, res) => {
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.send(generateSitemap());
  });

  return app;
}
