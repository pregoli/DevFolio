export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`font-mono font-bold border-2 border-gray-900 dark:border-white px-2 py-0.5 inline-block ${className}`}>
      <span className="text-gray-900 dark:text-white text-sm sm:text-lg">DEV&gt;~ BIN</span>
    </div>
  );
}