import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Service2() {
  const points = [
    'Premium quality materials sourced from trusted suppliers',
    'Fast and reliable delivery across all major cities',
    'Expert customer support available 24/7',
    'Competitive pricing with no hidden charges',
    'Satisfaction guaranteed with easy returns policy',
    'Secure payment methods for your peace of mind'
  ];

  return (
    <div className=" bg-white flex items-center justify-center px-8 pb-24">
      <div className="max-w-[1371px] w-full">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl w-full text-left md:text-3xl font-bold mb-16 text-gray-900"
        >
        <span className='text-teal-500'>  WHY</span> <span className='text-blue-500'>CHOOSE US</span>
        </motion.h1>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start  p-2 h-[91px] mx-2  bg-white rounded-xl border-2 border-gray-100 gap-4 hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <CheckCircle className="text-teal-500 flex-shrink-0 mt-1" size={28} />
              <p className="text-md text-gray-700 leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}