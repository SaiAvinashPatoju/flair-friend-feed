
import { Home, Users, PlusSquare, MessageSquare, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Users, label: "Groups", path: "/groups" },
    { icon: PlusSquare, label: "Create", path: "/create" },
    { icon: MessageSquare, label: "Chats", path: "/chats" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = path === item.path;
          
          return (
            <Link 
              key={index} 
              to={item.path} 
              className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
                isActive ? 'text-social-primary' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs mt-1">{item.label}</span>
              {isActive && (
                <div className="absolute bottom-0 w-10 h-0.5 bg-social-primary rounded-t-md"></div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavbar;
