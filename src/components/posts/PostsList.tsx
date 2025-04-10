
import Post from "./Post";

const mockPosts = [
  {
    id: "1",
    username: "jenny_designs",
    userAvatar: "",
    timeAgo: "2 hours ago",
    content: "Just finished my latest design project! What do you think? 😊 #design #creativity",
    likesCount: 124,
    commentsCount: 28
  },
  {
    id: "2",
    username: "travel_mike",
    userAvatar: "",
    timeAgo: "5 hours ago",
    content: "The view from my hike this morning was absolutely breathtaking! 🏔️ #nature #adventure",
    likesCount: 89,
    commentsCount: 12
  },
  {
    id: "3",
    username: "alex_coder",
    userAvatar: "",
    timeAgo: "Yesterday",
    content: "Just launched my new website! Check it out and let me know what you think. Building with React has been such a great experience.",
    likesCount: 56,
    commentsCount: 8
  }
];

const trendingPosts = [
  {
    id: "5",
    username: "tech_insider",
    userAvatar: "",
    timeAgo: "8 hours ago",
    content: "Breaking: The new AI model just released is showing incredible results! 🤖 #AI #technology #future",
    likesCount: 1542,
    commentsCount: 329
  },
  {
    id: "6",
    username: "fitness_coach",
    userAvatar: "",
    timeAgo: "1 day ago",
    content: "This 5-minute workout has changed my clients' lives! Try it yourself and see the results 💪 #fitness #health",
    likesCount: 2038,
    commentsCount: 457
  },
  {
    id: "7",
    username: "foodie_adventures",
    userAvatar: "",
    timeAgo: "2 days ago",
    content: "I discovered this hidden gem restaurant and the food is AMAZING! 😍🍽️ #foodie #restaurant #musttry",
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
    <div className="space-y-1">
      {postsToShow.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostsList;
