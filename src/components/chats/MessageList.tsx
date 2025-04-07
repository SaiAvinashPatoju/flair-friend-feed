
import { useEffect, useRef } from "react";
import Message, { MessageProps } from "./Message";

interface MessageListProps {
  messages: MessageProps[];
  isGroup?: boolean;
}

const MessageList = ({ messages, isGroup = false }: MessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  return (
    <div className="flex-1 overflow-y-auto px-4 py-4">
      {messages.map((message) => (
        <Message key={message.id} {...message} isGroup={isGroup} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
