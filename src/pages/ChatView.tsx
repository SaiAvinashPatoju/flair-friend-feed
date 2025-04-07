
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MoreVertical, Phone, Video } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import MessageList from "@/components/chats/MessageList";
import MessageInput from "@/components/chats/MessageInput";
import { MessageProps } from "@/components/chats/Message";

// Mock data
const mockChats = {
  "1": {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=100&h=100",
    isGroup: false,
    messages: [
      {
        id: "1-1",
        content: "Hey, how are you doing today?",
        timestamp: "10:15 AM",
        isOwn: false,
        sender: {
          name: "Sarah Johnson",
          avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=100&h=100"
        }
      },
      {
        id: "1-2",
        content: "I'm good, thanks! Just finishing up some work. How about you?",
        timestamp: "10:17 AM",
        isOwn: true
      },
      {
        id: "1-3",
        content: "Are you coming to the event tomorrow?",
        timestamp: "10:30 AM",
        isOwn: false,
        sender: {
          name: "Sarah Johnson",
          avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=100&h=100"
        }
      }
    ]
  },
  "2": {
    id: "2",
    name: "Photography Group",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=100&h=100",
    isGroup: true,
    messages: [
      {
        id: "2-1",
        content: "Has everyone seen the new Nikon release?",
        timestamp: "Yesterday, 2:15 PM",
        isOwn: false,
        sender: {
          name: "David Chen",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
        }
      },
      {
        id: "2-2",
        content: "Yes! The specs look amazing.",
        timestamp: "Yesterday, 2:20 PM",
        isOwn: true
      },
      {
        id: "2-3",
        content: "Just posted some new shots from yesterday's shoot, check them out!",
        timestamp: "Yesterday, 3:45 PM",
        isOwn: false,
        sender: {
          name: "Mike Rodriguez",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
        }
      }
    ]
  },
  "3": {
    id: "3",
    name: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=100&h=100",
    isGroup: false,
    messages: [
      {
        id: "3-1",
        content: "I've sent the proposal to your email.",
        timestamp: "Yesterday, 9:23 AM",
        isOwn: false,
        sender: {
          name: "Alex Thompson",
          avatar: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=100&h=100"
        }
      },
      {
        id: "3-2",
        content: "Thanks, I'll take a look and get back to you.",
        timestamp: "Yesterday, 10:45 AM",
        isOwn: true
      },
      {
        id: "3-3",
        content: "Let me know when you've reviewed the proposal",
        timestamp: "Yesterday, 4:30 PM",
        isOwn: false,
        sender: {
          name: "Alex Thompson",
          avatar: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=100&h=100"
        }
      }
    ]
  },
  "4": {
    id: "4",
    name: "Tech Enthusiasts",
    avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=100&h=100",
    isGroup: true,
    messages: [
      {
        id: "4-1",
        content: "What do you all think about the new MacBook?",
        timestamp: "Tuesday, 11:23 AM",
        isOwn: false,
        sender: {
          name: "Emily Taylor",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
        }
      },
      {
        id: "4-2",
        content: "The M3 chip seems impressive from the benchmarks I've seen.",
        timestamp: "Tuesday, 11:30 AM",
        isOwn: true
      },
      {
        id: "4-3",
        content: "Has anyone tried the new React 20 yet?",
        timestamp: "Tuesday, 2:45 PM",
        isOwn: false,
        sender: {
          name: "Jessica Wu",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
        }
      }
    ]
  },
  "5": {
    id: "5",
    name: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=100&h=100",
    isGroup: false,
    messages: [
      {
        id: "5-1",
        content: "Just got back from my hiking trip!",
        timestamp: "Monday, 9:15 AM",
        isOwn: false,
        sender: {
          name: "James Wilson",
          avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=100&h=100"
        }
      },
      {
        id: "5-2",
        content: "That's awesome! How was it?",
        timestamp: "Monday, 9:30 AM",
        isOwn: true
      },
      {
        id: "5-3",
        content: "The hiking trip was amazing! Check out my latest post",
        timestamp: "Monday, 10:45 AM",
        isOwn: false,
        sender: {
          name: "James Wilson",
          avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=100&h=100"
        }
      }
    ]
  }
};

const ChatView = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const navigate = useNavigate();
  const [chat, setChat] = useState<typeof mockChats[keyof typeof mockChats] | null>(null);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  
  useEffect(() => {
    if (chatId && mockChats[chatId as keyof typeof mockChats]) {
      setChat(mockChats[chatId as keyof typeof mockChats]);
      setMessages(mockChats[chatId as keyof typeof mockChats].messages);
    }
  }, [chatId]);
  
  const handleSendMessage = (content: string) => {
    const newMessage: MessageProps = {
      id: `${chatId}-${Date.now()}`,
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true
    };
    
    setMessages((prev) => [...prev, newMessage]);
  };
  
  if (!chat) {
    return <div className="p-4 text-center">Chat not found</div>;
  }
  
  return (
    <div className="flex flex-col h-[calc(100vh-112px)] bg-white">
      {/* Chat header */}
      <div className="flex items-center p-3 border-b border-gray-200 bg-white">
        <button 
          onClick={() => navigate('/chats')}
          className="p-2 rounded-full hover:bg-gray-100 mr-1"
        >
          <ArrowLeft size={20} />
        </button>
        
        <Avatar className="h-10 w-10 mr-3">
          <img src={chat.avatar} alt={chat.name} className="h-full w-full object-cover" />
        </Avatar>
        
        <div className="flex-1">
          <h2 className="font-medium">{chat.name}</h2>
          <p className="text-xs text-muted-foreground">
            {chat.isGroup ? "Group chat" : "Online"}
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Phone size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Video size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>
      
      {/* Messages */}
      <MessageList messages={messages} isGroup={chat.isGroup} />
      
      {/* Message input */}
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatView;
