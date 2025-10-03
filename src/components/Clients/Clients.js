"use client";
import Header4 from "../Header4/Header4";
import React from "react";
import Footer3 from "../Footer3/Footer3";

export default function ClientsPage() {



  const clientLogos1 = [
    'Microsoft', 'Apple', 'Google', 'Amazon', 'Tesla', 
    'Netflix', 'Meta', 'Adobe', 'Spotify', 'Uber',
    'Airbnb', 'Zoom', 'Slack', 'Dropbox'
  ];

  const clientLogos2 = [
    'Samsung', 'Intel', 'Oracle', 'Salesforce', 'PayPal',
    'Twitter', 'LinkedIn', 'Pinterest', 'Snapchat', 'TikTok',
    'Discord', 'Shopify', 'Square', 'Stripe'
  ];

  const clientLogos3 = [
    'Nike', 'Adidas', 'BMW', 'Mercedes', 'Toyota',
    'Sony', 'Nintendo', 'Coca-Cola', 'Pepsi', 'McDonald\'s',
    'Starbucks', 'IKEA', 'H&M', 'Zara'
  ];

  const internationalLogos = [
    'LVMH', 'L\'Oréal', 'Siemens', 'SAP', 'Volkswagen',
    'BBC', 'Vodafone', 'HSBC', 'Shell', 'Unilever',
    'Nestlé', 'Rolex', 'Ferrari', 'Prada', 'Gucci'
  ];

  const MarqueeRow = ({ logos, direction = 'left', speed = '30s' }) => (
    <div className="relative overflow-hidden py-4">
      {/* Left gradient shadow */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      
      {/* Right gradient shadow */}
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      
      <div 
        className="flex gap-8 animate-marquee whitespace-nowrap"
        style={{
          animation: `marquee${direction === 'right' ? 'Right' : ''} ${speed} linear infinite`
        }}
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div 
            key={`first-${index}`}
            className="flex-shrink-0 px-8 py-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl text-gray-800 font-semibold text-lg  hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200/50 backdrop-blur-sm"
          >
            {logo}
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div 
            key={`second-${index}`}
            className="flex-shrink-0 px-8 py-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl text-gray-800 font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200/50 backdrop-blur-sm"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );

 

  return (
    <>
    <Header4  />
   
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 w-full overflow-hidden">
      {/* Header */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
          Trusted by Industry Leaders
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join thousands of companies worldwide who trust us with their business
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-8 pb-16">
        <MarqueeRow logos={clientLogos1} direction="left" speed="40s" />
        <MarqueeRow logos={clientLogos2} direction="right" speed="35s" />
        <MarqueeRow logos={clientLogos3} direction="left" speed="42s" />
        <MarqueeRow logos={internationalLogos} direction="right" speed="38s" />
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee var(--speed, 30s) linear infinite;
        }
      `}</style>
    </div>
  
    <Footer3 />
    </>
  );
}