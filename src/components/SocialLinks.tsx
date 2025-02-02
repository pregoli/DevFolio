import { Facebook, Instagram } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        aria-label="Follow us on Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>
    </div>
  );
}