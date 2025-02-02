import React, { useState } from 'react';
import type { Comment } from '../types';

interface CommentsProps {
  postId: string;
  comments: Comment[];
}

export function Comments({ postId, comments }: CommentsProps) {
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement comment submission
    setNewComment('');
    setAuthorName('');
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">Comments</h3>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 dark:bg-gray-800 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold dark:text-white">{comment.author}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}