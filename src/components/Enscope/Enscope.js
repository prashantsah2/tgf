import React from 'react';
import { motion } from 'framer-motion';

const Enscope = () => {
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
    <div className="bg-gray-50 min-h-screen  lg:p-12 pt-[141px] max-sm:pt-0 w-full">
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
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Enscope  The one stop carbon solution
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Are you ready to revolutionize the way your company approaches sustainability? Introducing our carbon accounting platform – Enscope, the ultimate solution for businesses with intricate supply chains.


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
                Contact us  →
              </motion.button>
              <motion.button
                className="bg-white text-gray-700 px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Learn More
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
                <div className="text-3xl lg:text-4xl font-bold text-gray-900">99%</div>
                <div className="text-sm text-gray-500 mt-1">Customer satisfaction rate</div>
              </motion.div>
              <motion.div 
                className="text-center lg:text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-500 mt-1">Industries and counting</div>
              </motion.div>
              <motion.div 
                className="text-center lg:text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-gray-900">$10m</div>
                <div className="text-sm text-gray-500 mt-1">Capital allocated to growth</div>
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
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

export default Enscope;