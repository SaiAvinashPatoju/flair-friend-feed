
import { Heart, MessageCircle, Users } from "lucide-react";
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import PostsList from "@/components/posts/PostsList";

const TweetBox = () => {
  const [tweet, setTweet] = useState('');
  
  return (
    <div className="tweet-box">
      <div className="flex items-start space-x-3">
        <Avatar className="h-10 w-10 bg-accent">
          <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=100&h=100" alt="Your profile" />
        </Avatar>
        <div className="flex-1">
          <textarea
            className="w-full bg-transparent border-none focus:outline-none resize-none text-foreground placeholder:text-muted-foreground"
            placeholder="What's happening?"
            rows={2}
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
        </div>
        <button className="text-muted-foreground hover:text-primary transition-colors">
          <Heart size={20} />
        </button>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('foryou');
  
  return (
    <div className="mb-16">
      <TweetBox />
      
      <div className="flex justify-center mb-6">
        <div className="bg-secondary/50 rounded-full p-1 flex">
          <button 
            onClick={() => setActiveTab('foryou')} 
            className={`category-tab ${activeTab === 'foryou' ? 'bg-primary text-white' : 'text-muted-foreground'}`}
          >
            For You
          </button>
          <button 
            onClick={() => setActiveTab('following')} 
            className={`category-tab ${activeTab === 'following' ? 'bg-primary text-white' : 'text-muted-foreground'}`}
          >
            Following
          </button>
          <button 
            onClick={() => setActiveTab('trending')} 
            className={`category-tab ${activeTab === 'trending' ? 'bg-primary text-white' : 'text-muted-foreground'}`}
          >
            Trending
          </button>
        </div>
      </div>
      
      <div className="space-y-6">
        {activeTab === 'foryou' && <PostsList />}
        
        {activeTab === 'following' && (
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Follow users to see their posts here!</p>
          </div>
        )}
        
        {activeTab === 'trending' && <PostsList trending={true} />}
      </div>
    </div>
  );
};

export default HomePage;
