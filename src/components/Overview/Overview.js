import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Overview() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const rightContentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9],
        delay: 0.5
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 md:p-8 overflow-hidden">
      <div className="w-full max-w-[1371px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Gradient Card */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative"
          >
            <motion.div 
              className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-teal-500 to-emerald-400 p-12 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background effects */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                animate={{
                  x: [0, 30, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
                animate={{
                  x: [0, -30, 0],
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative space-y-16">
                {/* Item 1 */}
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start gap-6"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-1 text-right">
                    <p className="text-white text-lg md:text-xl leading-relaxed font-light">
                      Work towards<br />
                      <span className="font-normal">global carbon</span><br />
                      <span className="font-normal">neutrality</span>
                    </p>
                  </div>
                  <motion.div 
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-3xl font-bold text-teal-600">1</span>
                  </motion.div>
                </motion.div>

                {/* Item 2 */}
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start gap-6"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-1 text-right">
                    <p className="text-white text-lg md:text-xl leading-relaxed font-light">
                      Minimize environmental<br />
                      <span className="font-normal">impact to zero</span>
                    </p>
                  </div>
                  <motion.div 
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-3xl font-bold text-teal-600">2</span>
                  </motion.div>
                </motion.div>

                {/* Item 3 */}
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start gap-6"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-1 text-right">
                    <p className="text-white text-lg md:text-xl leading-relaxed font-light">
                      Implement Global initiatives<br />
                      <span className="font-normal">that generate tangible social,</span><br />
                      <span className="font-normal">economic, & environment</span><br />
                      <span className="font-normal">benefits.</span>
                    </p>
                  </div>
                  <motion.div 
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-3xl font-bold text-teal-600">3</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={rightContentVariants}
            className="space-y-8"
          >
            {/* Logo */}
            <motion.div 
              variants={logoVariants}
              className="flex justify-start lg:justify-end mb-8"
            >
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <span className="text-4xl font-bold text-teal-600">en</span>
                </div>
                <div className="flex items-center gap-1 -mt-2">
                  <span className="text-4xl font-bold text-teal-600">en</span>
                </div>
                <div className="text-sm font-semibold text-emerald-600 tracking-wider mt-1">
                  ENEN GREEN
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-2">
               {` OUR COMPANY'S`}
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                VISION
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                To attain global carbon neutrality with
              </p>
              <motion.h3 
                className="text-4xl md:text-5xl font-bold text-gray-900"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                zero net harm
              </motion.h3>
              <p className="text-xl md:text-2xl text-gray-700">
                while creating measurable positive impacts
              </p>
            </motion.div>

            {/* Gradient Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "170px", opacity: 1 }}
              transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              className="h-2 bg-gradient-to-r from-blue-600 to-emerald-400 rounded-full"
            />

            {/* Footer Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-sm text-gray-400 italic"
            >
              Private & Confidential
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}