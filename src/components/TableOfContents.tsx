import React from 'react';

interface TableOfContentsProps {
  headings: Array<{
    id: string;
    title: string;
  }>;
  activeSection: string;
  onHeadingClick: (id: string) => void;
  className?: string;
}

export function TableOfContents({ 
  headings, 
  activeSection, 
  onHeadingClick,
  className = '' 
}: TableOfContentsProps) {
  return (
    <nav className={`space-y-1 ${className}`} aria-label="Table of Contents">
      <p className="text-sm font-medium text-gray-900 dark:text-white mb-4">
        Table of Contents
      </p>
      {headings.map(heading => (
        <a
          key={heading.id}
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            onHeadingClick(heading.id);
          }}
          className={`group flex items-center py-2 px-3 text-sm transition-all duration-200 ${
            activeSection === heading.id
              ? 'text-gray-900 dark:text-white font-medium'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-600 dark:group-hover:bg-gray-400 transition-colors" />
            {heading.title}
          </div>
        </a>
      ))}
    </nav>
  );
}