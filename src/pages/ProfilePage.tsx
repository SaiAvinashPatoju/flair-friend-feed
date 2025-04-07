
import { Avatar } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, UsersRound, Grid3X3, Bookmark } from "lucide-react";
import FriendRequestsList from "@/components/profile/FriendRequestsList";

const ProfilePage = () => {
  return (
    <div className="mb-16">
      {/* Profile Header */}
      <div className="relative mb-6">
        <div className="h-32 bg-gradient-to-r from-social-primary to-social-secondary"></div>
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <Avatar className="h-32 w-32 border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=100&h=100" 
              alt="Profile" 
              className="h-full w-full object-cover"
            />
          </Avatar>
          <h1 className="text-xl font-bold mt-2">Jessica Green</h1>
          <p className="text-muted-foreground">Photographer & Designer</p>
        </div>
      </div>
      
      {/* Spacing for profile details */}
      <div className="h-24"></div>
      
      {/* Stats */}
      <div className="flex justify-center space-x-6 py-4 border-y border-gray-200 mb-6">
        <div className="text-center">
          <p className="font-bold">248</p>
          <p className="text-sm text-muted-foreground">Posts</p>
        </div>
        <div className="text-center">
          <p className="font-bold">1,435</p>
          <p className="text-sm text-muted-foreground">Friends</p>
        </div>
        <div className="text-center">
          <p className="font-bold">18</p>
          <p className="text-sm text-muted-foreground">Groups</p>
        </div>
      </div>
      
      {/* Friend Requests */}
      <div className="mb-6">
        <FriendRequestsList />
      </div>
      
      {/* Profile Tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full flex bg-transparent mb-4">
          <TabsTrigger 
            value="posts" 
            className="flex-1 py-2 data-[state=active]:bg-social-light data-[state=active]:text-social-primary"
          >
            <Grid3X3 size={18} className="mr-1" />
            Posts
          </TabsTrigger>
          <TabsTrigger 
            value="friends" 
            className="flex-1 py-2 data-[state=active]:bg-social-light data-[state=active]:text-social-primary"
          >
            <UsersRound size={18} className="mr-1" />
            Friends
          </TabsTrigger>
          <TabsTrigger 
            value="saved" 
            className="flex-1 py-2 data-[state=active]:bg-social-light data-[state=active]:text-social-primary"
          >
            <Bookmark size={18} className="mr-1" />
            Saved
          </TabsTrigger>
          <TabsTrigger 
            value="settings" 
            className="flex-1 py-2 data-[state=active]:bg-social-light data-[state=active]:text-social-primary"
          >
            <Settings size={18} className="mr-1" />
            Settings
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts" className="mt-0">
          <div className="grid grid-cols-3 gap-1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=300&h=300`} 
                  alt="Post" 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="friends" className="mt-0">
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Your friends will appear here</p>
          </div>
        </TabsContent>
        
        <TabsContent value="saved" className="mt-0">
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Your saved posts will appear here</p>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="mt-0">
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Account settings will appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
