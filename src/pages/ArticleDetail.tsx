import React from 'react';
import { samplePosts } from '../data/samplePosts';
import type { Post } from '../types';

export function ArticleDetail() {
  const [article, setArticle] = React.useState<Post | null>(null);

  React.useEffect(() => {
    const slug = window.location.pathname.split('/post/')[1];
    const foundArticle = samplePosts.find(post => post.slug === slug);
    setArticle(foundArticle || null);
  }, []);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto py-8">
        <p className="text-gray-900 dark:text-white">Article not found</p>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <span className="px-3 py-1 bg-black text-white text-sm">
            {article.category}
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {article.title}
        </h1>
        <div className="flex items-center justify-end mb-8">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        {article.content}
      </div>
    </article>
  );
}