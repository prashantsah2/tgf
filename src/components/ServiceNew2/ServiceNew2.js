import React from 'react';
import { Zap, TrendingDown, FileText, Users } from 'lucide-react';

const servicesData = {
  "description": "Expert energy consulting solutions designed to optimize efficiency and reduce costs",
  "services": [
    {
      "icon": "Zap",
      "title": "Energy Audits",
      "description": "Comprehensive analysis of your energy consumption patterns and infrastructure. We identify inefficiencies, quantify savings opportunities, and provide actionable recommendations to optimize your energy usage and reduce operational costs.",
      "color": "teal"
    },
    {
      "icon": "TrendingDown",
      "title": "Cost Reduction",
      "description": "Strategic planning to minimize your energy expenses without compromising performance. Our team analyzes utility rates, negotiates contracts, and implements proven strategies that deliver measurable reductions in your monthly energy bills.",
      "color": "blue"
    },
    {
      "icon": "FileText",
      "title": "Compliance Support",
      "description": "Navigate complex energy regulations and sustainability requirements with confidence. We help you meet environmental standards, maintain certifications, and prepare comprehensive reports that demonstrate your commitment to energy efficiency.",
      "color": "teal"
    },
    {
      "icon": "Users",
      "title": "Training Programs",
      "description": "Empower your team with knowledge and best practices for energy management. Our customized training sessions cover energy monitoring, conservation techniques, and behavioral changes that create lasting impact on your organization's efficiency.",
      "color": "blue"
    }
  ],
  "button": {
    "text": "Get Started",
    "primaryColor": "teal",
    "hoverColor": "blue"
  }
};

const iconMap = {
  Zap: Zap,
  TrendingDown: TrendingDown,
  FileText: FileText,
  Users: Users
};

export default function ServicesNew2() {
  return (
    <div className=" bg-white py-12 px-6 md:px-12">
      <div className="max-w-[1371px] mx-auto">
        <div className="text-left mb-16 w-full">
          <p className="text-sm text-gray-700 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            {servicesData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6  transition-all duration-300 ease-in-out  hover:-translate-y-1 border-[1px] border-gray-200 border-solid"
            
              >
                <div className="flex items-start gap-4">
                  <div 
                    className={`flex-shrink-0 w-12 h-12 rounded-xl ${service.color === 'teal' ? 'bg-teal-500' : 'bg-blue-500'} flex items-center justify-center text-white`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className={`text-xl font-medium uppercase mb-2 ${service.color === 'teal' ? 'text-teal-500' : 'text-blue-500'}`}
                      style={{ letterSpacing: '0.02em' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm" style={{ color: '#0b0b0b', lineHeight: '1.6' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </div>
  );
}