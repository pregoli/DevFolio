import { Link } from 'react-router-dom';
import type { Post } from '../types';
import { series } from '../data/series';

interface PostCardProps {
  post: Post;
  layout?: 'grid' | 'list' | 'featured';
}

export function PostCard({ post, layout = 'grid' }: PostCardProps) {
  const seriesColor = post.series 
    ? series.find(s => s.id === post.series?.id)?.color 
    : undefined;

  return (
    <article className={`group h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
      layout === 'list' ? 'flex' : ''
    }`}>
      <div className="p-6 flex-1 flex flex-col h-full">
        {post.series && (
          <div className="mb-4" style={{ '--series-color': seriesColor } as any}>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2" style={{ backgroundColor: seriesColor }} />
              <span className="text-sm font-medium" style={{ color: seriesColor }}>
                {post.series.name}
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 flex-wrap mb-4">
          <span className="px-2 py-0.5 bg-black text-white text-xs">
            {post.category}
          </span>
          {post.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex-1">
          <h2 className={`${
            layout === 'featured' 
              ? 'text-2xl lg:text-3xl' 
              : layout === 'list' 
                ? 'text-2xl' 
                : 'text-xl'
          } font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200`}>
            <Link to={`/articles/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          <p className={`text-gray-700 dark:text-gray-300 ${
            layout === 'featured' ? 'text-lg' : ''
          }`}>{post.excerpt}</p>
        </div>

        <div className="flex items-center justify-end text-sm mt-4">
          <span className="text-gray-600 dark:text-gray-400">
            {new Date(post.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </article>
  );
}