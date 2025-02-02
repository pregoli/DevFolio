import React from 'react';
import { Send } from 'lucide-react';

export function Newsletter() {
  return (
    <div className="relative bg-white dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700">
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-10">
        <div className="bg-white/90 dark:bg-gray-800/90 px-6 py-3">
          <span className="text-lg font-mono font-bold text-gray-900 dark:text-white">
            Coming Soon
          </span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto text-center opacity-50">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Subscribe to the Newsletter
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Get the latest insights about distributed systems, DDD, and software architecture
          delivered straight to your inbox.
        </p>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            disabled
          />
          <button
            type="submit"
            disabled
            className="px-6 py-2 bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 disabled:opacity-50 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}