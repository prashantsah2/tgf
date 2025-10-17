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
    <div className="bg-[#fff] min-h-screen  lg:p-12 pt-[141px] max-sm:pt-0 w-full">
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
              ABOUT US
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl lg:text-5xl font-outfit text-gray-900 leading-tight mb-[-22px]">
                About Enen Green
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
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Get Started →
              </motion.button>
              <motion.button
                className="bg-white text-gray-700 px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Free Trial
              </motion.button>
            </motion.div>

            {/* Statistics */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8"
              variants={statsVariants}
            >
              <motion.div 
                className="text-center lg:text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl lg:text-4xl font-sans text-gray-900">11+</div>
                <div className="text-sm text-gray-500 mt-1">Years of Experience</div>
              </motion.div>
              <motion.div 
                className="text-center lg:text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl lg:text-4xl font-sans text-gray-900">40+</div>
                <div className="text-sm text-gray-500 mt-1">Projects completed</div>
              </motion.div>
              <motion.div 
                className="text-center lg:text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl lg:text-4xl font-sans text-gray-900">40+</div>
                <div className="text-sm text-gray-500 mt-1">Industries Served</div>
              </motion.div>
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
              <img
                src="/image/2672292.jpg"
                alt="Professional woman looking confidently to the side"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
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