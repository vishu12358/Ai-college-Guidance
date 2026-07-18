import { Bot } from "lucide-react";

const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-6">
      <div className="flex items-start gap-3">
        <div className="bg-gray-200 p-3 rounded-full">
          <Bot size={20} />
        </div>

        <div className="bg-gray-100 px-5 py-3 rounded-2xl shadow">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></span>
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;