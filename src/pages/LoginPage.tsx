
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col bg-background p-6">
      <div className="mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-accent/50 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">Login to Threadz</h1>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          
          <div className="text-right">
            <button className="text-primary text-sm hover:underline">
              Forgot password?
            </button>
          </div>
          
          <Button 
            type="submit" 
            className="w-full rounded-full bg-[#c683ce] hover:bg-[#b06fb7]"
            onClick={() => navigate('/home')}
          >
            Login
          </Button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <button 
              onClick={() => navigate('/register')}
              className="text-primary hover:underline"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
