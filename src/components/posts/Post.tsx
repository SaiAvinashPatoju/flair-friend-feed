
import { Heart, MessageCircle, SendHorizontal, Robot } from "lucide-react";
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
    <div className="bg-secondary/30 rounded-xl p-4 mb-3">
      <div className="flex justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8 bg-card">
            {userAvatar ? (
              <img src={userAvatar} alt={username} className="h-full w-full object-cover" />
            ) : (
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                <Robot size={16} className="text-primary/70" />
              </div>
            )}
          </Avatar>
          <div className="text-sm">
            <span className="font-medium">{username || "user name"}</span>
            <span className="text-muted-foreground ml-1 text-xs">{timeAgo}</span>
          </div>
        </div>
        <button 
          onClick={handleLike}
          className="p-1"
        >
          <Heart 
            size={18} 
            className={isLiked ? "text-red-500 fill-red-500" : "text-muted-foreground"} 
          />
        </button>
      </div>
      <p className="text-sm mb-3">{content}</p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <button className="p-1 text-muted-foreground">
            <MessageCircle size={18} />
          </button>
          <button className="p-1 text-muted-foreground">
            <SendHorizontal size={18} />
          </button>
        </div>
        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
          <div className="flex items-center">
            <Heart size={14} className="mr-1" />
            <span>{likesCount}</span>
          </div>
          <div className="flex items-center">
            <MessageCircle size={14} className="mr-1" />
            <span>{commentsCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
