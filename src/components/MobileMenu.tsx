import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  if (!isOpen) return null;

  const handleNavigation = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/40" onClick={onClose} />
      <div className="fixed top-0 left-0 w-80 h-full bg-white dark:bg-gray-900 p-6">
        <div className="flex justify-end mb-8">
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6 text-gray-900 dark:text-white" />
          </button>
        </div>
        <nav className="space-y-6">
          <a 
            href="/" 
            onClick={(e) => handleNavigation('home', e)}
            className="block text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </a>
          <a 
            href="/articles" 
            onClick={(e) => handleNavigation('articles', e)}
            className="block text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            Articles
          </a>
          <a 
            href="/about" 
            onClick={(e) => handleNavigation('about', e)}
            className="block text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </a>
          <a 
            href="/contact" 
            onClick={(e) => handleNavigation('contact', e)}
            className="block text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}