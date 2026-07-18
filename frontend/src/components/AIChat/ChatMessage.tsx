import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  sender: "user" | "ai";
}

const ChatMessage = ({ message, sender }: ChatMessageProps) => {
  const isUser = sender === "user";

  return (
    <div
      className={`flex mb-6 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex items-start gap-3 max-w-[75%] ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className={`p-3 rounded-full ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {isUser ? <User size={20} /> : <Bot size={20} />}
        </div>

        <div
          className={`px-5 py-3 rounded-2xl shadow ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {message}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;