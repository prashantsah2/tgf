import React from 'react';

const CarbonCourseCard = () => {
  return (
    <div className="mx-auto p-6 bg-gray-50 min-h-screen w-full">
      {/* Navigation Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
          <button className="px-8 py-3 bg-white text-gray-700 border-b-2 border-green-500 font-medium">
            Certificate Courses
          </button>
          <button className="px-8 py-3 bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition-colors">
            Corporate Trainings
          </button>
        </div>
      </div>

      {/* Course Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto mt-28">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Illustration */}
          <div className="lg:w-1/2 bg-gradient-to-br from-red-700 to-red-900 relative overflow-hidden">
            <div className="absolute inset-0 p-8 flex flex-col justify-center items-center">
              {/* CO2 and pollution elements */}
              <div className="absolute top-6 left-6 text-white text-2xl font-bold opacity-80">
                CO₂
              </div>
              
              {/* CH4 bubble */}
              <div className="absolute top-8 right-12 bg-white bg-opacity-20 rounded-full px-3 py-1">
                <span className="text-white text-sm font-semibold">CH₄</span>
              </div>
              
              {/* N2O element */}
              <div className="absolute bottom-20 left-8 bg-pink-400 bg-opacity-60 rounded-full px-3 py-1">
                <span className="text-white text-sm font-semibold">N₂O</span>
              </div>
              
              {/* Central Earth illustration */}
              <div className="relative z-10 mb-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 relative overflow-hidden shadow-xl">
                  {/* Continents */}
                  <div className="absolute top-4 left-6 w-12 h-8 bg-green-500 rounded-lg opacity-80"></div>
                  <div className="absolute bottom-6 right-4 w-10 h-6 bg-green-600 rounded-full opacity-70"></div>
                  <div className="absolute top-8 right-2 w-6 h-4 bg-green-400 rounded opacity-60"></div>
                </div>
              </div>
              
              {/* Rupee coin */}
              <div className="absolute top-12 right-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-300">
                  <span className="text-2xl font-bold text-yellow-800">₹</span>
                </div>
              </div>
              
              {/* Factory buildings */}
              <div className="absolute bottom-6 right-6 flex space-x-2">
                <div className="w-6 h-12 bg-orange-400 rounded-t"></div>
                <div className="w-4 h-8 bg-yellow-400 rounded-t"></div>
                <div className="w-5 h-10 bg-red-400 rounded-t"></div>
              </div>
              
              {/* Vehicles */}
              <div className="absolute bottom-4 left-12 flex space-x-3">
                <div className="w-8 h-4 bg-green-500 rounded-sm relative">
                  <div className="absolute -bottom-1 left-1 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute -bottom-1 right-1 w-2 h-2 bg-black rounded-full"></div>
                </div>
                <div className="w-6 h-3 bg-red-500 rounded-sm relative">
                  <div className="absolute -bottom-1 left-1 w-1.5 h-1.5 bg-black rounded-full"></div>
                  <div className="absolute -bottom-1 right-1 w-1.5 h-1.5 bg-black rounded-full"></div>
                </div>
              </div>
              
              {/* Pollution clouds */}
              <div className="absolute top-16 left-16 w-8 h-6 bg-white bg-opacity-70 rounded-full"></div>
              <div className="absolute top-20 right-20 w-6 h-4 bg-gray-300 bg-opacity-50 rounded-full"></div>
              <div className="absolute bottom-16 left-20 w-10 h-6 bg-white bg-opacity-60 rounded-full"></div>
              
              {/* Scattered dots for atmosphere effect */}
              <div className="absolute top-12 left-12 w-2 h-2 bg-white bg-opacity-40 rounded-full"></div>
              <div className="absolute top-24 right-16 w-1.5 h-1.5 bg-white bg-opacity-30 rounded-full"></div>
              <div className="absolute bottom-12 right-12 w-2.5 h-2.5 bg-white bg-opacity-35 rounded-full"></div>
            </div>
          </div>

          {/* Right Side - Course Details */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-outfit text-gray-800 mb-2 leading-tight">
              Understanding Carbon Market - Level 1
            </h2>
            
            <p className="text-gray-600 text-md font-sans leading-2 mb-8">
              Dive into the fundamentals of carbon markets with our beginner-level course led by industry experts.
            </p>
            
            <div className="mb-6">
              <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Ended
              </span>
              
              <div className="text-md font-outfit font-light text-gray-800">
                From ₹8,999
              </div>
            </div>
            
           <a href='/training/carbon-training'><button className="bg-[#10ce06] text-white font-outfit py-3 px-8 rounded-lg transition-colors duration-200 w-fit">
              View Course
            </button>
            </a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonCourseCard;