import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import React from "react";

export default function Footer3() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-[1371px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Left Section - Brand & CTA */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg">
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">ENEN Green</h3>
                <p className="text-sm text-gray-400"></p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              We are committed to providing the best products and services to our customers while promoting sustainability and environmental responsibility.
            </p>

            {/* Visit Site Button */}
            <div className="bg-gray-700 rounded-full px-8 py-4 inline-flex items-center space-x-3 hover:bg-gray-600 transition-colors cursor-pointer group">
              <span className="text-white font-medium">Send your Query</span>
              <svg 
                className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
               <Facebook className="w-5 h-5 text-white"/>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-white"/>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
               <Linkedin className="w-5 h-5 text-white"/>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
               <X className="w-5 h-5 text-white"/>
              </div>
            </div>
          </div>

          {/* Middle Section - Our Store */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Our Store</h4>
            <nav className="space-y-4">
              <a 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Home
              </a>
              <a 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                About us
              </a>
              <a 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
               Our Services
              </a>
              <a 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
              Careers
              </a>
            </nav>
          </div>
           <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <nav className="space-y-4">
              <a 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Contact Us
              </a>
            </nav>
          </div>

          {/* Right Section - Get In Touch */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-sm">
                  2443 Oak Ridge Omaha, QA 45065
                </span>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300 text-sm">207-876-7-452</span>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 text-sm">123456122</span>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 text-sm">support@enengreen.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            Copyright © 2025 Enen Green 
          </p>
        </div>
      </div>
    </footer>
  );
}