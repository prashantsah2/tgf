import React from 'react';
import { Monitor, Smartphone, Code, Zap } from 'lucide-react';

const Static11 = () => {
  return (
    <div className="relative min-h-screen bg-[#0906bd] overflow-hidden w-full">
      {/* Grid Background Pattern */}
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
    
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl lg:text-7xl font-black mb-4 font-bebas">
                <span className="text-primary drop-shadow-lg">WHO WE ARE</span>
                <br />
                <span className="text-white">BEHIND THE SCENES</span>
              </h1>
            </div>
            
            <div className="space-y-6 text-lg lg:text-xl leading-relaxed">
              <p className="text-white">
                <span className="text-primary font-bold">Every brand needs a hero</span> — or better yet, a full team of them.
              </p>
              
              <p className="text-white">
                <span className="text-primary font-bold">{`We're a crew of creative minds and tech wizards`}</span> on a 
                mission to power up your business with digital superpowers. 
                From crafting scroll-stopping content to building websites 
                that actually work, we blend marketing magic and IT 
                intelligence to help you grow faster, better, and smarter.
              </p>
              
              <p className="text-white">
                <span className="text-primary font-bold">Think of us as the team behind the curtain</span> — coding, 
                creating, strategizing, while you take the spotlight.
              </p>
            </div>
            
            <div className="pt-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary transform -rotate-2">
                No capes (yet). Just results.
              </h2>
            </div>
          </div>
          
          {/* Right Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              
              {/* Purple Circle Background */}
              <div className="absolute inset-0 bg-purple-600 rounded-full opacity-80 transform rotate-12"></div>
              
              {/* Device Screens */}
              <div className="relative z-10 h-full flex flex-col justify-center space-y-4">
                
                {/* Desktop Screen */}
                <div className="bg-green-400 rounded-lg p-4 w-48 mx-auto shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white rounded h-2 mb-2"></div>
                  <div className="space-y-1">
                    <div className="bg-green-200 rounded h-1 w-3/4"></div>
                    <div className="bg-green-200 rounded h-1 w-1/2"></div>
                    <div className="bg-green-200 rounded h-1 w-2/3"></div>
                  </div>
                  <Monitor className="w-6 h-6 text-blue-700 mt-2" />
                </div>
                
                {/* Mobile Screen */}
                <div className="bg-blue-600 rounded-lg p-3 w-24 ml-auto mr-8 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white rounded h-1 mb-2"></div>
                  <div className="space-y-1">
                    <div className="bg-blue-300 rounded h-1"></div>
                    <div className="bg-blue-300 rounded h-1 w-3/4"></div>
                    <div className="bg-blue-300 rounded h-1 w-1/2"></div>
                  </div>
                  <Smartphone className="w-4 h-4 text-green-400 mt-1" />
                </div>
                
                {/* Tablet Screen */}
                <div className="bg-purple-500 rounded-lg p-3 w-32 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white rounded h-1 mb-2"></div>
                  <div className="space-y-1">
                    <div className="bg-purple-300 rounded h-1"></div>
                    <div className="bg-purple-300 rounded h-1 w-2/3"></div>
                  </div>
                  <Code className="w-5 h-5 text-green-400 mt-2" />
                </div>
              </div>
              
              {/* Character Silhouette */}
              <div className="absolute bottom-0 right-8 z-20">
                <div className="w-16 h-24 bg-black rounded-t-full relative transform hover:scale-110 transition-transform duration-300">
                  {/* Head */}
                  <div className="w-8 h-8 bg-black rounded-full absolute -top-6 left-4"></div>
                  {/* Pointing gesture */}
                  <div className="w-6 h-1 bg-black absolute top-4 -right-4 transform rotate-45"></div>
                  {/* Cape effect */}
                  <div className="absolute -left-2 top-2 w-4 h-16 bg-green-400 rounded-l-lg opacity-60 transform -skew-y-12"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 left-8 animate-bounce delay-100">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <div className="absolute top-16 right-4 animate-bounce delay-300">
                <Code className="w-5 h-5 text-purple-300" />
              </div>
              <div className="absolute bottom-16 left-4 animate-bounce delay-500">
                <Monitor className="w-5 h-5 text-green-300" />
              </div>
              
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M80,120 Q200,80 280,160" 
                  stroke="url(#lineGradient)" 
                  strokeWidth="3" 
                  fill="none"
                  className="animate-pulse"
                />
                <path 
                  d="M120,200 Q180,240 240,180" 
                  stroke="url(#lineGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse delay-200"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Visual Effects */}
      <div className="absolute top-1/4 left-8 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 right-16 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-700"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-300 rounded-full animate-ping delay-1000"></div>
      
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-800/20 to-purple-900/30 pointer-events-none"></div>
    </div>
  );
};

export default Static11;