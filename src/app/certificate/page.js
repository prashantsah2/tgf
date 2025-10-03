"use client"
import React from "react";


import{ useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, FileText, Shield, Recycle, TreePine, Building2, Zap } from 'lucide-react';
import Header4 from "@/components/Header4/Header4";
import Footer3 from "@/components/Footer3/Footer3";





export default function Page(){

const [hoveredCard, setHoveredCard] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Carbon Footprint Certification",
      subtitle: "Measure and reduce your carbon impact",
      description: "Complete carbon assessment and reduction plan for your organization",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-600",
      bgColor: "bg-[#f2f2f2]",
      textColor: "text-[#222]"
    },
    {
      id: 2,
      title: "ISO 14001 Environmental Management",
      subtitle: "International environmental standards",
      description: "Comprehensive environmental management system certification",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      id: 3,
      title: "Green Building Certification",
      subtitle: "Sustainable construction standards",
      description: "LEED and BREEAM compliant building sustainability assessment",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-green-400 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      id: 4,
      title: "Renewable Energy Certificate",
      subtitle: "Clean energy transition verification",
      description: "Document your commitment to renewable energy sources",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700"
    },
    {
      id: 5,
      title: "Waste Management Certification",
      subtitle: "Circular economy compliance",
      description: "Zero waste and recycling program certification",
      icon: <Recycle className="w-8 h-8" />,
      color: "from-purple-400 to-indigo-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    },
    {
      id: 6,
      title: "Biodiversity Protection Certificate",
      subtitle: "Ecosystem preservation standards",
      description: "Protect and restore natural habitats in your operations",
      icon: <TreePine className="w-8 h-8" />,
      color: "from-green-500 to-emerald-700",
      bgColor: "bg-green-100",
      textColor: "text-green-800"
    },
    {
      id: 7,
      title: "Sustainability Reporting Certificate",
      subtitle: "ESG compliance and transparency",
      description: "Comprehensive sustainability reporting and disclosure certification",
      icon: <FileText className="w-8 h-8" />,
      color: "from-slate-400 to-slate-600",
      bgColor: "bg-slate-50",
      textColor: "text-slate-700"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };


    return(
        <div>


<Header4 heading="Carbon Footprint" text="Understand and reduce your carbon footprint with our expert solutions."/>


    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6 pt-[121px] pb-[121px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <motion.div
              className="p-3 bg-green-100 rounded-full"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Leaf className="w-8 h-8 text-green-600" />
            </motion.div>
            <h1 className="text-4xl font-bold text-slate-800">Environmental Certificates</h1>
          </div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Comprehensive environmental protection and carbon management certifications for your company.
            Build a sustainable future with verified credentials.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className={`relative overflow-hidden rounded-2xl ${cert.bgColor} border border-white/50  backdrop-blur-sm`}
              onHoverStart={() => setHoveredCard(cert.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Gradient Background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0`}
                animate={{ 
                  opacity: hoveredCard === cert.id ? 0.1 : 0 
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className={`p-3 rounded-xl bg-white/80 ${cert.textColor} `}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <motion.div
                    className="px-3 py-1 bg-white/60 rounded-full text-xs font-medium text-slate-600"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    Certificate
                  </motion.div>
                </div>

                {/* Title and Subtitle */}
                <div className="flex-1">
                  <h3 className={`text-xl font-bold ${cert.textColor} mb-2 leading-tight`}>
                    {cert.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-medium mb-3">
                    {cert.subtitle}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Action Button */}
                <motion.button
                  className={`mt-6 w-full py-3 px-4 bg-gradient-to-r ${cert.color} text-white font-semibold rounded-xl`}
                
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="flex items-center justify-center gap-2"
                    whileHover={{ x: 2 }}
                  >
                    Get Certified
                    <Award className="w-4 h-4" />
                  </motion.span>
                </motion.button>
              </div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full"
                animate={{
                  scale: hoveredCard === cert.id ? 1.2 : 1,
                  opacity: hoveredCard === cert.id ? 0.3 : 0.1
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute -bottom-2 -left-2 w-16 h-16 bg-white/5 rounded-full"
                animate={{
                  scale: hoveredCard === cert.id ? 1.3 : 1,
                  opacity: hoveredCard === cert.id ? 0.2 : 0.05
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-16 py-8 border-t border-slate-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-slate-500 text-sm">
            © 2025 Environmental Certification Hub. Building a sustainable future, one certificate at a time.
          </p>
        </motion.div>
      </div>
    </div>
<Footer3/>
        </div>
    )
}