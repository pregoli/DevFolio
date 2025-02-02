import React, { useState } from 'react';
import { PostCard } from '../components/PostCard';
import { samplePosts } from '../data/samplePosts';
import { LayoutGrid, List } from 'lucide-react';

export function Articles() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          All Articles
        </h1>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 ${
              viewMode === 'grid'
                ? 'bg-gray-200 dark:bg-gray-700'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            aria-label="Grid view"
          >
            <LayoutGrid className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 ${
              viewMode === 'list'
                ? 'bg-gray-200 dark:bg-gray-700'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            aria-label="List view"
          >
            <List className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
      <div className={
        viewMode === 'grid' 
          ? "grid gap-8 md:grid-cols-2" 
          : "space-y-8"
      }>
        {samplePosts.map((post) => (
          <PostCard key={post.id} post={post} layout={viewMode} />
        ))}
      </div>
    </div>
  );
}