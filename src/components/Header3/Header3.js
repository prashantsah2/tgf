"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Phone, Search, User } from "lucide-react"

export default function Header3() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <motion.nav
      className="flex items-center justify-between px-8 py-6 fixed s z-50  backdrop-blur-md border-b border-blue-600/30 d top-0 left-0 right-0"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <div className="flex items-center space-x-8">
       <a href="/">
        <motion.div 
          className="flex items-center space-x-2 text-primary"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          <span className="text-lg font-semibold">Home</span>
        </motion.div>
        </a>

        <motion.div 
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <input
            type="text"
            placeholder="Search services........."
            className="bg-blue-600 bg-opacity-50 text-white placeholder-gray-300 px-4 py-2 pr-10 rounded-full border border-blue-500 focus:outline-none focus:border-green-400 w-64 transition-all duration-300"
          />
          <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-300" />
        </motion.div>
        <a href="/services">
        <motion.div 
          className="flex items-center space-x-2 text-primary"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-lg font-semibold">Services</span>
        </motion.div>
        </a>

       <a href="/aboutus">
         <motion.div 
          className="flex items-center space-x-2 text-white"
          whileHover={{ scale: 1.05, color: "#4ade80" }}
          transition={{ duration: 0.2 }}
        >
          <User className="w-6 h-6 text-blue-300" />
          <span className="text-lg font-semibold">About Us</span>
        </motion.div>
       </a>
      </div>

     <a href="/contact"> <motion.div 
        className="flex items-center space-x-2 text-white"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-lg font-semibold">Contact us</span>
        <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
          <Phone className="w-3 h-3 text-white" />
        </div>
      </motion.div></a>
    </motion.nav>
  )
}