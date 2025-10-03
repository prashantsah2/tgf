"use client"
import React from 'react';

const BlogCard = ({ image, category, title, excerpt, author, role, date, avatar }) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <div className="p-8">
        <span className="inline-block bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
          {category}
        </span>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
          {title}
        </h2>
        
        <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold text-sm">
              {avatar}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">{author}</h4>
              <p className="text-xs text-gray-500">{role}</p>
            </div>
          </div>
          <span className="text-sm text-gray-400 font-medium">{date}</span>
        </div>
        
        <div className="mt-4">
          <a href="#" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm transition-all duration-200 hover:translate-x-1">
            Read Article
            <svg className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

const Blogs = () => {
  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Solar Energy",
      title: "Solar Panel Efficiency Breakthrough",
      excerpt: "Discover the latest innovations in photovoltaic technology that are pushing solar panel efficiency beyond 25%, making renewable energy more accessible and cost-effective than ever.",
      author: "Dr. Emma Rodriguez",
      role: "Solar Energy Specialist",
      date: "Mar 15, 2024",
      avatar: "ER"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Wind Power",
      title: "Offshore Wind Farm Revolution",
      excerpt: "Explore how floating wind turbines are unlocking deeper ocean areas for renewable energy generation, potentially tripling global offshore wind capacity.",
      author: "Marcus Hansen",
      role: "Wind Energy Engineer",
      date: "Mar 12, 2024",
      avatar: "MH"
    },
    {
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Carbon Capture",
      title: "Direct Air Capture Scaling Up",
      excerpt: "Learn how direct air capture technology is becoming commercially viable, with new facilities capable of removing millions of tons of CO2 from the atmosphere annually.",
      author: "Sarah Patel",
      role: "Climate Technology Lead",
      date: "Mar 10, 2024",
      avatar: "SP"
    },
    {
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Green Hydrogen",
      title: "The Hydrogen Economy Takes Flight",
      excerpt: "Explore how green hydrogen is becoming the backbone of clean energy storage and industrial decarbonization, with major investments pouring into production facilities worldwide.",
      author: "David Chen",
      role: "Hydrogen Technology Expert",
      date: "Mar 08, 2024",
      avatar: "DC"
    },
    {
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Electric Vehicles",
      title: "EV Charging Infrastructure Boom",
      excerpt: "Discover how rapid deployment of ultra-fast charging stations is eliminating range anxiety and accelerating the global transition to electric transportation.",
      author: "Lisa Thompson",
      role: "EV Infrastructure Analyst",
      date: "Mar 05, 2024",
      avatar: "LT"
    },
    {
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Reforestation",
      title: "AI-Powered Forest Restoration",
      excerpt: "Learn how artificial intelligence and drone technology are revolutionizing reforestation efforts, enabling precise tree planting and monitoring at unprecedented scale.",
      author: "Dr. James Mitchell",
      role: "Forest Conservation Lead",
      date: "Mar 03, 2024",
      avatar: "JM"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Green Climate Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading the transition to renewable energy and sustainable climate solutions for a better tomorrow
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              View All Articles
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;