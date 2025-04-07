
import { Search, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatsList from "@/components/chats/ChatsList";
import { useNavigate } from "react-router-dom";

const ChatsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Messages</h1>
        <button 
          className="p-2 rounded-full bg-social-primary text-white hover:bg-social-primary/90 transition-colors"
          onClick={() => {
            // This would open a new chat creation dialog in a real app
            // For now, we'll navigate to the first chat as an example
            navigate('/chats/1');
          }}
        >
          <Plus size={20} />
        </button>
      </div>
      
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
        <input
          type="text"
          placeholder="Search messages..."
          className="w-full bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-social-primary"
        />
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full flex bg-transparent border-b border-gray-200 mb-2">
          <TabsTrigger 
            value="all" 
            className="flex-1 py-2 data-[state=active]:border-b-2 data-[state=active]:border-social-primary rounded-none"
          >
            All
          </TabsTrigger>
          <TabsTrigger 
            value="groups" 
            className="flex-1 py-2 data-[state=active]:border-b-2 data-[state=active]:border-social-primary rounded-none"
          >
            Groups
          </TabsTrigger>
          <TabsTrigger 
            value="unread" 
            className="flex-1 py-2 data-[state=active]:border-b-2 data-[state=active]:border-social-primary rounded-none"
          >
            Unread
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <ChatsList />
        </TabsContent>
        
        <TabsContent value="groups" className="mt-0">
          <div className="flex flex-col items-center justify-center h-40 py-8">
            <p className="text-muted-foreground mb-3">Your group chats will appear here</p>
            <button 
              className="px-4 py-2 rounded-full bg-social-primary text-white text-sm hover:bg-social-primary/90 transition-colors"
              onClick={() => navigate('/chats/2')}
            >
              Join a group chat
            </button>
          </div>
        </TabsContent>
        
        <TabsContent value="unread" className="mt-0">
          <div className="flex flex-col items-center justify-center h-40 py-8">
            <p className="text-muted-foreground mb-3">No unread messages</p>
            <button 
              className="px-4 py-2 rounded-full bg-social-primary text-white text-sm hover:bg-social-primary/90 transition-colors"
              onClick={() => navigate('/chats')}
            >
              View all messages
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChatsPage;
