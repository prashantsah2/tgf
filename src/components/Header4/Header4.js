"use client";
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

const Header4 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const servicesMenu = [
   
    { title: 'Sustainable Supply Chains', href: '/services/supply-chain' },
    { title: 'Additional Services', href: '/services/others' },
      { title: 'Carbon Services', href: '/services/carbon' },
      { title: 'Sustainable Business Practices', href: '/services/sustainable-business-practices' },
  ];

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Main Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full z-50 top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200"
      >
        <div className="max-w-[1391px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0 mr-16 max-sm:mr-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/image/enenlogo.avif" 
                alt="Logo" 
                className="h-14 w-auto"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 ">
              <motion.a 
                href="/" 
                className="text-[#222] text-xs hover:text-teal-600 px-4 py-2  font-medium transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>

              {/* Services Dropdown */}
              <div className="relative">
                <motion.button
                  onClick={() => toggleDropdown('services')}
                  className="text-[#222] text-xs hover:text-teal-600 px-4 py-2 text-sm font-medium flex items-center gap-1 transition-colors relative group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  SERVICES
                  <motion.div
                    animate={{ rotate: activeDropdown === 'services' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              </div>

              <motion.a 
                href="/enscope" 
                className="text-[#222] text-xs hover:text-teal-600 px-4 py-2 text-sm font-medium transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                ENSCOPE
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>

              <motion.a 
                href="/aboutus" 
                className="text-[#222] text-xs hover:text-teal-600 px-4 py-2 text-sm font-medium transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                ABOUT US
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>

              <motion.a 
                href="#" 
                className="text-[#222] text-xs hover:text-teal-600 px-4 py-2 text-sm font-medium transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                INSIGHTS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>

              <motion.a 
                href="/training" 
                className="text-[#222] text-xs hover:text-teal-600 px-4 py-2 text-sm font-medium transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                TRAINING
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>

              <motion.a 
                href="/careers" 
                className="text-[#222] text-xs hover:text-teal-600 px-4 py-2 text-sm font-medium transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                CAREERS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            </nav>

            {/* Contact Button */}
            <div className="hidden lg:flex items-center">
              <motion.a
                href="/contact"
                className="px-6 py-2.5 font-medium text-[#222] text-xs border-2 border-gray-300 rounded-full hover:border-teal-600 hover:text-teal-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTACT US
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-teal-600 p-2"
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Services Dropdown Menu */}
        <AnimatePresence>
          {activeDropdown === 'services' && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 left-1/3 -translate-x-1/2 bg-white shadow-lg rounded-lg border border-gray-200 z-50 min-w-[220px]"
            >
              <div className="py-2">
                {servicesMenu.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    {item.title}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                <motion.a 
                  href="/" 
                  className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  HOME
                </motion.a>


                
                <motion.a 
                  href="/enscope" 
                  className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  ENSCOPE
                </motion.a>
                
               

                <motion.a 
                  href="#" 
                  className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  INSIGHTS
                </motion.a>

                <motion.a 
                  href="/training" 
                  className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  TRAINING
                </motion.a>

                {/* Mobile Services */}
                <div>
                  <motion.button
                    onClick={() => toggleDropdown('mobile-services')}
                    className="w-full text-left text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium flex items-center justify-between"
                    whileHover={{ x: 5 }}
                  >
                    SERVICES
                    <motion.div
                      animate={{ rotate: activeDropdown === 'mobile-services' ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {activeDropdown === 'mobile-services' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1 overflow-hidden"
                      >
                        {servicesMenu.map((item, index) => (
                          <motion.a
                            key={index}
                            href={item.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ x: 5 }}
                          >
                            {item.title}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>


                <motion.a 
                  href="/careers" 
                  className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  CAREERS
                </motion.a>
                 <motion.a 
                  href="/aboutus" 
                  className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  ABOUT US
                </motion.a>

                <motion.a 
                  href="/contact" 
                  className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  CONTACT US
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Overlay for dropdown */}
      <AnimatePresence>
        {activeDropdown === 'services' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/5 z-40"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header4;