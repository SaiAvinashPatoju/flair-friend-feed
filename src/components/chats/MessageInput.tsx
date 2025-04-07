
import { useState } from "react";
import { Paperclip, Send, Smile } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (content: string) => void;
}

const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };
  
  return (
    <form 
      onSubmit={handleSubmit}
      className="border-t border-gray-200 p-3 bg-white"
    >
      <div className="flex items-center gap-2">
        <button 
          type="button"
          className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
        >
          <Paperclip size={20} />
        </button>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-social-primary"
        />
        
        <button 
          type="button"
          className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
        >
          <Smile size={20} />
        </button>
        
        <button 
          type="submit"
          disabled={!message.trim()}
          className="p-2 rounded-full bg-social-primary text-white disabled:opacity-50"
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
