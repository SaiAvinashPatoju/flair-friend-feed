
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Back button */}
      <div className="absolute top-6 left-6">
        <button className="p-2 rounded-full bg-accent/50 backdrop-blur-sm">
          <ArrowLeft className="text-foreground" size={24} />
        </button>
      </div>
      
      {/* Social media icons */}
      <div className="flex-1 relative">
        {/* Main image/logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Purple circular gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/40 to-transparent rounded-full opacity-70 animate-pulse"></div>
            
            {/* Threadz logo text */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-6xl font-extrabold text-foreground tracking-tighter mb-2">
                Threadz
              </div>
              <div className="text-sm text-muted-foreground">Connect your world</div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 w-40 h-40 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -z-10 w-32 h-32 bg-purple-700/30 rounded-full blur-xl -translate-x-10 translate-y-5"></div>
              <div className="absolute -z-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl translate-x-12 -translate-y-8"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="bg-card py-6 px-4 rounded-t-3xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-foreground">Threadz</h1>
        
        <div className="space-y-4 max-w-xs mx-auto">
          <Button 
            className="w-full rounded-full bg-primary hover:bg-primary/80 text-primary-foreground py-6"
            onClick={() => navigate('/login')}
          >
            login
          </Button>
          
          <Button 
            variant="secondary"
            className="w-full rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground py-6"
            onClick={() => navigate('/register')}
          >
            SIGN UP/REGISTER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
