
import { Avatar } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Heart, MessageCircle } from "lucide-react";
import FriendRequestsList from "@/components/profile/FriendRequestsList";

// Tweet component for profile page
const ProfileTweet = ({ 
  username, 
  timeAgo, 
  content,
  commentsCount = 0
}: { 
  username: string; 
  timeAgo: string; 
  content: string;
  commentsCount?: number;
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-primary/20 rounded-xl p-4 mb-3">
      <div className="flex items-start space-x-2 mb-2">
        <Avatar className="h-8 w-8 bg-card">
          <div className="w-full h-full rounded-full bg-muted"></div>
        </Avatar>
        <div className="flex-1">
          <div className="text-sm">
            <span className="font-medium">{username}</span>
            <span className="text-muted-foreground ml-1 text-xs">{timeAgo}</span>
          </div>
          <p className="text-sm mt-1">{content}</p>
        </div>
      </div>
      
      <div className="flex space-x-4 mt-2">
        <button 
          onClick={() => setIsLiked(!isLiked)} 
          className="flex items-center text-xs text-muted-foreground"
        >
          <Heart 
            size={14} 
            className={`mr-1 ${isLiked ? "text-red-500 fill-red-500" : ""}`} 
          />
        </button>
        
        <div className="flex items-center text-xs text-muted-foreground">
          <MessageCircle size={14} className="mr-1" />
          <span>{commentsCount}</span>
        </div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const [userStats] = useState({
    following: 256,
    followers: 256,
    posts: 69
  });

  return (
    <div className="mb-16">
      {/* Profile Header with background image */}
      <div className="relative mb-16">
        <div className="h-40 bg-gradient-to-b from-black to-primary/40 overflow-hidden">
          <img 
            src="/lovable-uploads/ea4191cf-acdb-49ab-996b-3cb231d688d4.png" 
            alt="Profile background" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute top-2 right-2 flex space-x-2">
            {/* Social media reaction icons - simplified */}
            <div className="w-6 h-6 rounded-full bg-primary/80 flex items-center justify-center text-xs">👍</div>
            <div className="w-6 h-6 rounded-full bg-primary/80 flex items-center justify-center text-xs">❤️</div>
            <div className="w-6 h-6 rounded-full bg-primary/80 flex items-center justify-center text-xs">😊</div>
          </div>
        </div>
        
        {/* Profile info overlay */}
        <div className="absolute -bottom-12 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-3">
          <div className="flex justify-between items-center">
            <div className="font-bold uppercase text-xs text-muted-foreground">USERNAME</div>
            <Settings size={16} className="text-muted-foreground" />
          </div>
          <div className="font-bold text-lg mb-2">user name</div>
          
          {/* Stats */}
          <div className="flex justify-between text-center">
            <div>
              <div className="font-bold">{userStats.following}</div>
              <div className="text-xs text-muted-foreground uppercase">Following</div>
            </div>
            <div>
              <div className="font-bold">{userStats.followers}</div>
              <div className="text-xs text-muted-foreground uppercase">Followers</div>
            </div>
            <div>
              <div className="font-bold">{userStats.posts}</div>
              <div className="text-xs text-muted-foreground uppercase">Posts</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* User Posts */}
      <div className="mt-16">
        <ProfileTweet 
          username="user name" 
          timeAgo="7 hours ago"
          content="" 
          commentsCount={0} 
        />
      </div>
    </div>
  );
};

import { useState } from 'react';
export default ProfilePage;
