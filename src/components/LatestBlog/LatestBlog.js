import React, { useState } from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

export default function LatestBlogs() {
  const [blogs] = useState([
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in your functional components.',
      author: 'Sarah Chen',
      date: 'Oct 15, 2025',
      category: 'React',
      image: 'https://via.placeholder.com/500x300/3B82F6/FFFFFF?text=React+Hooks'
    },
    {
      id: 2,
      title: 'Tailwind CSS Best Practices',
      excerpt: 'Master utility-first CSS and create beautiful, responsive designs with Tailwind CSS.',
      author: 'John Developer',
      date: 'Oct 14, 2025',
      category: 'CSS',
      image: 'https://via.placeholder.com/500x300/A855F7/FFFFFF?text=Tailwind+CSS'
    },
    {
      id: 3,
      title: 'Next.js 14 Features You Need to Know',
      excerpt: 'Explore the latest features in Next.js 14 including App Router and Server Components.',
      author: 'Emma Williams',
      date: 'Oct 13, 2025',
      category: 'Next.js',
      image: 'https://via.placeholder.com/500x300/000000/FFFFFF?text=Next.js+14'
    },
    {
      id: 4,
      title: 'Performance Optimization Tips',
      excerpt: 'Discover techniques to optimize your web applications for better performance and user experience.',
      author: 'Mike Johnson',
      date: 'Oct 12, 2025',
      category: 'Performance',
      image: 'https://via.placeholder.com/500x300/10B981/FFFFFF?text=Performance'
    }
  ]);

  const getCategoryColor = (category) => {
    const colors = {
      'React': 'bg-blue-50 text-blue-700',
      'CSS': 'bg-purple-50 text-purple-700',
      'Next.js': 'bg-gray-100 text-gray-800',
      'Performance': 'bg-green-50 text-green-700'
    };
    return colors[category] || 'bg-gray-50 text-gray-700';
  };

  return (
    <section className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-[1361px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-gray-600">Discover articles on web development, design, and more</p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(blog.category)}`}>
                    {blog.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {blog.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {blog.date}
                  </div>
                </div>

                {/* CTA */}
                <button className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 font-semibold transition-colors group/btn">
                  Read More
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}