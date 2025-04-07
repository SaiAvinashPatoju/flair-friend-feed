
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface MessageProps {
  id: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  sender?: {
    name: string;
    avatar: string;
  };
  isGroup?: boolean;
}

const Message = ({ content, timestamp, isOwn, sender, isGroup }: MessageProps) => {
  return (
    <div className={cn(
      "flex mb-4",
      isOwn ? "justify-end" : "justify-start"
    )}>
      {!isOwn && sender && (
        <div className="mr-2 flex-shrink-0">
          <Avatar className="h-8 w-8">
            <img src={sender.avatar} alt={sender.name} className="h-full w-full object-cover" />
          </Avatar>
        </div>
      )}
      
      <div className={cn(
        "max-w-[70%] rounded-2xl px-4 py-2",
        isOwn 
          ? "bg-social-primary text-white rounded-br-none" 
          : "bg-gray-100 text-gray-800 rounded-bl-none"
      )}>
        {!isOwn && isGroup && sender && (
          <p className="text-xs font-medium mb-1">{sender.name}</p>
        )}
        <p className="break-words">{content}</p>
        <p className={cn(
          "text-xs mt-1",
          isOwn ? "text-blue-100" : "text-gray-500"
        )}>
          {timestamp}
        </p>
      </div>
    </div>
  );
};

export default Message;
