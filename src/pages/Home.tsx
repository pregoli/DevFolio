import React from 'react';
import { PostCard } from '../components/PostCard';
import { Newsletter } from '../components/Newsletter';
import { samplePosts } from '../data/samplePosts';
import { SEO } from '../components/SEO';
import { Share2, Code2, Users } from 'lucide-react';

export function Home() {
  const [latestPost, ...otherPosts] = samplePosts;

  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <section className="relative mb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-100/70 via-transparent to-transparent dark:from-white/5" />
        <div className="relative">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              A collaborative space for software craftsmanship
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-4xl">
              Join our community of developers sharing insights, best practices, and deep dives into software architecture, design patterns, and modern development techniques.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700">
                <Share2 className="w-6 h-6 text-gray-900 dark:text-white mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Share Knowledge</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Contribute your expertise and learn from others in the community.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700">
                <Code2 className="w-6 h-6 text-gray-900 dark:text-white mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Best Practices</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Discover proven patterns and techniques for better software.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700">
                <Users className="w-6 h-6 text-gray-900 dark:text-white mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Connect with fellow developers and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Latest Articles
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PostCard post={latestPost} layout="featured" />
          </div>
          {otherPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <Newsletter />
      </section>
    </>
  );
}