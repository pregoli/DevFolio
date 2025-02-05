import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { SocialLinks } from './components/SocialLinks';
import { useDarkMode } from './hooks/useDarkMode';
import { Articles } from './pages/Articles';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ArticleDetail } from './pages/ArticleDetail';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';

function App() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <Router>
      <HelmetProvider>
        <div className={isDarkMode ? 'dark' : ''}>
          <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200 flex flex-col">
            <Header 
              toggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
              isDarkMode={isDarkMode}
            />
            
            <main className="container mx-auto px-4 sm:px-6 py-8 flex-grow max-w-7xl">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:slug" element={<ArticleDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 mt-auto">
              <div className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} DEV~FOLIO. All rights reserved.
                  </p>
                  <SocialLinks />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </HelmetProvider>
    </Router>
  );
}

export default App;