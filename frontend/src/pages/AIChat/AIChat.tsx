import { useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import ChatHeader from "../../components/AIChat/ChatHeader";
import SuggestedQuestions from "../../components/AIChat/SuggestedQuestions";
import ChatInput from "../../components/AIChat/ChatInput";
import ChatMessage from "../../components/AIChat/ChatMessage";

const AIChat = () => {
  const [messages] = useState([
    {
      sender: "ai" as const,
      message:
        "Hello! 👋 I am your AI College Assistant. Ask me anything about colleges, admissions, fees, placements or scholarships.",
    },
  ]);

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto h-[85vh] flex flex-col bg-white rounded-xl shadow">

        <ChatHeader />

        <div className="flex-1 overflow-y-auto p-6">

          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              sender={msg.sender}
              message={msg.message}
            />
          ))}

          <SuggestedQuestions />

        </div>

        <ChatInput />

      </div>
    </AppLayout>
  );
};

export default AIChat;