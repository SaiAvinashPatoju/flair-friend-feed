
import { useState } from "react";
import Post from "./Post";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const mockPosts = [
  {
    id: "1",
    username: "user name",
    userAvatar: "",
    timeAgo: "2 hours ago",
    content: "Just finished my latest design project! What do you think? 😊 #design #creativity",
    likesCount: 124,
    commentsCount: 28
  },
  {
    id: "2",
    username: "user name",
    userAvatar: "",
    timeAgo: "5 hours ago",
    content: "The view from my hike this morning was absolutely breathtaking! 🏔️ #nature #adventure",
    likesCount: 89,
    commentsCount: 12
  },
  {
    id: "3",
    username: "user name",
    userAvatar: "",
    timeAgo: "Yesterday",
    content: "Just launched my new website! Check it out and let me know what you think. Building with React has been such a great experience.",
    likesCount: 56,
    commentsCount: 8
  }
];

const trendingPosts = [
  {
    id: "5",
    username: "tech_insider",
    userAvatar: "",
    timeAgo: "8 hours ago",
    content: "Breaking: The new AI model just released is showing incredible results! 🤖 #AI #technology #future",
    likesCount: 1542,
    commentsCount: 329
  },
  {
    id: "6",
    username: "fitness_coach",
    userAvatar: "",
    timeAgo: "1 day ago",
    content: "This 5-minute workout has changed my clients' lives! Try it yourself and see the results 💪 #fitness #health",
    likesCount: 2038,
    commentsCount: 457
  },
  {
    id: "7",
    username: "foodie_adventures",
    userAvatar: "",
    timeAgo: "2 days ago",
    content: "I discovered this hidden gem restaurant and the food is AMAZING! 😍🍽️ #foodie #restaurant #musttry",
    likesCount: 1832,
    commentsCount: 283
  }
];

interface PostsListProps {
  trending?: boolean;
}

const PostsList = ({ trending = false }: PostsListProps) => {
  const [activeTab, setActiveTab] = useState<'following' | 'foryou'>('foryou');
  
  const handleTabChange = (tab: 'following' | 'foryou') => {
    setActiveTab(tab);
  };
  
  const postsToShow = activeTab === 'following' ? mockPosts : trendingPosts;
  
  return (
    <div className="space-y-4">
      <Carousel className="mb-6">
        <CarouselContent>
          <CarouselItem className="basis-full">
            <div 
              className={`${activeTab === 'foryou' ? 'bg-primary' : 'bg-secondary/40'} text-center py-2 rounded-full`}
              onClick={() => handleTabChange('foryou')}
            >
              <button className={`text-sm font-medium ${activeTab === 'foryou' ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                for you
              </button>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full">
            <div 
              className={`${activeTab === 'following' ? 'bg-primary' : 'bg-secondary/40'} text-center py-2 rounded-full`}
              onClick={() => handleTabChange('following')}
            >
              <button className={`text-sm font-medium ${activeTab === 'following' ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                following
              </button>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      <div className="space-y-1">
        {postsToShow.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
