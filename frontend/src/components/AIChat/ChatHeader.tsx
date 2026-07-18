import { Bot } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-white rounded-t-xl">
      <div className="flex items-center gap-3">
        <div className="bg-blue-100 p-3 rounded-full">
          <Bot className="w-7 h-7 text-blue-600" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            AI College Assistant
          </h2>

          <p className="text-sm text-gray-500">
            Ask anything about colleges, admissions, fees, placements and more.
          </p>
        </div>
      </div>

      <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
        Online
      </span>
    </div>
  );
};

export default ChatHeader;