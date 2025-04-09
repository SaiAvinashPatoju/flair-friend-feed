
import { Search, Settings, User, X, UserPlus, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle,
  SheetTrigger 
} from "@/components/ui/sheet";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mode, setMode] = useState<'profile' | 'settings'>('profile');
  const navigate = useNavigate();
  
  const toggleMode = () => {
    setMode(mode === 'profile' ? 'settings' : 'profile');
  };

  const handleProfileClick = () => {
    navigate('/profile');
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
              onClick={() => {
                setMode('profile');
                handleProfileClick();
              }}
            >
              <User size={20} />
            </button>
            <Sheet>
              <SheetTrigger asChild>
                <button 
                  className={`p-2 rounded-full transition-all ${mode === 'settings' ? 'bg-primary text-white' : 'text-foreground'}`}
                  onClick={() => setMode('settings')}
                >
                  <Settings size={20} />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Account Settings</SheetTitle>
                </SheetHeader>
                <div className="py-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=100&h=100" alt="Profile" />
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Jessica Green</h3>
                      <p className="text-sm text-muted-foreground">@jessica_green</p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full flex items-center gap-2"
                    onClick={() => navigate('/profile')}
                  >
                    <User size={16} />
                    Manage Profile
                  </Button>
                  
                  <Button variant="outline" className="mt-2 w-full flex items-center gap-2">
                    <UserPlus size={16} />
                    Add Another Account
                  </Button>
                  
                  <Separator className="my-6" />
                  
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Recommended to Follow</h4>
                    
                    {[
                      { name: "Alex Cooper", username: "@alexcooper", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=100&h=100" },
                      { name: "Sam Wilson", username: "@samwilson", image: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?auto=format&fit=crop&q=80&w=100&h=100" },
                      { name: "Taylor Swift", username: "@taylorswift", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" }
                    ].map((user, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <img src={user.image} alt={user.name} />
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.username}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="secondary" className="h-8 rounded-full">
                          <Users size={14} className="mr-1" />
                          Follow
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
