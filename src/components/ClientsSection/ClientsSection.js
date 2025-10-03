import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ClientsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Art', 'Business', 'Fashion', 'Photography'];
  
  const clients = [
    { id: 1, name: 'COLLOSALL', category: 'Business', bgColor: 'bg-purple-100', textStyle: 'line-through',image:'page 15 (1).png' },
    { id: 2, name: 'mp', category: 'Art', bgColor: 'bg-blue-50', textStyle: 'italic font-serif',image:'page 15 (2).png' },
    { id: 3, name: 'griab', category: 'Business', bgColor: 'bg-rose-100', textStyle: 'font-bold',image:'page 15 (3).png' },
    { id: 4, name: 'Wallby Säteri', category: 'Fashion', bgColor: 'bg-amber-50', textStyle: 'font-serif',image:'page 15 (4).png' },
    { id: 5, name: '💎', category: 'Fashion', bgColor: 'bg-gray-100', textStyle: 'text-4xl',image:'page 15 (5).png' },
    { id: 6, name: 'ō', category: 'Art', bgColor: 'bg-yellow-50', textStyle: 'text-5xl font-light border-4 border-black rounded-full w-20 h-20 flex items-center justify-center mx-auto',image:'page 15 (6).png' },
    { id: 7, name: 'ARGUMENTATIVE', category: 'Business', bgColor: 'bg-white', textStyle: 'font-bold tracking-wider text-sm',image:'page 15 (7).png' },
    { id: 8, name: '&', category: 'Art', bgColor: 'bg-gray-100', textStyle: 'text-6xl font-serif',image:'page 15 (8).png' },
    { id: 9, name: '☕', category: 'Business', bgColor: 'bg-rose-50', textStyle: 'text-5xl',image:'page 15 (9).png' },
    { id: 10, name: 'R', category: 'Business', bgColor: 'bg-white', textStyle: 'text-5xl font-bold text-yellow-400',image:'page 15 (10).png' },
    { id: 11, name: 'forum.', category: 'Art', bgColor: 'bg-blue-50', textStyle: 'font-serif italic text-2xl',image:'page 15 (11).png' },
    { id: 12, name: 'poppins', category: 'Fashion', bgColor: 'bg-gray-100', textStyle: 'font-sans tracking-wide',image:'page 15 (12).png' },
    { id: 13, name: 'lolita', category: 'Fashion', bgColor: 'bg-gray-50', textStyle: 'font-light tracking-widest',image:'page 15 (13).png' },
    { id: 14, name: 'S', category: 'Art', bgColor: 'bg-gray-200', textStyle: 'text-5xl font-serif border-2 border-black',image:'page 15 (14).png' },
    { id: 15, name: 'FUN.', category: 'Business', bgColor: 'bg-white', textStyle: 'font-bold italic',image:'page 15 (15).png' },
    { id: 16, name: '🍇', category: 'Fashion', bgColor: 'bg-rose-100', textStyle: 'text-4xl',image:'page 15 (16).png' }
  ];

  const filteredClients = activeFilter === 'All' 
    ? clients 
    : clients.filter(client => client.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
    
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeFilter}
        className="max-w-[1391px]  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
      >
        {filteredClients.map((client) => (
          <motion.div
            key={client.id}
            variants={itemVariants}
            className={`${client.bgColor} aspect-[1.5] flex items-center justify-center p-8 hover:shadow-lg transition-shadow cursor-pointer border border-gray-100`}
          >
            <div className={`${client.textStyle} text-center aspect-[1.5]`}>
              <img src={`/image/${client.image}`} className='px-16 py-2' />
            </div>
          </motion.div>
        ))}
      </motion.div>

      

      
    </div>
  );
};

export default ClientsSection;