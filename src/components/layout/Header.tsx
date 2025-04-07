
import { Bell, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const NotificationItem = ({ avatar, username, action, time, onClose }: { 
  avatar: string, 
  username: string, 
  action: string, 
  time: string,
  onClose: () => void
}) => (
  <div className="flex items-center p-3 border-b border-gray-100 hover:bg-gray-50">
    <img src={avatar} alt={username} className="w-10 h-10 rounded-full mr-3" />
    <div className="flex-1">
      <p className="text-sm">
        <span className="font-semibold">{username}</span> {action}
      </p>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
  </div>
);

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  
  const closeNotifications = () => {
    setShowNotifications(false);
  };
  
  const notifications = [
    { 
      id: 1, 
      avatar: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=100&h=100",
      username: "tech_insider", 
      action: "liked your post", 
      time: "2 min ago" 
    },
    { 
      id: 2, 
      avatar: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=100&h=100", 
      username: "fitness_coach", 
      action: "commented on your photo", 
      time: "1 hour ago" 
    },
    { 
      id: 3, 
      avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=100&h=100", 
      username: "travel_mike", 
      action: "sent you a friend request", 
      time: "3 hours ago" 
    }
  ];

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="flex justify-between items-center px-4 h-14">
        <Link to="/" className="text-xl font-bold text-social-primary">FlairFriend</Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/search" className="p-2 rounded-full bg-gray-100 text-gray-600">
            <Search size={20} />
          </Link>
          <div className="relative">
            <button 
              className="p-2 rounded-full bg-gray-100 text-gray-600 relative"
              onClick={toggleNotifications}
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-4 w-4 bg-social-primary text-white rounded-full text-xs flex items-center justify-center">
                3
              </span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                <div className="flex items-center justify-between p-3 border-b border-gray-100 bg-gray-50">
                  <h3 className="font-semibold">Notifications</h3>
                  <button 
                    onClick={closeNotifications}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map(notification => (
                    <NotificationItem 
                      key={notification.id}
                      avatar={notification.avatar}
                      username={notification.username}
                      action={notification.action}
                      time={notification.time}
                      onClose={closeNotifications}
                    />
                  ))}
                </div>
                <div className="p-3 text-center border-t border-gray-100">
                  <Link 
                    to="/notifications" 
                    className="text-social-primary text-sm font-medium"
                    onClick={closeNotifications}
                  >
                    View all notifications
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
