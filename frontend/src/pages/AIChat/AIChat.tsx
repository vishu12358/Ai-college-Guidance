import { useState, useRef, useEffect } from "react";
import axios from "axios";

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

const initialMessage: Message = {
  sender: "ai",
  message:
    "Hello! 👋 I am your AI College Assistant. Ask me anything about colleges.",
};

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message: text,
      },
    ]);

    setIsTyping(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/chat",
        {
          message: text,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message: response.data.answer,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message: "❌ Unable to connect to the backend.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClearChat = () => {
    setMessages([initialMessage]);
    setIsTyping(false);
  };

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto h-[85vh] flex flex-col bg-white rounded-xl shadow">

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