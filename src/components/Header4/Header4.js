"use client"
import React, { useState } from 'react';
import { ChevronDown, Menu, X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Header4 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const servicesMenu = [
    { title: 'e+ certification', href: '/services/e+certification' },
     { title: 'Chapter msme', href: '/services/chapter-msme' },
      { title: 'Young Learners', href: '/services/young-learners' },
 
  ];

  const toggleDropdown = (status) => {
    setActiveDropdown(status);
  };
const partnerMenu = [
  


  {
    title: 'ENEN Green - Know how Partner',
    href: 'https://www.enengreen.com',
    subMenu: [
      { title: 'ENEN Green', href: 'https://www.enengreen.com/' },
      { title: 'Clan Digital', href: '/services/our-sponsors/community' },
    ],
  },
  {
    title: 'Clan Digital - Digital Partner',
    href: 'https://www.clandigital.in',
    subMenu: [
        { title: 'ENEN Green', href: 'https://www.enengreen.com/' },
     
    ],
  },
];

  return (
    <>
      {/* Main Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50"
      >
        <div className="max-w-[1391px] mx-auto px-4 pl-0 flex items-center h-20">
          <div className='w-[121px] h-20 mr-auto'>
            <Image src="/image/Untitled design (31).png" alt="TGF Logo" width={121} height={80} className="object-contain h-full mr-auto "/>
          </div>
          <div className="flex justify-between items-center h-20">
            {/* Left side - Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 mr-6" >

               <motion.a 
                href="/aboutus" 
                className="text-gray-800 text-sm font-medium font-outfit hover:text-teal-600 px-4 py-2 transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                ABOUT US
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              {/* Services Dropdown */}
              <div className="relative">
                <motion.button
                  onMouseEnter={() => toggleDropdown('services')}
                  className="text-gray-800 font-outfit text-sm font-medium hover:text-teal-600 px-4 py-2 flex items-center gap-1 transition-colors relative group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                 PROGRAMS
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
                href="/clients" 
                className="flex text-gray-800 text-sm font-medium font-outfit hover:text-teal-600 px-4 py-2 transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                  onMouseEnter={() => toggleDropdown('partners')}
              >
                OUR NETWORKS
                <motion.div
                    animate={{ rotate: activeDropdown === 'partners' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>

             

            </nav>

            {/* Right side - Contact Button */}
            <div className="hidden lg:flex items-center ml-auto">
              <motion.a
                href="/contact"
                className="px-6 py-3 font-medium text-sm font-outfit bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-4 w-4" />
                CONTACT US
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden ml-auto">
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

        <AnimatePresence>
          {activeDropdown === 'partners' && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-[12rem] mt-2 ml-6 bg-white shadow-xl rounded-lg border border-gray-200 min-w-[280px]"
              onMouseLeave={() => setActiveDropdown(null)}
              onMouseEnter={() => setActiveDropdown('partners')}
            >
              <div className="py-2">
                {partnerMenu.map((item, index) => (
  <div key={index} className="group relative">
    <motion.a
      href={item.href}
      className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors flex justify-between items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ x: 5 }}
    >
      {item.title}
     {/*  {item.subMenu && <ChevronDown className="h-4 w-4 ml-2 text-gray-500 group-hover:text-teal-600" />} */}
    </motion.a>

{/*     {item.subMenu && ( */}
    {/*   <div className=" left-full top-0 mt-0 bg-white border border-gray-200 rounded-md transition-all duration-300  min-w-[220px]">
        {item.subMenu.map((sub, subIndex) => (
          <a
            key={subIndex}
            href={sub.href}
            className="block px-4 py-2 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-600"
          >
            {sub.title}
          </a>
        ))}
      </div> */}
{/*     )} */}
  </div>
))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Services Dropdown Menu */}
        <AnimatePresence>
          {activeDropdown === 'services' && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-1/3 mt-2 ml-6 bg-white shadow-xl rounded-lg border border-gray-200 min-w-[280px]"
              onMouseLeave={() => setActiveDropdown(null)}
              onMouseEnter={() => setActiveDropdown('services')}
            >
              <div className="py-2">
                {servicesMenu.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
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
                {/* Mobile Services */}
                <div>
                  <motion.button
                    onClick={() => toggleDropdown(activeDropdown === 'mobile-services' ? null : 'mobile-services')}
                    className="w-full text-left text-gray-700 font-outfit hover:text-teal-600 px-3 py-2 text-sm font-medium flex items-center justify-between"
                    whileHover={{ x: 5 }}
                  >
                    PROGRAMS
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
                            className="block px-3 py-2 text-sm font-outfit text-gray-600 hover:text-teal-600"
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
                  href="/aboutus" 
                  className="text-gray-700 hover:text-teal-600 block font-outfit px-3 py-2 text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  ABOUT US
                </motion.a>

             

                <div>
                  <motion.button
                    onClick={() => toggleDropdown(activeDropdown === 'mobile-partners' ? null : 'mobile-services')}
                    className="w-full text-left text-gray-700 font-outfit hover:text-teal-600 px-3 py-2 text-sm font-medium flex items-center justify-between"
                    whileHover={{ x: 5 }}
                  >
                    PARTNERS
                    <motion.div
                      animate={{ rotate: activeDropdown === 'mobile-services' ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {activeDropdown === 'mobile-partners' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1 overflow-hidden"
                      >
                        {partnerMenu.map((item, index) => (
                          <motion.a
                            key={index}
                            href={item.href}
                            className="block px-3 py-2 text-sm font-outfit text-gray-600 hover:text-teal-600"
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
                  href="/contact" 
                  className="bg-teal-600 text-white hover:bg-teal-700 font-outfit block px-3 py-2 text-sm font-medium rounded-lg mt-4 text-center"
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