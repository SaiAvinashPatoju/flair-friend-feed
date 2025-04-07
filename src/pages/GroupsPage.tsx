
import { Search } from "lucide-react";
import GroupsList from "@/components/groups/GroupsList";

const GroupsPage = () => {
  return (
    <div className="mb-16">
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Search groups..."
            className="w-full bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-social-primary"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Popular Groups</h2>
        <GroupsList />
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-3">Suggested for You</h2>
        <GroupsList />
      </div>
    </div>
  );
};

export default GroupsPage;
