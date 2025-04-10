
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const RegisterPage = () => {
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
        <h1 className="text-3xl font-bold mb-8 text-center">Create Account</h1>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
            <Input id="name" type="text" placeholder="Enter your full name" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <Input id="password" type="password" placeholder="Create a password" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="confirm-password" className="text-sm font-medium">Confirm Password</label>
            <Input id="confirm-password" type="password" placeholder="Confirm your password" />
          </div>
          
          <Button 
            type="submit" 
            className="w-full rounded-full bg-[#e29bd8] hover:bg-[#d687c8]"
            onClick={() => navigate('/home')}
          >
            SIGN UP
          </Button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <button 
              onClick={() => navigate('/login')}
              className="text-primary hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
