'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Leaf, Database, RefreshCcw, Droplets, FileText, GraduationCap, Handshake } from 'lucide-react';
import Header4 from '@/components/Header4/Header4';
import Footer3 from '@/components/Footer3/Footer3';

const servicesData = [
  {
    id: 'decarbonisation',
    name: 'Decarbonisation Solutions',
    icon: Leaf,
    color: 'bg-[#334155]',
    hoverColor: 'hover:bg-[#475569]',
    content: {
      title: 'Decarbonisation Solutions',
      description: 'Our decarbonisation solutions offer comprehensive strategies and technologies to help organizations reduce their carbon footprint and transition to a low-carbon future. From energy efficiency measures and renewable energy adoption to carbon offsetting and emission reduction projects, we provide tailored solutions to meet the unique needs and goals of each client. Our holistic approach integrates sustainability principles into every aspect of operations, driving meaningful reductions in greenhouse gas emissions while enhancing organizational resilience and competitiveness.'
    }
  },
  {
    id: 'esg',
    name: 'ESG Data Management',
    icon: Database,
    color: 'bg-[#10b981]',
    hoverColor: 'hover:bg-[#059669]',
    content: {
      title: 'ESG Data Management',
      description: 'Transform your sustainability reporting with our comprehensive ESG data management platform. We help organizations collect, analyze, and report environmental, social, and governance metrics with precision and transparency. Our solutions streamline data collection processes, ensure compliance with global reporting standards, and provide actionable insights for strategic decision-making. From carbon accounting to social impact metrics, we enable you to track, measure, and communicate your sustainability performance effectively to stakeholders.'
    }
  },
  {
    id: 'lca',
    name: 'Life Cycle Assessment (LCA)',
    icon: RefreshCcw,
    color: 'bg-[#10b981]',
    hoverColor: 'hover:bg-[#059669]',
    content: {
      title: 'Life Cycle Assessment (LCA)',
      description: 'Understand the complete environmental impact of your products and services through our rigorous Life Cycle Assessment methodology. We analyze every stage from raw material extraction to end-of-life disposal, identifying opportunities for environmental improvement and resource optimization. Our LCA services help you make informed decisions about product design, material selection, and process improvements while supporting eco-labeling, green procurement, and sustainable product development initiatives.'
    }
  },
  {
    id: 'credits',
    name: 'Plastic and Water Credits',
    icon: Droplets,
    color: 'bg-[#10b981]',
    hoverColor: 'hover:bg-[#059669]',
    content: {
      title: 'Plastic and Water Credits',
      description: 'Address plastic pollution and water stewardship through our innovative credit programs. We connect organizations with verified projects that remove plastic waste from the environment and improve water conservation. Our plastic credit solutions enable businesses to take responsibility for their plastic footprint while supporting waste management infrastructure in vulnerable communities. Water credit programs help companies offset water consumption and invest in watershed restoration and clean water access projects.'
    }
  },
  {
    id: 'regulation',
    name: 'Regulation Guidance',
    icon: FileText,
    color: 'bg-[#10b981]',
    hoverColor: 'hover:bg-[#059669]',
    content: {
      title: 'Regulation Guidance',
      description: 'Navigate the complex landscape of environmental regulations with confidence. Our expert team provides comprehensive guidance on compliance requirements across jurisdictions, from carbon pricing mechanisms to extended producer responsibility schemes. We help you understand emerging regulations, assess compliance gaps, develop action plans, and implement systems to ensure ongoing regulatory adherence. Stay ahead of policy changes and turn regulatory requirements into competitive advantages.'
    }
  },
  {
    id: 'training',
    name: 'Training and Capacity Building',
    icon: GraduationCap,
    color: 'bg-[#10b981]',
    hoverColor: 'hover:bg-[#059669]',
    content: {
      title: 'Training and Capacity Building',
      description: 'Empower your team with the knowledge and skills needed to drive sustainability transformation. Our customized training programs cover topics from carbon accounting and circular economy principles to ESG reporting and sustainable supply chain management. We offer workshops, webinars, certification courses, and ongoing mentorship to build internal capacity. Whether you\'re starting your sustainability journey or advancing existing programs, we equip your organization with the expertise to achieve ambitious environmental and social goals.'
    }
  },
  {
    id: 'csr',
    name: 'CSR Consultation',
    icon: Handshake,
    color: 'bg-[#10b981]',
    hoverColor: 'hover:bg-[#059669]',
    content: {
      title: 'CSR Consultation',
      description: 'Develop and implement meaningful Corporate Social Responsibility strategies that create shared value for your business and society. Our consultants help you identify material issues, engage stakeholders, design impactful programs, and measure outcomes. From community investment initiatives to employee volunteering programs, we guide you in building authentic CSR strategies that align with your business values, strengthen brand reputation, and contribute to sustainable development goals while delivering tangible benefits to communities.'
    }
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const contentVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

export default function SustainabilityServices() {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <>    
    <Header4/>
          <div className="min-h-screen bg-gradient-to-br from-[#f8fafc]  via-[#d1fae5] to-[#f1f5f9] p-4 sm:p-6 lg:p-8">
      <div className="max-w-[1371px] mx-auto pt-[71px]">
        <motion.div 
          className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {servicesData.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedService.id === service.id;
            
            return (
              <motion.button
                key={service.id}
                variants={item}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedService(service)}
                className={`${service.color} ${service.hoverColor} text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                  isSelected ? 'ring-4 ring-white ring-offset-2' : ''
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">{service.name}</span>
                <span className="sm:hidden">{service.name.split(' ')[0]}</span>
              </motion.button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedService.id}
            className="bg-gradient-to-br from-[#334155] via-[#1e293b] to-[#0f172a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12"
            variants={contentVariant}
            initial="hidden"
            animate="show"
           
          >
            <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
              {(() => {
                const Icon = selectedService.icon;
                return <Icon className="w-10 h-10 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#34d399] flex-shrink-0" />;
              })()}
              
              <motion.h2 
                className="text-xl sm:text-xl lg:text-2xl xl:text-2xl  text-white"
                initial={{ opacity: 0.5, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {selectedService.content.title}
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-[#e2e8f0] text-base sm:text-lg lg:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {selectedService.content.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    <Footer3/>
    </>
  );
}