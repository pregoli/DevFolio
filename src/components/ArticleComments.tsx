import React, { useEffect, useState, useRef } from 'react';
import Giscus from '@giscus/react';
import { useDarkMode } from '../hooks/useDarkMode';

interface ArticleCommentsProps {
  pathname: string;
}

export function ArticleComments({ pathname }: ArticleCommentsProps) {
  const { isDarkMode } = useDarkMode();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const messageQueueRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    setMounted(true);
    return () => {
      messageQueueRef.current.forEach(clearTimeout);
      messageQueueRef.current = [];
    };
  }, []);

  useEffect(() => {
    const sendThemeMessage = () => {
      const iframe = containerRef.current?.querySelector<HTMLIFrameElement>('.giscus-frame');
      if (!iframe?.contentWindow) return false;

      try {
        iframe.contentWindow.postMessage(
          {
            giscus: {
              setConfig: {
                theme: isDarkMode ? 'dark_protanopia' : 'light'
              }
            }
          },
          'https://giscus.app'
        );
        return true;
      } catch (e) {
        return false;
      }
    };

    // Clear any existing timeouts
    messageQueueRef.current.forEach(clearTimeout);
    messageQueueRef.current = [];

    // Try immediately
    if (!sendThemeMessage()) {
      // If failed, try multiple times with increasing delays
      const delays = [100, 300, 500, 1000, 2000];
      messageQueueRef.current = delays.map(delay =>
        setTimeout(sendThemeMessage, delay)
      );
    }

    return () => {
      messageQueueRef.current.forEach(clearTimeout);
      messageQueueRef.current = [];
    };
  }, [isDarkMode]);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="mt-16 bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Comments</h2>
      <Giscus
        id="comments"
        repo="pregoli/DevFolio"
        repoId="R_kgDONvaHVQ"
        category="Announcements"
        categoryId="DIC_kwDONvaHVc4Cmrku"
        mapping="pathname"
        term={pathname}
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="bottom"
        theme={isDarkMode ? 'dark_protanopia' : 'light'}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}