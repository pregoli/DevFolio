import React, { useState } from 'react';
import { Menu, Moon, Sun, Search, X } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { samplePosts } from '../data/samplePosts';

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  onNavigate: (page: string) => void;
}

export function Header({ toggleDarkMode, isDarkMode, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof samplePosts>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = samplePosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(true);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  const handleNavigation = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-white dark:bg-black border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(true)} 
                className="p-2"
              >
                <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
              </button>
              <a 
                href="/" 
                onClick={(e) => handleNavigation('home', e)}
                className="ml-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                3XT
              </a>
            </div>
            
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <X className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    </button>
                  )}
                </div>
                
                {isSearching && (
                  <div className="absolute w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg max-h-96 overflow-y-auto">
                    {searchResults.length > 0 ? (
                      searchResults.map(post => (
                        <a
                          key={post.id}
                          href={`/post/${post.slug}`}
                          className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700"
                          onClick={() => setIsSearching(false)}
                        >
                          <h3 className="font-medium text-gray-900 dark:text-white">{post.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{post.excerpt.substring(0, 100)}...</p>
                        </a>
                      ))
                    ) : (
                      <div className="p-4 text-gray-500 dark:text-gray-400">
                        No results found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onNavigate={(page) => {
          onNavigate(page);
          setIsMobileMenuOpen(false);
        }}
      />
    </>
  );
}