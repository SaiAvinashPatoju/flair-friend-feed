
import { Bell, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="flex justify-between items-center px-4 h-14">
        <Link to="/" className="text-xl font-bold text-social-primary">FlairFriend</Link>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-gray-100 text-gray-600">
            <Search size={20} />
          </button>
          <button className="p-2 rounded-full bg-gray-100 text-gray-600 relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-4 w-4 bg-social-primary text-white rounded-full text-xs flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
