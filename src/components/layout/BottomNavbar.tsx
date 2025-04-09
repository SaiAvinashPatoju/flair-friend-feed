
import { Home, Users, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { icon: Users, label: "Groups", path: "/groups" },
    { icon: Home, label: "Home", path: "/" },
    { icon: MessageSquare, label: "Chats", path: "/chats" },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-background border-t border-border z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = path === item.path;
          const isHome = item.path === "/";
          
          return (
            <Link 
              key={index} 
              to={item.path} 
              className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className={`${isHome ? 'bg-primary/20 p-3 rounded-full' : ''}`}>
                <Icon size={isHome ? 28 : 24} className={isActive ? 'animate-pulse' : ''} />
              </div>
              <span className="text-xs mt-1">{item.label}</span>
              {isActive && (
                <div className="absolute bottom-0 w-10 h-0.5 bg-primary rounded-t-md"></div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavbar;
