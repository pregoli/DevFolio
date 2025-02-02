import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import { Copy, Check } from 'lucide-react';

interface CodeSnippetProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
}

export function CodeSnippet({ code, language = 'csharp', showLineNumbers = true }: CodeSnippetProps) {
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative group my-6">
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={handleCopy}
          className="p-2 text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
      <pre className={`${showLineNumbers ? 'line-numbers' : ''} m-0`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}