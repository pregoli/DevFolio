import React from 'react';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <SEO 
        title="404 - Page Not Found" 
        description="The page you're looking for doesn't exist."
      />
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800">404</h1>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}