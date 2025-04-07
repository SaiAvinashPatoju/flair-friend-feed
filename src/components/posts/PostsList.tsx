
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

const PostsList = () => {
  return (
    <div className="space-y-4">
      {mockPosts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostsList;
