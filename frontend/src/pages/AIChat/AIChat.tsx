import { useState, useRef, useEffect } from "react";

import AppLayout from "../../components/layout/AppLayout";
import ChatHeader from "../../components/AIChat/ChatHeader";
import SuggestedQuestions from "../../components/AIChat/SuggestedQuestions";
import ChatInput from "../../components/AIChat/ChatInput";
import ChatMessage from "../../components/AIChat/ChatMessage";
import TypingIndicator from "../../components/AIChat/TypingIndicator";

interface Message {
  sender: "user" | "ai";
  message: string;
}

// ✅ Add this
const initialMessage: Message = {
  sender: "ai",
  message:
    "Hello! 👋 I am your AI College Assistant. Ask me anything about colleges.",
};

const AIChat = () => {
  // ✅ Replace your old messages state with this
  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message: text,
      },
    ]);

    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message:
            "This is a demo response. Soon I'll answer using AI and your college database. 🤖",
        },
      ]);

      setIsTyping(false);
    }, 2000);
  };

  // ✅ Add this
  const handleClearChat = () => {
    setMessages([initialMessage]);
    setIsTyping(false);
  };

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto h-[85vh] flex flex-col bg-white rounded-xl shadow">

        {/* ✅ Replace ChatHeader */}
        <ChatHeader onClearChat={handleClearChat} />

        <div className="flex-1 overflow-y-auto p-6">

          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              sender={msg.sender}
              message={msg.message}
            />
          ))}

          {messages.length === 1 && (
            <SuggestedQuestions
              onQuestionClick={handleSendMessage}
            />
          )}

          {isTyping && <TypingIndicator />}

          <div ref={messagesEndRef}></div>

        </div>

        <ChatInput onSendMessage={handleSendMessage} />

      </div>
    </AppLayout>
  );
};

export default AIChat;