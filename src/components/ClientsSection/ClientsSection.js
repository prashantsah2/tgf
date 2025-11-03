import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ClientsSection = () => {
  const clients = [
    { id: 1, name: 'COLLOSALL', category: 'Business', bgColor: 'bg-purple-100', textStyle: 'line-through', image: 'page 15 (1).png' },
    { id: 2, name: 'mp', category: 'Art', bgColor: 'bg-blue-50', textStyle: 'italic font-serif', image: 'page 15 (2).png' },
    { id: 3, name: 'griab', category: 'Business', bgColor: 'bg-rose-100', textStyle: 'font-bold', image: 'page 15 (3).png' },
    { id: 4, name: 'Wallby Säteri', category: 'Fashion', bgColor: 'bg-amber-50', textStyle: 'font-serif', image: 'page 15 (4).png' },
    { id: 5, name: '💎', category: 'Fashion', bgColor: 'bg-gray-100', textStyle: 'text-4xl', image: 'page 15 (5).png' },
    { id: 6, name: 'ō', category: 'Art', bgColor: 'bg-yellow-50', textStyle: 'text-5xl font-light', image: 'page 15 (6).png' },
    { id: 7, name: 'ARGUMENTATIVE', category: 'Business', bgColor: 'bg-white', textStyle: 'font-bold tracking-wider text-sm', image: 'page 15 (7).png' },
    { id: 8, name: '&', category: 'Art', bgColor: 'bg-gray-100', textStyle: 'text-6xl font-serif', image: 'page 15 (8).png' },
    { id: 9, name: '☕', category: 'Business', bgColor: 'bg-rose-50', textStyle: 'text-5xl', image: 'page 15 (9).png' },
    { id: 10, name: 'R', category: 'Business', bgColor: 'bg-white', textStyle: 'text-5xl font-bold text-yellow-400', image: 'page 15 (10).png' },
    { id: 11, name: 'forum.', category: 'Art', bgColor: 'bg-blue-50', textStyle: 'font-serif italic text-2xl', image: 'page 15 (11).png' },
    { id: 12, name: 'poppins', category: 'Fashion', bgColor: 'bg-gray-100', textStyle: 'font-sans tracking-wide', image: 'page 15 (12).png' },
    { id: 13, name: 'lolita', category: 'Fashion', bgColor: 'bg-gray-50', textStyle: 'font-light tracking-widest', image: 'page 15 (13).png' },
    { id: 14, name: 'S', category: 'Art', bgColor: 'bg-gray-200', textStyle: 'text-5xl font-serif border-2 border-black', image: 'page 15 (14).png' },
    { id: 15, name: 'FUN.', category: 'Business', bgColor: 'bg-white', textStyle: 'font-bold italic', image: 'page 15 (15).png' },
    { id: 16, name: '🍇', category: 'Fashion', bgColor: 'bg-rose-100', textStyle: 'text-4xl', image: 'page 15 (16).png' }
  ];

  // Create infinite loop by repeating clients
  const displayedClients = Array(4).fill(clients).flat();

  return (
    <div className=" bg-white py-8 px-4 overflow-hidden max-w-[1391px] mx-auto pt-12 pb-12 max-sm:pb-6 lg:px-0">

      <div className='w-full text-3xl text-left max-sm:text-xl'>
        <h2 className=" mx-auto text-gray-800 mb-6 font-lora font-semibold w-full text-left max-sm:mb-4 ">
          Our <span className="bg-gradient-to-r text-gray-700 font-semibold font-lora">Partners</span>
        </h2>
      </div>
      {/* Infinite Scrolling Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-3"
          animate={{ x: '-50%' }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {displayedClients.map((client, idx) => (
            <motion.div
              key={`${client.id}-${idx}`}
              className={` aspect-[1.5] flex items-center justify-center p-4 hover:shadow-md transition-all cursor-pointer border border-gray-200 rounded-xl flex-shrink-0`}
              
              whileHover={{ scale: 1.05 }}
            >
              <div className={`${client.textStyle} text-center`}>
                <img
                  src={`/image/${client.image}`}
                  className="w-full max-w-[100px] mx-auto object-contain max-sm:max-w-[51px]"
                  alt={client.name}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fade Effect */}
  
    </div>
  );
};

export default ClientsSection;