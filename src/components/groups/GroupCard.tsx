
import { Users } from "lucide-react";

interface GroupCardProps {
  id: string;
  name: string;
  membersCount: number;
  coverImage: string;
  isJoined?: boolean;
}

const GroupCard = ({ name, membersCount, coverImage, isJoined = false }: GroupCardProps) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-sm border border-gray-100 h-32">
      <img 
        src={coverImage} 
        alt={name} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
        <h3 className="font-semibold text-lg">{name}</h3>
        <div className="flex items-center space-x-1 text-sm">
          <Users size={14} />
          <span>{membersCount} members</span>
        </div>
      </div>
      
      <button 
        className={`absolute top-2 right-2 text-sm py-1 px-3 rounded-full ${
          isJoined 
            ? 'bg-white/20 border border-white/40 backdrop-blur-sm' 
            : 'bg-social-primary text-white'
        }`}
      >
        {isJoined ? 'Joined' : 'Join'}
      </button>
    </div>
  );
};

export default GroupCard;
