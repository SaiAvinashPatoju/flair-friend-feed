
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostsList from "@/components/posts/PostsList";
import { TrendingUp } from "lucide-react";

const HomePage = () => {
  return (
    <div className="mb-16">
      <Tabs defaultValue="foryou" className="w-full">
        <TabsList className="w-full flex bg-transparent border-b border-gray-200 mb-4">
          <TabsTrigger 
            value="foryou" 
            className="flex-1 py-3 data-[state=active]:border-b-2 data-[state=active]:border-social-primary rounded-none"
          >
            For You
          </TabsTrigger>
          <TabsTrigger 
            value="following" 
            className="flex-1 py-3 data-[state=active]:border-b-2 data-[state=active]:border-social-primary rounded-none"
          >
            Following
          </TabsTrigger>
          <TabsTrigger 
            value="trending" 
            className="flex-1 py-3 data-[state=active]:border-b-2 data-[state=active]:border-social-primary rounded-none"
          >
            <TrendingUp size={18} className="mr-1" />
            Trending
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="foryou" className="mt-0">
          <PostsList />
        </TabsContent>
        
        <TabsContent value="following" className="mt-0">
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Follow users to see their posts here!</p>
          </div>
        </TabsContent>
        
        <TabsContent value="trending" className="mt-0">
          <PostsList trending={true} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HomePage;
