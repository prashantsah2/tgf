


import React from "react";



const WebDevelopment = () => {
  return (
    <div className="relative w-full bg-[#0906bd] mx-auto">
      {/* Main container with gradient background and border */}
      <div className="bg-gradient-to-r from-purple-100 via-blue-50 to-purple-100 border-4 border-purple-600 rounded-lg p-8 md:p-12">
        
        {/* Main heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-green-500">High-Impact</span>
            <span className="text-gray-800"> Website Development</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
            for Startups and Small Businesses
          </h2>
        </div>

        {/* Description text */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            We help you create a website that not only looks great but also drives conversions for your business.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-2">
            Our web development services are designed to showcase your brand, attract customers, and increase sales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;