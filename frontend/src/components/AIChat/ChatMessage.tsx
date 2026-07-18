import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  sender: "user" | "ai";
  message: string;
}

const ChatMessage = ({ sender, message }: ChatMessageProps) => {
  const isUser = sender === "user";

  return (
    <div
      className={`flex items-start gap-3 mb-6 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="bg-blue-100 p-3 rounded-full">
          <Bot size={20} className="text-blue-600" />
        </div>
      )}

      <div
        className={`max-w-[75%] px-5 py-3 rounded-2xl shadow ${
          isUser
            ? "bg-blue-600 text-white rounded-br-md"
            : "bg-gray-100 text-gray-800 rounded-bl-md"
        }`}
      >
        <p className="whitespace-pre-wrap">{message}</p>
      </div>

      {isUser && (
        <div className="bg-gray-200 p-3 rounded-full">
          <User size={20} className="text-gray-700" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;