
import Post from "./Post";

const mockPosts = [
  {
    id: "1",
    username: "jenny_designs",
    userAvatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=100&h=100",
    timeAgo: "2 hours ago",
    content: "Just finished my latest design project! What do you think? 😊 #design #creativity",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    likesCount: 124,
    commentsCount: 28
  },
  {
    id: "2",
    username: "travel_mike",
    userAvatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=100&h=100",
    timeAgo: "5 hours ago",
    content: "The view from my hike this morning was absolutely breathtaking! 🏔️ #nature #adventure",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=800",
    likesCount: 89,
    commentsCount: 12
  },
  {
    id: "3",
    username: "alex_coder",
    userAvatar: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=100&h=100",
    timeAgo: "Yesterday",
    content: "Just launched my new website! Check it out and let me know what you think. Building with React has been such a great experience.",
    likesCount: 56,
    commentsCount: 8
  },
  {
    id: "4",
    username: "pet_lover",
    userAvatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=100&h=100",
    timeAgo: "2 days ago",
    content: "My cat just being adorable as usual 😻 #catlover",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=800",
    likesCount: 215,
    commentsCount: 42
  }
];

const trendingPosts = [
  {
    id: "5",
    username: "tech_insider",
    userAvatar: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=100&h=100",
    timeAgo: "8 hours ago",
    content: "Breaking: The new AI model just released is showing incredible results! 🤖 #AI #technology #future",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800",
    likesCount: 1542,
    commentsCount: 329
  },
  {
    id: "6",
    username: "fitness_coach",
    userAvatar: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=100&h=100",
    timeAgo: "1 day ago",
    content: "This 5-minute workout has changed my clients' lives! Try it yourself and see the results 💪 #fitness #health",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    likesCount: 2038,
    commentsCount: 457
  },
  {
    id: "7",
    username: "foodie_adventures",
    userAvatar: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=100&h=100",
    timeAgo: "2 days ago",
    content: "I discovered this hidden gem restaurant and the food is AMAZING! 😍🍽️ #foodie #restaurant #musttry",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800",
    likesCount: 1832,
    commentsCount: 283
  }
];

interface PostsListProps {
  trending?: boolean;
}

const PostsList = ({ trending = false }: PostsListProps) => {
  const postsToShow = trending ? trendingPosts : mockPosts;
  
  return (
    <div className="space-y-4">
      {postsToShow.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostsList;
