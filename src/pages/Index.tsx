
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
        {/* Main image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/lovable-uploads/cb6a969c-938f-47f5-98ba-c63c7363435c.png" 
            alt="Social media phone" 
            className="w-full h-full object-cover"
          />
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
