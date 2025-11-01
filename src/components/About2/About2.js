import React from 'react';
import { motion } from 'framer-motion';

const About2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-[#fff] min-h-screen  lg:pb-12 pt-[41px] max-sm:pt-0 w-full">
      <motion.div 
        className="max-w-[1371px] mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center bg-white rounded-full px-4 py-2 text-sm text-gray-600 shadow-sm border"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              ABOUT ENEN GREEN
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-xl lg:text-3xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500   leading-tight mb-[-22px]">
                ABOUT US 
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-600 text-md font-sans leading-relaxed max-w-md">
            ENEN Green is a market leader in the domains of climate change and sustainability. We strive to bring about a change in the Indian market by transforming traditional businesses into sustainable green businesses. We are constantly working towards a green future.

 

We assist organisations to reduce their carbon footprint and tackle environment degradation through green business practices.


              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div className="flex gap-4" variants={itemVariants}>
              <motion.button
                className="bg-[#1bc9a3] text-white px-6 py-3 rounded-lg font-medium  hover:bg-[#222c] transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
              Contact us 
              </motion.button>
             {/*  <motion.button
                className="bg-white text-gray-700 px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Free Trial
              </motion.button> */}
            </motion.div>

           
          
          </motion.div>

          {/* Right Image Section */}
          <motion.div 
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
             <video
  src="https://video.wixstatic.com/video/11062b_d28095a2118742d19e16ba45775d2a7e/720p/mp4/file.mp4"
  className="w-full h-96 lg:h-[500px] object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source
    src="https://video.wixstatic.com/video/11062b_d28095a2118742d19e16ba45775d2a7e/720p/mp4/file.mp4"
    type="video/mp4"
  />
  your browser does not support the video tag.
</video>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent"></div>
            </div>
            
            {/* Floating accent element */}
            <motion.div 
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600 rounded-full opacity-10"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About2;