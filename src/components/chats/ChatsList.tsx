
import ChatPreview from "./ChatPreview";

const mockChats = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=100&h=100",
    lastMessage: "Are you coming to the event tomorrow?",
    time: "10:30 AM",
    unread: 2
  },
  {
    id: "2",
    name: "Photography Group",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=100&h=100", 
    lastMessage: "Mike: Just posted some new shots from yesterday's shoot",
    time: "Yesterday",
    unread: 0,
    isGroup: true
  },
  {
    id: "3",
    name: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=100&h=100",
    lastMessage: "Let me know when you've reviewed the proposal",
    time: "Yesterday",
    unread: 0
  },
  {
    id: "4",
    name: "Tech Enthusiasts",
    avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=100&h=100",
    lastMessage: "Jessica: Has anyone tried the new React 20 yet?",
    time: "Tuesday",
    unread: 0,
    isGroup: true
  },
  {
    id: "5",
    name: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=100&h=100",
    lastMessage: "The hiking trip was amazing! Check out my latest post",
    time: "Monday",
    unread: 0
  }
];

const ChatsList = () => {
  return (
    <div>
      {mockChats.map((chat) => (
        <ChatPreview key={chat.id} {...chat} />
      ))}
    </div>
  );
};

export default ChatsList;
