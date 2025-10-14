"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HandCoins, FileSearch, PackageSearch, Award, Users, BookOpen } from 'lucide-react';
import Header3 from '@/components/Header4/Header4';
import Footer3 from '@/components/Footer3/Footer3';

const iconMap = {
  HandCoins,
  FileSearch,
  PackageSearch,
  Award,
  Users,
  BookOpen
};

export default function PageMain({
  brandName = "ENEN",
  brandSubtext = "GREEN",
  mainIcon = "PackageSearch",
  title = "SUSTAINABLE SUPPLY CHAIN",
  subtitle = "Our sustainable supply chain solutions help businesses build transparency, resilience, and responsibility across their value chains by embedding ESG principles, reducing risks, and driving long-term supplier partnerships that align with global sustainability goals.",
  featuredTitle = "FEATURED SERVICES",
  featuredServices = [
    { icon: "ClipboardList", title: "ASSESSMENTS" },
    { icon: "Leaf", title: "SUPPLY CHAIN SUSTAINABILITY" },
    { icon: "CheckCircle", title: "CERTIFICATIONS" },
    { icon: "Users", title: "MANAGEMENT SYSTEMS ADVISORY" }
  ],
  decorativeIcon = "BookOpen",
  serviceDetails = [
    {
      title: "LIFE CYCLE & FOOTPRINT ASSESSMENTS",
      content: "Life Cycle Assessment (LCA) and Water Footprint Certification are essential to evaluate environmental impacts and optimize resource use across the value chain.",
      highlights: ["Water Footprint Certification"]
    },
    {
      title: "SUSTAINABLE SUPPLY CHAIN PROGRAMS",
      content: "Supply Chain Sustainability programs such as Book Chain Project, SEDEX, SMETA, FSC, and EUDR, along with Supply Chain Management and Supplier Audit Program Advisory, ensure responsible sourcing and resilient value chains.",
      highlights: ["Book Chain Project, SEDEX, SMETA, FSC, and EUDR", "Supply Chain Management", "Supplier Audit Program Advisory"]
    },
    {
      title: "CERTIFICATIONS & STANDARDS",
      content: "Certifications including ISO 14001, SA8000, ISO 45001, ISO 27001, ISO 37001, ISCC and initiatives like Zero Waste to Landfill strengthen compliance and sustainability credentials.",
      highlights: ["ISO 14001, SA8000, ISO 45001, ISO 27001, ISO 37001, ISCC", "Zero Waste to Landfill"]
    },
    {
      title: "MANAGEMENT SYSTEMS & ADVISORY",
      content: "Environmental Management Systems Advisory, Workplace Health and Safety Management Systems Advisory, and Wellbeing & Mental Health Assessments Advisory integrate sustainability and employee wellbeing into operations.",
      highlights: ["Environmental Management Systems Advisory", "Workplace Health and Safety Management Systems Advisory", "Wellbeing & Mental Health Assessments Advisory"]
    }
  ],
  primaryColor = "purple",
  secondaryColor = "green",
  backgroundColor = "from-slate-50 via-purple-50 to-slate-100"
}) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const MainIcon = iconMap[mainIcon];
  const DecorativeIcon = iconMap[decorativeIcon];

  const highlightText = (text, highlights) => {
    if (!highlights || highlights.length === 0) return text;
    
    let result = text;
    highlights.forEach(highlight => {
      const regex = new RegExp(`(${highlight})`, 'gi');
      result = result.replace(regex, '<span class="font-semibold">$1</span>');
    });
    
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <>
    <Header3/>
    <div className={`min-h-screen bg-gradient-to-br ${backgroundColor} relative overflow-hidden`}>
      {/* Background Decorative Elements */}
      <div className={`absolute top-0 right-0 w-96 h-96 bg-${primaryColor}-400/10 rounded-full blur-3xl`}></div>
      <div className={`absolute bottom-0 left-0 w-96 h-96 bg-${secondaryColor}-400/10 rounded-full blur-3xl`}></div>
      
     

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Title Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-${primaryColor}-500`}>
              <MainIcon className={`w-8 h-8 text-${primaryColor}-600`} />
            </div>
            <div>
              <h1 className={`text-3xl font-bold text-${primaryColor}-600 mb-3`}>{title}</h1>
              <p className="text-gray-600 text-sm leading-relaxed max-w-6xl">
                {subtitle}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Featured Services */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-xl font-bold text-${primaryColor}-700 mb-6`}
            >
              {featuredTitle}
            </motion.h2>

            <div className="grid grid-cols-2 gap-6">
              {featuredServices.map((service, index) => {
                const ServiceIcon = iconMap[service.icon];
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-5 text-center border border-gray-200"
                  >
                    <div className={`bg-gradient-to-br from-${primaryColor}-500 to-${secondaryColor}-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <ServiceIcon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 italic text-xs">{service.title}</h3>
                  </motion.div>
                );
              })}
            </div>

            {/* Decorative Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 relative"
            >
              <div className={`w-full h-48 bg-gradient-to-r from-slate-800 to-${primaryColor}-900 rounded-xl overflow-hidden border border-gray-300`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <DecorativeIcon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Service Details */}
          <div className="space-y-6">
            {serviceDetails.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200"
              >
                <h2 className={`text-xl font-bold text-${secondaryColor}-600 mb-2`}>{service.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlightText(service.content, service.highlights)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer3/>
    </>
  );
}