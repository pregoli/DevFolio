import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Logo } from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div className={`fixed inset-0 z-[100] transition-opacity duration-200 ${
      isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}>
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/40 transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`} 
        onClick={onClose} 
      />
      <div className={`fixed top-0 left-0 w-80 h-full bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-200 ease-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <Logo className="ml-2" />
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-900 dark:text-white" />
            </button>
          </div>
          
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-2">
              <Link 
                to="/"
                onClick={onClose}
                className="block px-4 py-3 text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/articles"
                onClick={onClose}
                className="block px-4 py-3 text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Articles
              </Link>
              <Link 
                to="/about"
                onClick={onClose}
                className="block px-4 py-3 text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                About
              </Link>
              <Link 
                to="/contact"
                onClick={onClose}
                className="block px-4 py-3 text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}