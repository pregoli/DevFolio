import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { samplePosts } from '../data/samplePosts';
import { series } from '../data/series';
import { SEO } from '../components/SEO';
import { CodeSnippet } from '../components/CodeSnippet';
import { TableOfContents } from '../components/TableOfContents';
import type { Post } from '../types';
import { Menu, Clock, Share2 } from 'lucide-react';

export function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState<Post | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  useEffect(() => {
    const foundArticle = samplePosts.find(post => post.slug === slug);
    setArticle(foundArticle || null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = document.querySelectorAll('h2[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [slug]);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        <SEO title="Article Not Found" description="The requested article could not be found." />
        <p className="text-gray-900 dark:text-white">Article not found</p>
      </div>
    );
  }

  const seriesColor = article.series 
    ? series.find(s => s.id === article.series?.id)?.color 
    : undefined;

  const createHeadingId = (text: string) => 
    text.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const headings = article.content
    .match(/^## (.*$)/gm)
    ?.map(heading => {
      const title = heading.replace('## ', '');
      return {
        id: createHeadingId(title),
        title
      };
    }) || [];

  const handleHeadingClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const processContent = (content: string) => {
    const parts = content.split(/(```\w+\n[\s\S]*?```)/g);
    
    return parts.map((part, index) => {
      const codeMatch = part.match(/```(\w+)\n([\s\S]*?)```/);
      
      if (codeMatch) {
        const [, language, code] = codeMatch;
        return (
          <CodeSnippet
            key={index}
            language={language}
            code={code.trim()}
          />
        );
      }

      const processedContent = part
        .replace(/^## (.*$)/gm, (_, title) => 
          `<h2 class="scroll-mt-20 text-2xl sm:text-3xl lg:text-4xl font-bold mt-12 sm:mt-16 mb-6 sm:mb-8 text-gray-900 dark:text-white" id="${createHeadingId(title)}">${title}</h2>`
        )
        .replace(/^### (.*$)/gm, (_, title) => 
          `<h3 class="scroll-mt-20 text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 sm:mt-12 mb-4 sm:mb-6 text-gray-900 dark:text-white" id="${createHeadingId(title)}">${title}</h3>`
        )
        .replace(/^> (.*$)/gm, '<blockquote class="my-6 sm:my-8 bg-gray-50 dark:bg-gray-900 p-4 sm:p-6"><p class="text-gray-700 dark:text-gray-300 m-0">$1</p></blockquote>')
        .replace(/^([^:\n]+): ([^\n]+)$/gm, '<div class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-4 mb-3 sm:mb-4"><strong class="text-gray-900 dark:text-white">$1:</strong> <span class="text-gray-700 dark:text-gray-300">$2</span></div>');

      return <div key={index} dangerouslySetInnerHTML={{ __html: processedContent }} />;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <SEO
        title={article.title}
        description={article.excerpt}
        article={true}
        pathname={`/articles/${article.slug}`}
      />
      {/* Hero Section */}
      <div className="relative py-8 sm:py-16 lg:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-100/70 via-transparent to-transparent dark:from-white/5 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-4 sm:gap-6 text-sm">
              <span className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 text-gray-700 dark:text-gray-300">
                <Clock className="w-4 h-4" />
                15 min read
              </span>
            </div>
          </div>

          {/* Series Badge */}
          {article.series && (
            <div className="mb-4 sm:mb-6">
              <div className="inline-flex items-center bg-white/50 dark:bg-white/5 backdrop-blur-sm px-3 py-1.5">
                <div 
                  className="w-2 h-2 mr-2 animate-pulse"
                  style={{ backgroundColor: seriesColor }}
                />
                <span 
                  className="text-sm font-medium"
                  style={{ color: seriesColor }}
                >
                  {article.series.name}
                </span>
              </div>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {article.title}
          </h1>

          {/* Publication Date and Share Button */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative flex items-center justify-between bg-white dark:bg-black p-4 sm:px-6 sm:py-4">
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(article.publishedAt).toLocaleDateString()}
              </time>
              <button 
                onClick={() => setShowShareTooltip(!showShareTooltip)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative text-gray-700 dark:text-gray-300"
              >
                <Share2 className="w-5 h-5" />
                {showShareTooltip && (
                  <div className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 shadow-lg py-2 px-4 text-sm whitespace-nowrap text-gray-900 dark:text-white">
                    Share this article
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-16">
          {/* Desktop TOC */}
          <aside className="hidden lg:block sticky top-32 h-fit">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6">
              <TableOfContents
                headings={headings}
                activeSection={activeSection}
                onHeadingClick={handleHeadingClick}
              />
            </div>
          </aside>

          {/* Article Content */}
          <div className="max-w-3xl">
            <div className="prose dark:prose-invert prose-lg max-w-none">
              {processContent(article.content)}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
              {article.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1.5 bg-white/50 dark:bg-white/5 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-sm hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile TOC Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="Open table of contents"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile TOC Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-gray-900/20 dark:bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-gray-900 p-6">
            <TableOfContents
              headings={headings}
              activeSection={activeSection}
              onHeadingClick={handleHeadingClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}