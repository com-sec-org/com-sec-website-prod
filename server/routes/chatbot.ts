import { RequestHandler } from "express";

interface ChatbotRequest {
  message: string;
}

interface ChatbotResponse {
  reply: string;
}

export const handleChatbot: RequestHandler = async (req, res) => {
  const { message } = req.body as ChatbotRequest;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Invalid message" });
  }

  try {
    // TODO: Integrate with actual AI service (OpenAI, Claude, etc.)
    // For now, provide a helpful default response
    const reply = generateResponse(message);
    
    const response: ChatbotResponse = {
      reply,
    };
    
    res.status(200).json(response);
  } catch (error) {
    console.error("Chatbot error:", error);
    res.status(500).json({ error: "Failed to process message" });
  }
};

function generateResponse(message: string): string {
  const msg = message.toLowerCase();

  if (msg.includes("soc 2") || msg.includes("compliance")) {
    return "Com-Sec offers SOC 2 Type II certification services. We help organizations achieve and maintain compliance with industry standards. Would you like to know more about our specific services?";
  }

  if (msg.includes("hipaa")) {
    return "HIPAA compliance is one of our specialties. We provide comprehensive HIPAA security and privacy assessments. What aspect of HIPAA compliance interests you?";
  }

  if (msg.includes("price") || msg.includes("cost") || msg.includes("plan")) {
    return "For pricing information, please contact our sales team. We offer customized packages based on your organization's needs.";
  }

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return "Hello! I'm here to help. You can ask me about our compliance services, SOC 2, HIPAA, or security automation.";
  }

  return "Thank you for your question. For detailed information about Com-Sec's services, please visit our website or contact our team directly. Is there anything specific I can help clarify?";
}
