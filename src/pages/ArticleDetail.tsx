import React from 'react';
import { samplePosts } from '../data/samplePosts';
import { series } from '../data/series';
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

  const seriesColor = article.series 
    ? series.find(s => s.id === article.series?.id)?.color 
    : undefined;

  return (
    <article className="max-w-3xl mx-auto py-8">
      <div className="mb-8">
        {/* Series indicator */}
        {article.series && (
          <div 
            className="mb-4"
            style={{ '--series-color': seriesColor } as any}
          >
            <div className="flex items-center space-x-2">
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: seriesColor }}
              />
              <span className="text-sm font-medium" style={{ color: seriesColor }}>
                {article.series.name}
              </span>
            </div>
          </div>
        )}

        {/* Category and Tags */}
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <span className="px-2 py-0.5 bg-black text-white text-xs rounded">
            {article.category}
          </span>
          {article.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {article.title}
        </h1>

        {/* Date */}
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