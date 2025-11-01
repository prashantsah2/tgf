import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

export default function EnscopeLanding() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#fff]">
      <div className="grid md:grid-cols-2 gap-12 max-w-[1371px] w-full items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl md:text-3xl font-outfit  text-gray-900 mb-6 leading-4 uppercase font-bold">
            <span className='text-teal-500'>Enscope The one stop</span><br></br> <span className='text-blue-500'>carbon solution</span>
          </h1>
          
          <p className="text-sm font-sans text-gray-600 mb-8 leading-relaxed">
            Are you ready to revolutionize the way your company approaches sustainability? Introducing our carbon accounting platform – Enscope, the ultimate solution for businesses with intricate supply chains.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="bg-teal-500 text-white text-md py-2 px-12 rounded-xl flex items-center gap-3 transition-colors text-md"
          >
            Try Now
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        {/* Right Section - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-teal-900 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Animated background pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0ff" strokeWidth="0.5" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#grid)" />
              </svg>

              {/* Animated equations */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 text-teal-300 font-mono text-sm"
              >
                ctg_d = x
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-20 left-10 text-teal-300 font-mono text-sm"
              >
                A² + B¹ = Ā
              </motion.div>

              {/* Center geometric shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <svg width="200" height="200" viewBox="0 0 200 200" className="text-teal-400">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                  <path d="M 100 20 L 160 140 L 40 140 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {!submitted ? (
                <>
                  <div className="bg-green-500 text-white p-6 flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Get Started</h2>
                    <button
                      onClick={() => setShowForm(false)}
                      className="p-1 hover:bg-green-600 rounded-lg transition"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none text-sm"
                        rows="3"
                        placeholder="Tell us about your sustainability goals..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      className="w-full px-4 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition text-sm"
                    >
                      Start Free Trial
                    </button>
                  </div>
                </>
              ) : (
                <div className="p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-3xl text-green-500">✓</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Success!</h3>
                  <p className="text-gray-600">{`We'll be in touch shortly. Welcome to Enscope!`}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}