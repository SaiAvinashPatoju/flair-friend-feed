
import { Avatar } from "@/components/ui/avatar";
import { CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

interface FriendRequestProps {
  id: string;
  name: string;
  avatar: string;
  mutualFriends: number;
}

const FriendRequest = ({ name, avatar, mutualFriends }: FriendRequestProps) => {
  const [status, setStatus] = useState<'pending' | 'accepted' | 'rejected'>('pending');
  
  const handleAccept = () => {
    setStatus('accepted');
  };
  
  const handleReject = () => {
    setStatus('rejected');
  };
  
  if (status !== 'pending') {
    return (
      <div className="flex items-center p-3 space-x-3 border-b border-gray-100">
        <Avatar className="h-12 w-12">
          <img src={avatar} alt={name} className="h-full w-full object-cover" />
        </Avatar>
        
        <div className="flex-1">
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">
            {status === 'accepted' 
              ? 'You are now friends' 
              : 'Friend request declined'}
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex items-center p-3 space-x-3 border-b border-gray-100">
      <Avatar className="h-12 w-12">
        <img src={avatar} alt={name} className="h-full w-full object-cover" />
      </Avatar>
      
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-muted-foreground">{mutualFriends} mutual friends</p>
      </div>
      
      <div className="flex space-x-2">
        <button 
          onClick={handleAccept}
          className="text-green-500 hover:text-green-600"
        >
          <CheckCircle size={24} />
        </button>
        <button 
          onClick={handleReject}
          className="text-red-500 hover:text-red-600"
        >
          <XCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default FriendRequest;
