import React from 'react';
import { SEO } from '../components/SEO';

export function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <SEO 
        title="About Me" 
        description="Learn more about DEV~FOLIO, a personal blog about software development, architecture, and best practices."
      />
      
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          About Me
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Why I Started This Blog</h2>
            <p className="text-gray-700 dark:text-gray-300">
              As a software engineer passionate about crafting high-quality solutions, I created this space to share my 
              experiences and insights with the developer community. Through DEV~FOLIO, I document my journey in software 
              development, focusing on Domain-Driven Design, architecture patterns, and best practices I've learned along the way.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">What I Share</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Technical Deep Dives</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I write detailed articles about Domain-Driven Design, Event-Driven Architecture, and Microservices, 
                  sharing practical examples from real-world experiences. My goal is to break down complex concepts into 
                  understandable, actionable insights.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Practical Solutions</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Through my articles, I share battle-tested patterns and practices that I've personally used in 
                  professional projects. I believe in pragmatic solutions that balance theoretical correctness with 
                  practical implementation.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Learning Together</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  This blog is also a learning journey for me. I encourage discussions and feedback, as I believe the 
                  best insights often come from sharing experiences and perspectives with fellow developers.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">My Focus Areas</h2>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-700 dark:text-gray-300">Domain-Driven Design & Strategic Patterns</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700 dark:text-gray-300">Software Architecture & System Design</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-gray-700 dark:text-gray-300">Modern Development Practices & Tools</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="text-gray-700 dark:text-gray-300">TypeScript & JavaScript Best Practices</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Let's Connect</h2>
            <p className="text-gray-700 dark:text-gray-300">
              I believe in the power of community and continuous learning. Whether you're an experienced developer or 
              just starting your journey, I hope you'll find valuable insights here. Feel free to reach out through the 
              contact form or comments section - I'm always excited to connect with fellow developers and learn from 
              different perspectives.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}