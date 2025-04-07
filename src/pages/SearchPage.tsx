
import { useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar } from "@/components/ui/avatar";

interface SearchResult {
  id: string;
  type: 'user' | 'group' | 'post';
  name: string;
  avatar?: string;
  description?: string;
}

const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    type: 'user',
    name: 'Jenny Designs',
    avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=100&h=100',
    description: 'UX/UI Designer • 2.5k followers'
  },
  {
    id: '2',
    type: 'user',
    name: 'Mike Thompson',
    avatar: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=100&h=100',
    description: 'Travel Photographer • 1.8k followers'
  },
  {
    id: '3',
    type: 'group',
    name: 'Photography Enthusiasts',
    avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=100&h=100',
    description: '3.2k members • 50+ posts daily'
  },
  {
    id: '4',
    type: 'group',
    name: 'Tech Innovations',
    avatar: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=100&h=100',
    description: '10.5k members • Tech news and updates'
  },
  {
    id: '5',
    type: 'post',
    name: 'Latest AI Developments',
    avatar: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=100&h=100',
    description: 'Breaking news about AI technology...'
  }
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 0) {
      setIsSearching(true);
      // Filter mock results based on query
      const filteredResults = mockSearchResults.filter(
        result => result.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setIsSearching(false);
      setResults([]);
    }
  };

  return (
    <div className="mb-16">
      <div className="flex items-center space-x-2 mb-4">
        <Link to="/" className="p-2 rounded-full bg-gray-100 text-gray-600">
          <ArrowLeft size={20} />
        </Link>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search users, groups, posts..."
            className="w-full bg-gray-100 border-none rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-social-primary"
            autoFocus
          />
        </div>
      </div>

      {isSearching ? (
        <div className="space-y-1">
          {results.length > 0 ? (
            results.map(result => (
              <div key={result.id} className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <img src={result.avatar} alt={result.name} className="h-full w-full object-cover" />
                  </Avatar>
                  <div>
                    <p className="font-medium">{result.name}</p>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-40">
              <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Recent Searches</h3>
            <div className="space-y-1">
              <div className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Search size={16} className="text-gray-400" />
                    <span>photography tips</span>
                  </div>
                  <button className="text-xs text-muted-foreground">Remove</button>
                </div>
              </div>
              <div className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Search size={16} className="text-gray-400" />
                    <span>tech groups</span>
                  </div>
                  <button className="text-xs text-muted-foreground">Remove</button>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Trending Searches</h3>
            <div className="space-y-1">
              <div className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-2">
                  <span className="text-social-primary font-bold">#</span>
                  <span>photography</span>
                </div>
              </div>
              <div className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-2">
                  <span className="text-social-primary font-bold">#</span>
                  <span>technology</span>
                </div>
              </div>
              <div className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-2">
                  <span className="text-social-primary font-bold">#</span>
                  <span>travel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
