import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  { name: 'Ruchika', surname: 'Sharma', image: '/api/placeholder/150/150' },
  { name: 'Abhishek K', surname: 'Srivastava', image: '/api/placeholder/150/150' },
  { name: 'Ajay', surname: 'Srivastava', image: '/api/placeholder/150/150' },
  { name: 'Nishad', surname: 'Nanavaty', image: '/api/placeholder/150/150' },
  { name: 'Puneet', surname: 'Chopra', image: '/api/placeholder/150/150' },
  { name: 'Anchal', surname: 'Srivastava', image: '/api/placeholder/150/150' },
  { name: 'Kallol', surname: 'Borah', image: '/api/placeholder/150/150' },
  { name: 'Aniket Kumar', surname: 'Srotriya', image: '/api/placeholder/150/150' },
  { name: 'Utkarsh', surname: 'Thakur', image: '/api/placeholder/150/150' },
  { name: 'Sweta', surname: 'Kn', image: '/api/placeholder/150/150' },
  { name: 'Hemang', surname: 'Awasthi', image: '/api/placeholder/150/150' },
  { name: 'Gayathri', surname: 'Nagalingam', image: '/api/placeholder/150/150' },
  { name: 'Akash', surname: 'Dixit', image: '/api/placeholder/150/150' },
  { name: 'Aakashdeep', surname: '', image: '/api/placeholder/150/150' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-3xl text-gray-900 mb-2">
            Our Core
          </h1>
          <h2 className="text-5xl md:text-3xl text-transparent">
            TEAM
          </h2>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 md:gap-6"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center group"
            >
              {/* Avatar Container */}
              <div className="relative mb-4">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-green-200 to-yellow-200 rounded-full blur-xl opacity-60"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 gap-3">
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="text-white hover:text-blue-200 transition-colors"
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="text-white hover:text-blue-200 transition-colors"
                    >
                      <Mail size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Name */}
              <div className="text-center">
                <h3 className="font-bold text-gray-900 text-sm md:text-base">
                  {member.name}
                </h3>
                {member.surname && (
                  <p className="text-gray-600 text-sm md:text-base">
                    {member.surname}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute top-8 right-8"
        >
          <div className="text-right">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              ENER GREENWATT
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}