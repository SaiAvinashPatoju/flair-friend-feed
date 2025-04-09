
import { Search, Settings, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [mode, setMode] = useState<'profile' | 'settings'>('profile');
  
  const toggleMode = () => {
    setMode(mode === 'profile' ? 'settings' : 'profile');
  };

  return (
    <header className="fixed top-0 w-full bg-background border-b border-border z-50">
      <div className="flex justify-between items-center px-4 h-16">
        <Link to="/" className="text-xl font-bold text-foreground">APP NAME</Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/search" className="p-2 rounded-full text-foreground hover:bg-accent/50 transition-colors">
            <Search size={22} />
          </Link>
          
          <div className="relative flex items-center bg-accent/40 rounded-full p-1">
            <button 
              className={`p-2 rounded-full transition-all ${mode === 'profile' ? 'bg-primary text-white' : 'text-foreground'}`}
              onClick={() => setMode('profile')}
            >
              <User size={20} />
            </button>
            <button 
              className={`p-2 rounded-full transition-all ${mode === 'settings' ? 'bg-primary text-white' : 'text-foreground'}`}
              onClick={() => setMode('settings')}
            >
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
