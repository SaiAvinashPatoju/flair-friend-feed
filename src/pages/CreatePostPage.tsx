
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Image, Smile, MapPin, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreatePostPage = () => {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const handleSelectImage = () => {
    // In a real app, this would open a file picker
    // For demo purposes, just set a random image
    setSelectedImage("https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=800");
  };
  
  const handleRemoveImage = () => {
    setSelectedImage(null);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() && !selectedImage) {
      toast.error("Please add some content to your post");
      return;
    }
    
    // In a real app, this would submit the post to an API
    toast.success("Post created successfully!");
    navigate("/");
  };
  
  return (
    <div className="mb-16">
      <div className="post-card">
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-4">
            <Avatar className="h-10 w-10">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=100&h=100" 
                alt="Your avatar" 
                className="h-full w-full object-cover" 
              />
            </Avatar>
            <div>
              <h3 className="font-medium">Create Post</h3>
              <p className="text-xs text-muted-foreground">Share your thoughts or upload a photo</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border-none resize-none focus:outline-none focus:ring-0 min-h-[100px] placeholder:text-muted-foreground"
            />
            
            {selectedImage && (
              <div className="relative mb-4">
                <img 
                  src={selectedImage} 
                  alt="Selected" 
                  className="w-full rounded-lg object-cover max-h-48"
                />
                <button 
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full"
                >
                  <X size={16} />
                </button>
              </div>
            )}
            
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex space-x-2">
                <button 
                  type="button"
                  onClick={handleSelectImage}
                  className="p-2 rounded-full hover:bg-gray-100 text-social-accent"
                >
                  <Image size={20} />
                </button>
                <button 
                  type="button"
                  className="p-2 rounded-full hover:bg-gray-100 text-social-secondary"
                >
                  <Smile size={20} />
                </button>
                <button 
                  type="button"
                  className="p-2 rounded-full hover:bg-gray-100 text-blue-500"
                >
                  <MapPin size={20} />
                </button>
              </div>
              
              <Button type="submit" className="bg-social-primary hover:bg-social-primary/90">
                Post
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
