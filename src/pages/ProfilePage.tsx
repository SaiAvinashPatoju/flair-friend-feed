
import { Avatar } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Heart, MessageCircle, Robot } from "lucide-react";
import FriendRequestsList from "@/components/profile/FriendRequestsList";
import { useState } from 'react';

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
          <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
            <Robot size={16} className="text-primary/70" />
          </div>
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
      {/* Profile Header with background image - Made larger as requested */}
      <div className="relative mb-20">
        <div className="h-52 bg-gradient-to-b from-black to-primary/40 overflow-hidden">
          <img 
            src="/lovable-uploads/d12454e3-9038-4444-8a89-b2ed4e13dbad.png" 
            alt="Profile background" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
        </div>
        
        {/* Profile info overlay */}
        <div className="absolute -bottom-12 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-bold uppercase text-xs text-muted-foreground">USERNAME</div>
              <div className="font-bold text-lg mb-2">user name</div>
            </div>
            <Settings size={16} className="text-muted-foreground" />
          </div>
          
          {/* Stats */}
          <div className="flex justify-between text-center mt-2">
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
          content="Just started using this amazing app called Threadz! The design is awesome and I'm loving the user experience so far. #newapp #tech" 
          commentsCount={5} 
        />
        <ProfileTweet 
          username="user name" 
          timeAgo="2 days ago"
          content="Working on a new project today. Can't wait to share the results with everyone!" 
          commentsCount={3} 
        />
      </div>
    </div>
  );
};

export default ProfilePage;
