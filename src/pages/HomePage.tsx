
import { Heart, MessageCircle, Users } from "lucide-react";
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import PostsList from "@/components/posts/PostsList";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const TweetBox = () => {
  const [tweet, setTweet] = useState('');
  
  return (
    <div className="tweet-box mb-6">
      <Carousel className="w-full" defaultIndex={1}>
        <CarouselContent>
          <CarouselItem>
            <div className="p-2">
              <h3 className="text-lg font-medium mb-2 text-left">What's happening?</h3>
              <div className="flex items-start space-x-3">
                <Avatar className="h-12 w-12 bg-accent">
                  <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=100&h=100" alt="Your profile" />
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    className="w-full bg-transparent border-none focus:outline-none resize-none text-foreground placeholder:text-muted-foreground min-h-[100px]"
                    placeholder="Share your thoughts..."
                    value={tweet}
                    onChange={(e) => setTweet(e.target.value)}
                  />
                  <div className="flex justify-end mt-2">
                    <Button className="bg-primary hover:bg-primary/80 text-white">
                      Tweet
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-2">
              <h3 className="text-lg font-medium mb-2 text-left">Tweets from people you follow</h3>
              <div className="space-y-4 p-2">
                <div className="flex gap-3 items-center p-2 rounded-lg bg-secondary/30">
                  <Avatar className="h-10 w-10">
                    <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=100&h=100" alt="Friend" />
                  </Avatar>
                  <div className="text-left flex-1">
                    <p className="text-sm font-semibold">@alex_coder</p>
                    <p className="text-foreground">Just launched my new site! Check it out and let me know what you think.</p>
                  </div>
                  <Heart size={18} className="text-muted-foreground hover:text-red-500 cursor-pointer" />
                </div>
                <div className="flex gap-3 items-center p-2 rounded-lg bg-secondary/30">
                  <Avatar className="h-10 w-10">
                    <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=100&h=100" alt="Friend" />
                  </Avatar>
                  <div className="text-left flex-1">
                    <p className="text-sm font-semibold">@jenny_designs</p>
                    <p className="text-foreground">Working on some new UI concepts for a client. Excited to share soon!</p>
                  </div>
                  <Heart size={18} className="text-muted-foreground hover:text-red-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="flex justify-center mt-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-muted"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
          </div>
        </div>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
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
