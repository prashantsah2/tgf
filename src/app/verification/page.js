'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Shield, GitBranch, Scale, FileCheck } from 'lucide-react';
import Header4 from '@/components/Header4/Header4';
import Footer3 from '@/components/Footer3/Footer3';

const tabsData = [
  {
    id: 'process',
    name: 'VALIDATION AND VERIFICATION PROCESS',
    icon: Shield,
    content: {
      title: 'VALIDATION AND VERIFICATION PROCESS',
      description: 'Our comprehensive validation and verification process ensures the highest standards of accuracy and compliance. We follow internationally recognized protocols and methodologies to verify greenhouse gas emissions data, carbon offset projects, and sustainability claims. Our systematic approach includes thorough documentation review, on-site assessments, stakeholder interviews, and rigorous data analysis to provide credible third-party verification services.'
    }
  },
  {
    id: 'flow',
    name: 'VALIDATION/VERIFICATION PROCESS FLOW',
    icon: GitBranch,
    content: {
      title: 'VALIDATION/VERIFICATION PROCESS FLOW',
      description: 'Our streamlined process flow guides clients through each stage of validation and verification. Beginning with initial consultation and scope definition, we proceed through documentation review, site visits, data verification, stakeholder engagement, and final reporting. Our transparent workflow ensures clear communication, timely deliverables, and comprehensive assessment at every stage, resulting in credible verification statements that meet international standards and program requirements.'
    }
  },
  {
    id: 'impartiality',
    name: 'COMMITMENT TO IMPARTIALITY',
    icon: Scale,
    content: {
      title: 'COMMITMENT TO IMPARTIALITY',
      description: 'Impartiality is the cornerstone of our verification services. We maintain strict independence from our clients and avoid conflicts of interest through robust policies and procedures. Our verification team operates with objectivity, ensuring that all assessments are based solely on evidence and compliance with applicable standards. We implement continuous monitoring of impartiality risks and maintain transparent governance structures to uphold the integrity and credibility of our verification activities.'
    }
  },
  {
    id: 'complaints',
    name: 'COMPLAINTS AND APPEALS PROCESS',
    icon: FileCheck,
    content: {
      title: 'COMPLAINTS AND APPEALS PROCESS',
      description: 'We maintain a fair and transparent complaints and appeals process to address concerns and disputes. Stakeholders can submit complaints regarding our verification activities, which are investigated promptly and impartially. Our appeals process allows clients to challenge verification decisions through an independent review mechanism. We document all complaints and appeals, implement corrective actions when necessary, and continuously improve our processes based on feedback to maintain the highest standards of service quality.'
    }
  }
];

const servicesContent = {
  title: 'VALIDATION AND VERIFICATION SERVICES OFFERED',
  intro: 'At ENEN GREEN, we provide a comprehensive range of validation and verification services designed to ensure the accuracy, transparency, and reliability of greenhouse gas (GHG) emissions data across various sectors. Our services are aligned with the GHG Protocol, a globally recognized framework for measuring and managing GHG emissions. Our commitment to impartiality, competence, and adherence to specific program requirements ensures that our validation and verification activities meet the highest standards.',
  listTitle: 'List of Validation and Verification Activities',
  activities: [
    {
      title: 'GHG Emissions Verification:',
      items: [
        {
          label: 'Scope 1 Emissions:',
          description: 'Verification of direct emissions from owned or controlled sources.'
        },
        {
          label: 'Scope 2 Emissions:',
          description: 'Verification of indirect emissions from the generation of purchased electricity, steam, heating, and cooling consumed by the reporting organization.'
        },
        {
          label: 'Scope 3 Emissions:',
          description: 'Verification of other indirect emissions that occur in the value chain of the reporting company.'
        }
      ]
    }
  ]
};

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
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2
    }
  }
};

export default function ValidationVerification() {
  const [selectedTab, setSelectedTab] = useState('services');

  return (
    <>
    <Header4/>
    <div className="min-h-screen bg-[#f8fafc] p-4 sm:p-6 lg:p-8">
      <div className="max-w-[1371px] mx-auto">
        <motion.div 
          className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {tabsData.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedTab === tab.id;
            
            return (
              <motion.button
                key={tab.id}
                variants={item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm border-2 ${
                  isSelected 
                    ? 'bg-[#1e293b] text-white border-[#1e293b]' 
                    : 'bg-white text-[#1e293b] border-[#cbd5e1] hover:border-[#1e293b]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden lg:inline">{tab.name}</span>
                <span className="lg:hidden">{tab.name.split(' ')[0]}</span>
              </motion.button>
            );
          })}
          
          <motion.button
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedTab('services')}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm ${
              selectedTab === 'services'
                ? 'bg-[#1e293b] text-white'
                : 'bg-white text-[#1e293b] border-2 border-[#cbd5e1] hover:border-[#1e293b]'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span className="hidden lg:inline">VALIDATION AND VERIFICATION SERVICES OFFERED</span>
            <span className="lg:hidden">SERVICES</span>
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedTab === 'services' ? (
            <motion.div 
              key="services"
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-[#e2e8f0]"
              variants={contentVariant}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e293b] mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {servicesContent.title}
              </motion.h2>
              
              <motion.p 
                className="text-[#475569] text-base sm:text-lg leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {servicesContent.intro}
              </motion.p>

              <motion.h3 
                className="text-xl sm:text-2xl font-bold text-[#1e293b] mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {servicesContent.listTitle}
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {servicesContent.activities.map((activity, idx) => (
                  <div key={idx} className="mb-6">
                    <h4 className="text-lg sm:text-xl font-bold text-[#1e293b] mb-4">
                      {activity.title}
                    </h4>
                    
                    <div className="space-y-4">
                      {activity.items.map((item, itemIdx) => (
                        <div key={itemIdx}>
                          <p className="text-[#1e293b] font-semibold mb-1">
                            {String.fromCharCode(97 + itemIdx)}){item.label}
                          </p>
                          <p className="text-[#475569] pl-5">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div 
              key={selectedTab}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-[#e2e8f0]"
              variants={contentVariant}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {(() => {
                const tab = tabsData.find(t => t.id === selectedTab);
                if (!tab) return null;
                const Icon = tab.icon;
                
                return (
                  <>
                    <div className="flex items-start gap-4 sm:gap-6 mb-6">
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#1e293b] flex-shrink-0" />
                      <motion.h2 
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e293b]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {tab.content.title}
                      </motion.h2>
                    </div>
                    
                    <motion.p 
                      className="text-[#475569] text-base sm:text-lg leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {tab.content.description}
                    </motion.p>
                  </>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    <Footer3/>
    </>
  );
}