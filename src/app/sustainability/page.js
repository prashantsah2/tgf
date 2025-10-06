'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { TrendingUp, BarChart3, Users, FileText, Award, Target, CheckSquare, Leaf } from 'lucide-react';
import Header4 from '@/components/Header4/Header4';
import Footer3 from '@/components/Footer3/Footer3';

const servicesData = [
  {
    id: 'maturity',
    name: 'ESG Maturity Assessment',
    icon: TrendingUp,
    color: 'bg-[#334155]',
    hoverColor: 'hover:bg-[#475569]',
    content: {
      title: 'ESG Maturity Assessment',
      description: "Our ESG (Environmental, Social, and Governance) maturity assessment service involves analyzing an organization's existing ESG status and performance. Through comprehensive evaluation and benchmarking against industry standards, we assess the organization's current sustainability practices, policies, and outcomes. This process identifies strengths, weaknesses, and areas for improvement across ESG pillars. Our tailored approach considers the organization's unique goals and context, providing actionable insights and recommendations to enhance ESG performance and drive long-term value creation."
    }
  },
  {
    id: 'gap',
    name: 'ESG Gap Analysis',
    icon: BarChart3,
    color: 'bg-[#10b981]',
    hoverColor: 'hover:bg-[#059669]',
    content: {
      title: 'ESG Gap Analysis',
      description: "Our ESG Gap Analysis service identifies the discrepancies between your current ESG performance and desired targets or industry benchmarks. We conduct thorough assessments of your environmental impact, social responsibility initiatives, and governance structures to pinpoint specific areas requiring improvement. This analysis provides a clear roadmap for closing gaps, prioritizing actions, and aligning your organization with best practices and stakeholder expectations."
    }
  },
  {
    id: 'benchmarking',
    name: 'ESG Peer Benchmarking',
    icon: Users,
    color: 'bg-[#10b981]',
    hoverColor: 'hover:bg-[#059669]',
    content: {
      title: 'ESG Peer Benchmarking',
      description: "Compare your ESG performance against industry peers and leaders with our comprehensive benchmarking service. We analyze key performance indicators across environmental, social, and governance dimensions, providing insights into your competitive position. Our benchmarking reports highlight areas of strength and opportunities for improvement, enabling you to set realistic targets and adopt best practices from top performers in your sector."
    }
  },
  {
    id: 'materiality',
    name: 'ESG Materiality Assessment',
    icon: CheckSquare,
    color: 'bg-[#10b981]',
    hoverColor: 'hover:bg-[#059669]',
    content: {
      title: 'ESG Materiality Assessment',
      description: "Identify and prioritize the ESG issues that matter most to your business and stakeholders. Our materiality assessment process engages key stakeholders, analyzes industry trends, and evaluates business impact to determine which environmental, social, and governance topics are most significant. This assessment forms the foundation for focused ESG strategy development and transparent reporting that addresses stakeholder concerns."
    }
  },
  {
    id: 'reporting',
    name: 'Sustainability (ESG) Reporting',
    icon: FileText,
    color: 'bg-[#10b981]',
    hoverColor: 'hover:bg-[#059669]',
    content: {
      title: 'Sustainability (ESG) Reporting',
      description: "Enhance transparency and stakeholder trust with our comprehensive sustainability reporting services. We help you develop ESG reports aligned with global frameworks including GRI, SASB, TCFD, and CDP. Our team ensures accurate data collection, meaningful disclosure, and compelling narrative that demonstrates your commitment to sustainable business practices and responsible corporate citizenship."
    }
  },
  {
    id: 'brsr',
    name: 'BRSR Reporting',
    icon: Award,
    color: 'bg-[#10b981]',
    hoverColor: 'hover:bg-[#059669]',
    content: {
      title: 'BRSR Reporting',
      description: "Navigate India's Business Responsibility and Sustainability Reporting requirements with our expert guidance. We assist organizations in preparing comprehensive BRSR reports that comply with SEBI mandates, covering all nine principles of the National Guidelines on Responsible Business Conduct. Our service ensures accurate disclosure of ESG performance metrics and qualitative information for regulatory compliance and stakeholder communication."
    }
  },
  {
    id: 'ecovadis',
    name: 'ESG Rating (EcoVadis)',
    icon: Award,
    color: 'bg-[#10b981]',
    hoverColor: 'hover:bg-[#059669]',
    content: {
      title: 'ESG Rating (EcoVadis)',
      description: "Improve your EcoVadis sustainability rating with our specialized support services. We help you understand EcoVadis assessment criteria, prepare comprehensive documentation, and implement improvements across environment, labor practices, ethics, and sustainable procurement themes. Our expertise ensures you achieve and maintain strong ratings that enhance supplier relationships and market competitiveness."
    }
  },
  {
    id: 'cdp',
    name: 'CDP Reporting',
    icon: Leaf,
    color: 'bg-[#10b981]',
    hoverColor: 'hover:bg-[#059669]',
    content: {
      title: 'CDP Reporting',
      description: "Demonstrate climate leadership through CDP (Carbon Disclosure Project) reporting. We guide organizations through CDP's comprehensive questionnaires on climate change, water security, and forests. Our service includes carbon footprint calculation, climate risk assessment, target setting support, and strategic response development to achieve high disclosure scores and recognition from investors and customers."
    }
  },
  {
    id: 'sbti-target',
    name: 'SBTi Target Submission',
    icon: Target,
    color: 'bg-[#10b981]',
    hoverColor: 'hover:bg-[#059669]',
    content: {
      title: 'SBTi Target Submission',
      description: "Set science-based emissions reduction targets aligned with limiting global warming to 1.5°C. Our SBTi (Science Based Targets initiative) service includes baseline emissions calculation, target development across scopes 1, 2, and 3, validation support, and submission preparation. We help you commit to ambitious yet achievable targets that demonstrate climate leadership and meet stakeholder expectations."
    }
  },
  {
    id: 'sbti-feasibility',
    name: 'SBTi Feasibility Assessment',
    icon: CheckSquare,
    color: 'bg-[#10b981]',
    hoverColor: 'hover:bg-[#059669]',
    content: {
      title: 'SBTi Feasibility Assessment',
      description: "Evaluate the feasibility of setting science-based targets for your organization. Our assessment analyzes your current emissions profile, identifies reduction opportunities, assesses technical and financial implications, and provides recommendations on target ambition levels. This comprehensive evaluation ensures you make informed decisions about SBTi commitment and develop realistic implementation roadmaps."
    }
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
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

export default function ESGServices() {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <>
    <Header4/>
    <div className="min-h-screen bg-gradient-to-br from-[#f1f5f9] via-[#e0f2fe] to-[#f0fdf4] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-8"
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
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedService(service)}
                className={`${service.color} ${service.hoverColor} text-white px-3 py-4 rounded-2xl font-semibold transition-all duration-300 text-sm text-center ${
                  isSelected ? 'ring-4 ring-white ring-offset-2 ring-offset-transparent' : ''
                }`}
              >
                <Icon className="w-5 h-5 mx-auto mb-2" />
                <span className="block leading-tight">{service.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedService.id}
            className="bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-3xl p-8 sm:p-10 lg:p-14 relative overflow-hidden"
            variants={contentVariant}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981] rounded-full opacity-5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3b82f6] rounded-full opacity-5 blur-3xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                {(() => {
                  const Icon = selectedService.icon;
                  return (
                    <motion.div
                      className="p-4 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl"
                      initial={{ rotate: -10, scale: 0.9 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </motion.div>
                  );
                })()}
                
                <motion.h2 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {selectedService.content.title}
                </motion.h2>
              </div>
              
              <motion.div
                className="h-1 w-24 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-full mb-6"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              ></motion.div>
              
              <motion.p 
                className="text-[#cbd5e1] text-base sm:text-lg lg:text-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {selectedService.content.description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    <Footer3/>
    </>
  );
}