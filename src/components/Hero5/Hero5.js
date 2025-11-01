import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Hero5() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: `Uncovering opportunities  in product life-cycle`,
      subtitle: "Sustainability Reporting"
    },
    {
      title: "Decarbonisation",
      subtitle: "Reducing carbon footprint"
    },
    {
      title: "Climate Risk Assessment",
      subtitle: "Understanding environmental impact"
    },
    {
      title: "Life Cycle Assessment",
      subtitle: "Comprehensive analysis"
    },
    {
      title: "Executive Search",
      subtitle: "Finding the right talent"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden w-full flex justify-center items-center -z-1 ">
      {/* Background Image with Overlay */}
      <motion.div 
        key={`bg-${currentSlide}`}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <img 
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1920&h=1080&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover -z-1" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </motion.div>

      {/* Content */}
      <div className="relative h-full w-full max-w-[1371px] flex flex-col justify-center px-8  max-sm:px-4">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-xl md:text-2xl lg:text-4xl text-white max-w-4xl leading-tight font-outfit">
            {slides[currentSlide].title}
          </h1>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Read More
          </motion.button>
        </motion.div>

        {/* Navigation Dots */}
        <div className="absolute bottom-12 max-sm:overflow-scroll max-w-[100vw]  flex items-start space-x-8 justify-start w-full max-w-7xl z-50">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group flex items-center space-x-3"
            >
              <div className="flex flex-col items-start">
                <span className="text-white text-sm font-medium mb-1">
                  0{index + 1}/05
                </span>
                <span className="text-white text-left text-xs opacity-80">
                  {slide.subtitle}
                </span>
              </div>
              <div className="relative mb-6">
                <div className={`h-[1px] transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-24 bg-white' 
                    : 'w-16 bg-white bg-opacity-40'
                }`}></div>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute  max-w-[100vw] right-4 md:right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}