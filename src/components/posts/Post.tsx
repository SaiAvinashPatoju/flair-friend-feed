
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
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
    <div className="post-card mb-4 animate-fade-in">
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-2">
            <Avatar className="h-10 w-10">
              <img src={userAvatar} alt={username} className="h-full w-full object-cover" />
            </Avatar>
            <div>
              <h3 className="font-medium">{username}</h3>
              <p className="text-xs text-muted-foreground">{timeAgo}</p>
            </div>
          </div>
          <button className="text-gray-500">
            <MoreHorizontal size={20} />
          </button>
        </div>
        
        <p className="mb-3">{content}</p>
        
        {image && (
          <div className="mb-3 -mx-4">
            <img 
              src={image} 
              alt="Post" 
              className="w-full max-h-96 object-cover"
            />
          </div>
        )}
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <button 
            className={`flex items-center space-x-1 ${isLiked ? 'text-red-500' : 'text-gray-500'}`}
            onClick={handleLike}
          >
            <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
            <span>{likesCount}</span>
          </button>
          
          <button className="flex items-center space-x-1 text-gray-500">
            <MessageCircle size={20} />
            <span>{commentsCount}</span>
          </button>
          
          <button className="flex items-center space-x-1 text-gray-500">
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
