import React from 'react';
import { X, Search } from 'lucide-react';
import { samplePosts } from '../data/samplePosts';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<typeof samplePosts>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = samplePosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              autoFocus
              className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="h-6 w-6 text-gray-900 dark:text-white" />
          </button>
        </div>

        <div className="mt-4">
          {searchResults.length > 0 ? (
            <div className="space-y-4">
              {searchResults.map(post => (
                <a
                  key={post.id}
                  href={`/post/${post.slug}`}
                  className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700"
                  onClick={onClose}
                >
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">{post.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{post.excerpt.substring(0, 100)}...</p>
                </a>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
              No results found
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}