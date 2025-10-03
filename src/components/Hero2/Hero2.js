import React from 'react';
import { Search, User } from 'lucide-react';
import Image from 'next/image';

export default function Hero2() {
  return (
    <div className="min-h-screen bg-[#0906bd] relative overflow-hidden first-letter pt-[71px]">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Navigation */}
   {/*    <nav className="flex items-center justify-between px-8 py-6 relative z-10">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2 text-green-400">
            <div className="w-8 h-8 bg-green-400 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <span className="text-lg font-semibold">Home</span>
          </div>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search services........." 
              className="bg-blue-600 bg-opacity-50 text-white placeholder-gray-300 px-4 py-2 pr-10 rounded-full border border-blue-500 focus:outline-none focus:border-green-400 w-64"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-300" />
          </div>
          
          <div className="flex items-center space-x-2 text-green-400">
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-lg font-semibold">Services</span>
          </div>
          
          <div className="flex items-center space-x-2 text-white">
            <User className="w-6 h-6 text-blue-300" />
            <span className="text-lg font-semibold">About Us</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-white">
          <span className="text-lg font-semibold">Aakash</span>
          <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="flex items-center justify-between px-8 py-16 relative z-10 max-md:flex-col">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-7xl lg:text-9xl font-black font-bebas text-primary text-white leading-none mb-6">
           {` DON'T WASTE`}
            <br />
            YOUR <span className="text-[#11e81f]">TIME</span>
          </h1>
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-0.5 bg-white"></div>
            <h2 className="text-2xl font-bold text-white tracking-wider">
              START SAVING IT
            </h2>
          </div>
          
          <p className="text-xl text-white mb-2 font-medium tracking-wide">
           {` IN TODAY'S FAST-MOVING WORLD, ORGANIZED SPACES`}
          </p>
          <p className="text-xl font-medium tracking-wide mb-12">
            <span className="text-green-400">AND SMARTER MARKETING DRIVE REAL GROWTH.</span>
          </p>
          
          <button className="bg-primary hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full flex items-center space-x-3 text-lg transition-colors">
            <span>Start Today</span>
            <div className="w-6 h-6 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="flex-1 flex justify-center items-center relative max-md:hidden">
          <Image src={`/image/blazestore.in__4_-removebg-preview.png`} className=' relative object-contain w-full h-[88vh] ' alt="Description of image" width={341} height={341} />
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
    </div>
  );
}