import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "They tailor their solutions to our specific needs and goals.",
    author: "Denis Slavska",
    title: "CTO, Ailitic",
    subtitle: "CTO, AllNew York City, New Yorkitic",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    company: "Ailitic",
    link: "#"
  },
  {
    id: 2,
    quote: "They organized their work and internal management was outstanding.",
    author: "Jahan Melad",
    title: "Project Manager, Buildwave",
    subtitle: "New York City, New York",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    company: "Buildwave",
    link: "#"
  },
  {
    id: 3,
    quote: "Working with them was a great experience.",
    author: "Jim Halpert",
    title: "Lead Engineering, Inhive Space",
    subtitle: "New York City, New York",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    company: "InHive",
    link: "#"
  },
  {
    id: 4,
    quote: "The attention to detail and quality of work exceeded our expectations.",
    author: "Sarah Chen",
    title: "Product Director, TechFlow",
    subtitle: "San Francisco, California",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    company: "TechFlow",
    link: "#"
  },
  {
    id: 5,
    quote: "Professional, reliable, and delivered on time every single time.",
    author: "Marcus Johnson",
    title: "CEO, DataSync",
    subtitle: "Austin, Texas",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    company: "DataSync",
    link: "#"
  },
  {
    id: 6,
    quote: "Their innovative approach transformed our entire workflow.",
    author: "Emily Rodriguez",
    title: "Operations Manager, CloudNine",
    subtitle: "Seattle, Washington",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    company: "CloudNine",
    link: "#"
  },
  {
    id: 7,
    quote: "Best decision we made was partnering with this team.",
    author: "David Kim",
    title: "CTO, NextGen",
    subtitle: "Boston, Massachusetts",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop",
    company: "NextGen",
    link: "#"
  },
  {
    id: 8,
    quote: "They brought our vision to life with incredible precision.",
    author: "Lisa Thompson",
    title: "Founder, DesignHub",
    subtitle: "Los Angeles, California",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    company: "DesignHub",
    link: "#"
  }
];

export default function Reviews() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="max-w-[1391px] w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">OUR REVIEWS</p>
            <h2 className="text-xl md:text-3xl font-bold font-lora text-gray-900">
              What Our <span className="text-gray-900">Clients</span> Say
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Scrollable Testimonials */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 relative group min-w-[350px] snap-start"
            >
              {/* Header with profile and company */}
              <div className="flex items-center justify-between mb-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="px-6 py-2 rounded-full border border-gray-200 bg-white">
                  <span className="text-sm font-medium text-gray-700">{testimonial.company}</span>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="text-6xl text-blue-200 mb-6 font-serif leading-none">{`"`}</div>

              {/* Testimonial Text */}
              <p className="text-2xl font-light text-gray-900 mb-12 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Author Info */}
              <div className="border-l-2 border-gray-200 pl-4">
                <p className="font-medium text-gray-900 mb-1">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
                <p className="text-sm text-gray-400">{testimonial.subtitle}</p>
              </div>

              {/* Arrow Link - appears on hover */}
              <a
                href={testimonial.link}
                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                aria-label="Read more"
              >
                <ArrowUpRight size={20} />
              </a>
            </motion.div>
          ))}
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
}