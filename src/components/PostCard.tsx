import React from 'react';
import type { Post } from '../types';

interface PostCardProps {
  post: Post;
  layout?: 'grid' | 'list';
}

export function PostCard({ post, layout = 'grid' }: PostCardProps) {
  return (
    <article className={`backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
      layout === 'list' ? 'flex' : ''
    }`}>
      <div className="p-6 flex-1">
        <div className="flex items-center space-x-2 mb-4">
          <span className="px-3 py-1 bg-black text-white text-sm rounded">
            {post.category}
          </span>
        </div>
        <h2 className={`${layout === 'list' ? 'text-2xl' : 'text-xl'} font-semibold mb-2 text-gray-900 dark:text-white`}>
          <a href={`/post/${post.slug}`} className="hover:text-gray-600 dark:hover:text-gray-300">
            {post.title}
          </a>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-end">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {new Date(post.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </article>
  );
}