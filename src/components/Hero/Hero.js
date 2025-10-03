import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
                backgroundImage: `url('/image/wall.jpg')`,

          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1371px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Animated Heading */}
          <div className="animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-white leading-tight mb-6">
            Climate Change &


              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1770f6] to-[#06c854]">
           Sustainability Advisory
              </span>
             
            </h1>
          </div>

          {/* Animated Subtitle */}
          <div className="animate-fadeInUp animation-delay-200">
            <p className="text-sm sm:text-md lg:text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
            Carbon Footprint | Carbon Credit | Carbon Neutrality | Net Zero | ESG
Consulting | SBTi | BRSR | GRI | Ecovadis | CDP | TCFD
            </p>
          </div>

          {/* Animated CTA Buttons */}
          <div className="animate-fadeInUp animation-delay-400 flex flex-col sm:flex-row gap-4">
            <button className="group relative px-8 border-[1px] border-[#fff] py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Your Journey
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full  bg-white bg-opacity-10 transition-all duration-300 hover:bg-opacity-20 hover:border-emerald-400 hover:text-emerald-400 transform hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Animated Stats or Features */}
       {/*    <div className="animate-fadeInUp animation-delay-600 mt-12 grid grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">500+</div>
              <div className="text-sm text-gray-300">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">10k+</div>
              <div className="text-sm text-gray-300">Adventures</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">4.9★</div>
              <div className="text-sm text-gray-300">Reviews</div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 border border-white border-opacity-20 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 right-32 w-12 h-12 border border-emerald-400 border-opacity-30 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default Hero;