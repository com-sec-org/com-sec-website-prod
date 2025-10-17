import React, { useState, useRef, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { MessageSquare, X } from "lucide-react";

const API_URL = "https://comsec-chatbot-backend.onrender.com/chat"; // ✅ Deployed FastAPI backend

export default function ComSecChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    {
      role: "bot",
      content:
        "👋 Hi there! I'm <b>Com-Sec’s AI Assistant</b>. How can I help you today?<br/><br/>You can ask about our services, SOC 2, HIPAA, or compliance automation.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  // 🧠 Auto-scroll when new messages arrive
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // 🚀 Send message to backend
  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: data.reply || "⚠️ Sorry, I couldn’t process that." },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "❌ Something went wrong. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // ✨ Press Enter to send
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div>
      {/* 💬 Floating chatbot button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* 💬 Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white border border-gray-200 rounded-2xl shadow-xl flex flex-col z-50 animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-blue-600 text-white rounded-t-2xl">
            <h3 className="font-semibold">Com-Sec Assistant</h3>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={chatRef} className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-100 ml-auto max-w-[80%]"
                    : "bg-gray-100 mr-auto max-w-[85%]"
                }`}
                dangerouslySetInnerHTML={{ __html: msg.content }}
              />
            ))}

            {loading && (
              <div className="flex items-center space-x-2 text-gray-500 text-sm">
                <span className="dot-flash"></span>
                <span>Com-Sec Assistant is typing...</span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="ml-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              <FiSend size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
