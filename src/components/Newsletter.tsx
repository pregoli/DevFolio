import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // TODO: Implement newsletter subscription
    setStatus('success');
    setEmail('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Subscribe to the Newsletter
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Get the latest insights about distributed systems, DDD, and software architecture
          delivered straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-2 bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 disabled:opacity-50 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Subscribe
          </button>
        </form>
        {status === 'success' && (
          <p className="text-green-600 dark:text-green-400 mt-2">Thanks for subscribing!</p>
        )}
      </div>
    </div>
  );
}