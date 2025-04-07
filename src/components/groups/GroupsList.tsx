
import GroupCard from "./GroupCard";

const mockGroups = [
  {
    id: "1",
    name: "Photography Enthusiasts",
    membersCount: 2543,
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    isJoined: true
  },
  {
    id: "2",
    name: "Travel Adventurers",
    membersCount: 4891,
    coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    name: "Tech Innovators",
    membersCount: 1287,
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "4",
    name: "Pet Lovers",
    membersCount: 6934,
    coverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=800"
  }
];

const GroupsList = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {mockGroups.map((group) => (
        <GroupCard key={group.id} {...group} />
      ))}
    </div>
  );
};

export default GroupsList;
