
import { Avatar } from "@/components/ui/avatar";

interface ChatPreviewProps {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
  isGroup?: boolean;
}

const ChatPreview = ({ 
  name, 
  avatar, 
  lastMessage, 
  time, 
  unread = 0, 
  isGroup = false 
}: ChatPreviewProps) => {
  return (
    <div className="flex items-center p-3 space-x-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
      <Avatar className="h-12 w-12">
        <img src={avatar} alt={name} className="h-full w-full object-cover" />
      </Avatar>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <h3 className="font-medium truncate">{name}</h3>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        
        <p className="text-sm text-muted-foreground truncate">{lastMessage}</p>
      </div>
      
      {unread > 0 && (
        <div className="flex-shrink-0 h-5 w-5 bg-social-primary text-white rounded-full text-xs flex items-center justify-center">
          {unread}
        </div>
      )}
    </div>
  );
};

export default ChatPreview;
