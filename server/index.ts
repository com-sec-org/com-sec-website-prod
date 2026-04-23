import express from "express";
import cors from "cors";
import dotenv from "dotenv"; // 👈 ADD THIS LINE
import { handleDemo } from "./routes/demo";
import phishingTestRoutes from "./routes/phishing-test";
import submitPhishingTestRoutes from "./routes/submitPhishingTest";
import { submitContactForm } from "./routes/contact";
import { handleChatbot } from "./routes/chatbot";

// ✅ Load environment variables from .env
dotenv.config();

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Debug: Check if API key is loading (can remove after testing)
  console.log("✅ Loaded API Key:", process.env.RESEND_API_KEY);

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  // Phishing test routes
  app.use("/api", phishingTestRoutes);
  app.use("/api", submitPhishingTestRoutes);

  // Contact form route
  app.post("/api/contact", submitContactForm);

  // Chatbot route
  app.post("/api/chat", handleChatbot);

  return app;
}
