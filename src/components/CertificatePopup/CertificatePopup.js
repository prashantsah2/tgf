import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

const CertificatePopup = ({ selectedCert, setSelectedCert }) => {
  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {selectedCert && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedCert(null)}
          >
            {/* Modal Content */}
            <motion.div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${selectedCert.color} p-8 relative`}>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                    {selectedCert.icon}
                  </div>
                  <div className="text-white flex-1">
                    <h2 className="text-3xl font-bold mb-2">{selectedCert.title}</h2>
                    <p className="text-white/90 text-lg">{selectedCert.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#1e293b] mb-3">Overview</h3>
                  <p className="text-[#64748b] leading-relaxed">
                    {selectedCert.fullDescription}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#1e293b] mb-4">Key Benefits</h3>
                  <div className="space-y-3">
                    {selectedCert.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-[#16a34a] flex-shrink-0 mt-0.5" />
                        <p className="text-[#64748b]">{benefit}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  onClick={() => setSelectedCert(null)}
                  className={`w-full py-4 px-6 bg-gradient-to-r ${selectedCert.color} text-white font-semibold rounded-xl text-lg`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started with This Certificate
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CertificatePopup;