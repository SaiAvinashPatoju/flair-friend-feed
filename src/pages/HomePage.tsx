
import { Heart, MessageCircle, SendHorizontal } from "lucide-react";
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Simplified Tweet component
const Tweet = ({ 
  username, 
  timeAgo, 
  content, 
  isFollowing = false 
}: { 
  username: string; 
  timeAgo: string; 
  content: string;
  isFollowing?: boolean;
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className={`rounded-xl p-4 mb-3 ${isFollowing ? 'bg-secondary/30' : 'bg-muted/40'}`}>
      <div className="flex justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8 bg-card">
            <div className="w-full h-full rounded-full bg-muted"></div>
          </Avatar>
          <div className="text-sm">
            <span className="font-medium">{username}</span>
            <span className="text-muted-foreground ml-1 text-xs">{timeAgo}</span>
          </div>
        </div>
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="p-1"
        >
          <Heart 
            size={18} 
            className={isLiked ? "text-red-500 fill-red-500" : "text-muted-foreground"} 
          />
        </button>
      </div>
      <p className="text-sm mb-3">{content}</p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <button className="p-1 text-muted-foreground">
            <MessageCircle size={18} />
          </button>
          <button className="p-1 text-muted-foreground">
            <SendHorizontal size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Tweet composer component
const TweetComposer = () => {
  const [text, setText] = useState('');
  
  return (
    <div className="bg-primary/20 rounded-xl p-4 mb-4">
      <div className="flex space-x-3">
        <Avatar className="h-8 w-8 bg-card flex-shrink-0">
          <div className="w-full h-full rounded-full bg-muted"></div>
        </Avatar>
        <div className="flex-grow">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's happening?"
            className="bg-transparent border-none resize-none text-sm min-h-[60px] p-0 focus-visible:ring-0"
          />
          <div className="flex justify-end mt-2">
            <Button size="sm" className="rounded-full px-4 py-1 h-8 text-xs bg-primary text-primary-foreground">
              post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dot indicator component
const DotIndicator = ({ active = false }: { active?: boolean }) => (
  <div className={`w-2 h-2 rounded-full ${active ? 'bg-primary' : 'bg-muted'}`}></div>
);

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<'foryou' | 'following'>('foryou');
  
  return (
    <div className="mb-16">
      {/* Tweet composer */}
      <TweetComposer />
      
      {/* Dots indicator */}
      <div className="flex justify-center space-x-1 mb-4">
        <DotIndicator active={true} />
        <DotIndicator />
        <DotIndicator />
      </div>
      
      {/* Tab selector */}
      <div className="mb-4">
        <div className={`${activeTab === 'following' ? 'bg-primary' : 'bg-secondary/40'} text-center py-2 rounded-full mb-4`}>
          <button 
            onClick={() => setActiveTab('following')}
            className={`text-sm font-medium ${activeTab === 'following' ? 'text-primary-foreground' : 'text-muted-foreground'}`}
          >
            following
          </button>
        </div>
      </div>
      
      {/* Tweets list */}
      <div className="space-y-1">
        {activeTab === 'following' ? (
          <>
            <Tweet 
              username="other user name" 
              timeAgo="7 hours ago" 
              content="text content" 
              isFollowing={true} 
            />
            <Tweet 
              username="other user name" 
              timeAgo="7 hours ago" 
              content="text content" 
              isFollowing={true} 
            />
          </>
        ) : (
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground text-sm">Follow users to see their posts here!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
