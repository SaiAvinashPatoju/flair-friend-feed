
import FriendRequest from "./FriendRequest";

const mockRequests = [
  {
    id: "1",
    name: "Michael Scott",
    avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=100&h=100",
    mutualFriends: 5
  },
  {
    id: "2",
    name: "Emily Chen",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=100&h=100",
    mutualFriends: 2
  },
  {
    id: "3",
    name: "Carlos Rodriguez",
    avatar: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=100&h=100",
    mutualFriends: 8
  }
];

const FriendRequestsList = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-3 bg-gray-50 border-b border-gray-100">
        <h2 className="font-medium">Friend Requests</h2>
      </div>
      {mockRequests.map((request) => (
        <FriendRequest key={request.id} {...request} />
      ))}
    </div>
  );
};

export default FriendRequestsList;
