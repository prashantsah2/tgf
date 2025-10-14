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
      description: 'Our ESG data management solutions empower organizations to effectively collect, analyze, and report on sustainability performance metrics. We streamline the process of gathering diverse ESG data from internal and external sources, ensuring accuracy, consistency, and transparency. We provide insights into key ESG indicators, enabling organizations to track progress, identify trends, and make informed decisions to drive sustainability performance. From carbon emissions and energy consumption to social impact and governance practices, our ESG data management solution helps organizations demonstrate accountability, transparency, and commitment to stakeholders while driving meaningful progress towards sustainability goals.'
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
      description: 'Our Life Cycle Assessment (LCA) service offers organizations a comprehensive analysis of the environmental impacts associated with their products, processes, or services throughout their entire life cycle. Utilizing internationally recognized methodologies and appropriate tools, we assess resource use, energy consumption, emissions, and other environmental indicators from raw material extraction to end-of-life disposal. By quantifying environmental impacts across the life cycle, our LCA service helps organizations minimize their environmental footprint, enhance resource efficiency, and make more sustainable choices that align with their environmental objectives and stakeholder expectations.'
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
      description: 'Our Plastic and Water offsets project development service offers organizations a unique opportunity to mitigate their environmental impact by supporting initiatives that address plastic waste pollution and water scarcity. From project inception to implementation and monitoring, we provide comprehensive support to ensure successful outcomes and maximize environmental and social impact. Through the purchase of Plastic and Water credits, organizations can demonstrate their commitment to environmental stewardship, support meaningful initiatives, and contribute to global efforts to address plastic pollution and water scarcity, while enhancing their sustainability credentials and reputation.'
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
      description: 'Our Regulation Guidance service offers businesses comprehensive support in navigating complex climate change regulations, such as the Carbon Border Adjustment Mechanism (CBAM) and other emerging policies. With expertise in regulatory analysis and compliance, we provide strategic guidance to help businesses understand the implications of these regulations on their operations, supply chains, and market competitiveness. We assist businesses in developing proactive strategies to ensure compliance, mitigate risks, and capitalize on opportunities presented by evolving regulatory landscapes. Through tailored guidance, stakeholder engagement, and policy advocacy, we empower businesses to adapt to regulatory changes effectively while advancing their sustainability goals and maintaining a competitive edge in a rapidly evolving market'
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
      description: `Our Training and Capacity Building services empower individuals and organizations to enhance their sustainability knowledge, skills, and capabilities. Through interactive workshops, seminars, and online courses, we offer practical guidance on a wide range of topics, including ESG reporting, carbon management, circular economy principles, and more. Our expert instructors provide valuable insights and real-world examples to help participants deepen their understanding. Whether you're a sustainability professional looking to expand your expertise or a business leader seeking to integrate sustainability into your organization's operations, our training programs are designed to meet your needs. Join us in our upcoming trainings to gain valuable knowledge and skills that will drive positive change and unlock new opportunities for sustainable growth.`
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
      description: `Our CSR Consultation service provides tailored guidance and support to organizations seeking to develop and implement impactful Corporate Social Responsibility (CSR) strategies. With a focus on aligning CSR initiatives with business objectives and stakeholder expectations, our expert consultants collaborate closely with clients to understand their unique challenges, opportunities, and values. From strategy development and implementation planning to CSR reporting and communication, we offer strategic advice and practical solutions to help organizations maximize social and environmental value creation while enhancing brand reputation and long-term sustainability. Whether you're a multinational corporation or a small business, our CSR Consultation service equips you with the tools and insights needed to drive positive change and make a meaningful impact in your communities and beyond.`
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