import React, { useState } from 'react';
import { Leaf, Cloud, ShoppingCart, Plus, ThermometerSun } from 'lucide-react';
import { useRouter } from 'next/navigation';

const pillars = [
  {
    id: 1,
    icon: ThermometerSun,
    color: 'from-blue-500 to-blue-700',
    textColor: 'text-blue-600',
    title: 'CLIMATE CHANGE',
    description: `First in India in climate change and sustainability.`,
    path:'/services/supply-chain'
  },
  {
    id: 2,
    icon: Leaf,
    color: 'from-orange-400 to-yellow-500',
    textColor: 'text-orange-500',
    title: 'SUSTAINABLE BUSINESS PRACTICES',
    description: 'Transform your operations with sustainable methodologies that balance environmental responsibility with business growth and profitability.',
     path:'/services/sustainable-business-practices'
  },
  {
    id: 3,
    icon: Cloud,
    color: 'from-teal-400 to-green-500',
    textColor: 'text-teal-600',
    title: 'CARBON',
    description: 'Measure, manage, and reduce your carbon footprint through comprehensive carbon accounting, offsetting strategies, and emissions reduction programs.',
     path:'/services/carbon'
  },
  {
    id: 4,
    icon: ShoppingCart,
    color: 'from-purple-500 to-purple-700',
    textColor: 'text-purple-600',
    title: 'SUSTAINABLE SUPPLY CHAIN',
    description: 'Build resilient and responsible supply chains that prioritize environmental and social governance while maintaining operational efficiency.',
     path:'/services/supply-chain'
  },
  {
    id: 5,
    icon: Plus,
    color: 'from-teal-400 to-teal-600',
    textColor: 'text-teal-500',
    title: 'ADDITIONAL SERVICES',
    description: 'Customized sustainability solutions tailored to your unique organizational needs, industry requirements, and long-term environmental goals.',
     path:'/services/additional-services'
  },
];

export default function ServicesHome() {
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const router = useRouter();

  const handlePillarClick = (path) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 p-8 max-sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl bg-gradient-to-r  from-blue-600 to-teal-500 bg-clip-text text-transparent font-outfit font-bold ">
            OUR SERVICES
          </h1>
          <p className="text-md text-[#999]  mb-4 max-w-4xl mx-auto mt-4 font-sans text-sm">
            At the core of our Sustainability Solutions are FIVE pillars designed to<br></br> provide One Stop Solution for more sustainable business practices.
          </p>
       
        </div>

        {/* Pillars */}
        <div className="relative max-w-5xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isEven = index % 2 === 0;
            const isHovered = hoveredPillar === pillar.id;
            
            return (
              <div
                key={pillar.id}
                className="relative mb-20 last:mb-0"
                onMouseEnter={() => setHoveredPillar(pillar.id)}
                onMouseLeave={() => setHoveredPillar(null)}
              >
                <div className={`flex items-center gap-12 max-sm:flex-col ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Side */}
                  <div className={`flex-1 ${isEven ? 'text-left' : 'text-right'}`}>
                    <h3 className={`${pillar.textColor} font-outfit font-bold text-xl mb-3 tracking-wide`}>
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-base font-sans leading-relaxed text-[#888]">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Center Circle with Arc */}
                  <div className="relative flex-shrink-0 max-sm:scale-50 my-[-35px]">
                    {/* Connecting Line */}
                    {index < pillars.length - 1 && (
                      <div className={`absolute top-full left-1/2 w-1 h-40 bg-gradient-to-b from-teal-500 to-teal-500 transform -translate-x-1/2 z-0 mb-6  ${isEven?'':''}`} />
                    )}
                    
                    {/* Arc Background */}
                    <div className={`relative transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                      <svg width="160" height="160" viewBox="0 0 160 160" className={`transform ${!isEven ? '-rotate-90' : 'rotate-0'} transition-transform duration-500`}>
                        <defs>
                          <linearGradient id={`gradient-${pillar.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={pillar.color.includes('blue') ? '#3b82f6' : pillar.color.includes('orange') ? '#fb923c' : pillar.color.includes('teal') && pillar.id === 3 ? '#14b8a6' : pillar.color.includes('purple') ? '#a855f7' : '#14b8a6'} />
                            <stop offset="100%" stopColor={pillar.color.includes('blue') ? '#1d4ed8' : pillar.color.includes('yellow') ? '#eab308' : pillar.color.includes('green') ? '#22c55e' : pillar.color.includes('purple') ? '#7e22ce' : '#0d9488'} />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 80 15 A 65 65 0 0 1 145 80"
                          fill="none"
                          stroke={`url(#gradient-${pillar.id})`}
                          strokeWidth="22"
                          strokeLinecap="round"
                          className="transition-all duration-500"
                         
                        />
                      </svg>
                      
                      {/* Center White Circle */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" onClick={() => handlePillarClick(pillar.path)}>
                        <div className={`bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-xl transition-all duration-300 ${isHovered ? 'shadow-2xl scale-105' : ''} border-4 border-white`}>
                          <Icon className={`w-12 h-12 ${pillar.textColor} transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} strokeWidth={2} />
                        </div>
                      </div>
                    </div>

                    {/* Connection Dot and Line */}
                  {/*   <div className={`absolute ${isEven ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} top-1/2 -translate-y-1/2`}>
                      <div className="relative">
                        <div className={`w-4 h-4 rounded-full ${pillar.textColor.replace('text-', 'bg-')} transition-all duration-300 ${isHovered ? 'scale-150 shadow-lg' : 'scale-100'} border-2 border-white`} />
                        <div className={`absolute top-1/2 ${isEven ? 'right-full' : 'left-full'} w-24 h-0.5 ${pillar.textColor.replace('text-', 'bg-')} -translate-y-1/2 opacity-60`} />
                      </div>
                    </div> */}
                  </div>

                  {/* Empty Side for Balance */}
                  <div className="flex-1" />
                </div>
              </div>
            );
          })}
        </div>

      
      </div>
    </div>
  );
}