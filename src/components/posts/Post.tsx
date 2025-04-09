
import { Heart, MessageCircle, Users } from "lucide-react";
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";

interface PostProps {
  id: string;
  username: string;
  userAvatar: string;
  timeAgo: string;
  content: string;
  image?: string;
  likesCount: number;
  commentsCount: number;
}

const Post = ({
  username,
  userAvatar,
  timeAgo,
  content,
  image,
  likesCount: initialLikes,
  commentsCount,
}: PostProps) => {
  const [likesCount, setLikesCount] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="post-card from-secondary/20 to-card bg-gradient-to-b">
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-2">
            <Avatar className="h-10 w-10 border border-border/50">
              <img src={userAvatar} alt={username} className="h-full w-full object-cover" />
            </Avatar>
            <div>
              <h3 className="font-medium text-foreground">{username}</h3>
              <p className="text-xs text-muted-foreground">{timeAgo}</p>
            </div>
          </div>
          <button onClick={handleLike} className={`p-2 rounded-full ${isLiked ? 'text-red-500' : 'text-muted-foreground'}`}>
            <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
          </button>
        </div>
        
        <p className="mb-3 text-foreground">{content}</p>
        
        {image && (
          <div className="mb-3 -mx-4">
            <img 
              src={image} 
              alt="Post" 
              className="w-full max-h-96 object-cover"
            />
          </div>
        )}
        
        <div className="flex space-x-4 pt-2">
          <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
            <Users size={20} />
            <span className="text-sm">Follow</span>
          </button>
          
          <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle size={20} />
            <span className="text-sm">Comment ({commentsCount})</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
