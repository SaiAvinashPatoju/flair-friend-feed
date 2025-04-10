
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PostsList from "@/components/posts/PostsList";
import { Robot } from "lucide-react";

// Tweet composer component
const TweetComposer = () => {
  const [text, setText] = useState('');
  
  return (
    <div className="bg-primary/20 rounded-xl p-4 mb-4">
      <div className="flex space-x-3">
        <Avatar className="h-8 w-8 bg-card flex-shrink-0">
          <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
            <Robot size={16} className="text-primary/70" />
          </div>
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
      
      {/* Posts list with tabs */}
      <PostsList />
    </div>
  );
};

export default HomePage;
