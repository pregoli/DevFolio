import React from 'react';

export function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        About Us
      </h1>
      <div className="prose dark:prose-invert">
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Welcome to 3XT, your premier destination for in-depth articles and insights about software development, 
          distributed systems, and modern architecture patterns.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Our team of experienced developers and architects shares their knowledge and best practices 
          to help you build better software systems.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Our Mission
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We believe in the power of knowledge sharing and continuous learning. Our mission is to provide 
          high-quality, practical content that helps developers and architects grow in their careers.
        </p>
      </div>
    </div>
  );
}