import { Send } from "lucide-react";
import { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="border-t p-4 bg-white rounded-b-xl">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Ask anything about colleges..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;