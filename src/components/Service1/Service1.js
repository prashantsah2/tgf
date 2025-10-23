import { motion } from 'framer-motion';

export default function Service1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const rightContentVariants = {
    hidden: { 
      opacity: 0, 
      x: 50
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.8,
        delay: 0.5
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div 
        className="max-w-7xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Gradient Section */}
          <motion.div 
            className="lg:w-2/5 bg-gradient-to-br from-blue-500 via-blue-600 to-emerald-500 p-8 lg:p-12 text-white relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          
            
            <div className="relative z-10 space-y-12">
              {/* Item 1 */}
              <motion.div 
                className="flex items-center space-x-6"
                variants={itemVariants}
              >
                <motion.div 
                  className="bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg"
                  variants={numberVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  1
                </motion.div>
                <motion.div 
                  className="text-lg lg:text-xl font-medium leading-relaxed"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Work towards<br />
                  global carbon<br />
                  neutrality
                </motion.div>
              </motion.div>

              {/* Item 2 */}
              <motion.div 
                className="flex items-center space-x-6"
                variants={itemVariants}
              >
                <motion.div 
                  className="bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg"
                  variants={numberVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  2
                </motion.div>
                <motion.div 
                  className="text-lg lg:text-xl font-medium leading-relaxed"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Minimize environmental<br />
                  impact to zero
                </motion.div>
              </motion.div>

              {/* Item 3 */}
              <motion.div 
                className="flex items-center space-x-6"
                variants={itemVariants}
              >
                <motion.div 
                  className="bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg"
                  variants={numberVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  3
                </motion.div>
                <motion.div 
                  className="text-lg lg:text-xl font-medium leading-relaxed"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Implement Global initiatives<br />
                  that generate tangible social,<br />
                  economic, & environment
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content Section */}
          <motion.div 
            className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center"
            variants={rightContentVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Logo */}
            <motion.div 
              className="flex justify-end mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">en</div>
                <div className="text-2xl font-bold text-emerald-500">us</div>
                <div className="text-xs text-emerald-500 font-medium tracking-wider">ENEN GREEN</div>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="space-y-6">
              <motion.h1 
                className="text-3xl lg:text-4xl font-light text-gray-800 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {`OUR COMPANY'S`}<br />
                <span className="text-blue-600 font-bold">{`VISION `}</span>
              </motion.h1>

              <motion.div 
                className="text-lg lg:text-xl text-gray-700 leading-relaxed space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <p>To attain global carbon neutrality with</p>
                <p className="text-2xl lg:text-3xl font-bold text-gray-900">
                  zero net harm 
                  <span className="font-normal text-lg lg:text-xl">while creating</span>
                </p>
                <p>measurable positive impacts</p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div 
              className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full opacity-20 transform translate-x-16 translate-y-16"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360] 
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}