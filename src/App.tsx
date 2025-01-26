import React from 'react';
import { Header } from './components/Header';
import { PostCard } from './components/PostCard';
import { Newsletter } from './components/Newsletter';
import { useDarkMode } from './hooks/useDarkMode';
import { samplePosts } from './data/samplePosts';
import { Articles } from './pages/Articles';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ArticleDetail } from './pages/ArticleDetail';

function App() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const [currentPage, setCurrentPage] = React.useState('home');

  // Simple client-side routing
  React.useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') setCurrentPage('home');
    else if (path.startsWith('/post/')) setCurrentPage('article');
    else setCurrentPage(path.slice(1));
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'articles':
        return <Articles />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'article':
        return <ArticleDetail />;
      default:
        const [latestPost, ...otherPosts] = samplePosts;
        return (
          <>
            <section className="mb-16">
              <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                Latest Articles
              </h1>
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
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200 flex flex-col">
        <Header 
          toggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
          isDarkMode={isDarkMode} 
          onNavigate={setCurrentPage}
        />
        
        <main className="container mx-auto px-4 sm:px-6 py-8 flex-grow max-w-7xl">
          {renderPage()}
        </main>

        <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 mt-auto">
          <div className="container mx-auto px-4 py-8 max-w-7xl">
            <p className="text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} DEV~FOLIO. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;