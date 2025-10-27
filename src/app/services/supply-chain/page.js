"use client";
import React from 'react';
import { FileCheck, Lock, Award, Settings } from 'lucide-react';
import Footer3 from '@/components/Footer3/Footer3';
import Header3 from '@/components/Header4/Header4';
import ServiceMain from '@/components/ServiceMain/ServiceMain';

export default function SustainableSupplyChain() {

  const servicesData = {
    title: "SUSTAINABLE SUPPLY CHAIN",
    title2: "",
    services: [
      {
        id: 1,
        icon: "FileCheck",
        title: "ASSESSMENTS",
        description: "Comprehensive life cycle and footprint assessments to evaluate environmental impacts across the value chain...",
        details: {
          title: "LIFE CYCLE & FOOTPRINT ASSESSMENTS",
          points: [
            "Life Cycle Assessment (LCA) and Water Footprint Certification are essential to evaluate environmental impacts and optimize resource use across the value chain.",
            "Conduct comprehensive environmental impact assessments for products, services, and operations throughout their entire lifecycle.",
            "Identify opportunities for resource efficiency improvements and environmental footprint reduction across supply chain operations."
          ]
        }
      },
      {
        id: 2,
        icon: "Lock",
        title: "SUPPLY CHAIN SUSTAINABILITY",
        description: "Build transparency, resilience, and responsibility through comprehensive sustainability programs...",
        details: {
          title: "SUSTAINABLE SUPPLY CHAIN PROGRAMS",
          points: [
            "Supply Chain Sustainability programs such as Book Chain Project, SEDEX, SMETA, FSC, and EUDR, along with Supply Chain Management and Supplier Audit Program Advisory, ensure responsible sourcing and resilient value chains.",
            "Implement robust supplier engagement and assessment frameworks to build transparency across the value chain.",
            "Develop long-term supplier partnerships that align with global sustainability goals and reduce supply chain risks."
          ]
        }
      },
      {
        id: 3,
        icon: "Award",
        title: "CERTIFICATIONS",
        description: "Strengthen compliance and sustainability credentials through internationally recognized standards...",
        details: {
          title: "CERTIFICATIONS & STANDARDS",
          points: [
            "Certifications including ISO 14001, SA8000, ISO 45001, ISO 27001, ISO 37001, ISCC and initiatives like Zero Waste to Landfill strengthen compliance and sustainability credentials.",
            "Achieve internationally recognized certifications that demonstrate environmental management excellence and social responsibility.",
            "Maintain compliance with evolving sustainability standards and regulatory requirements across different markets."
          ]
        }
      },
      {
        id: 4,
        icon: "Settings",
        title: "MANAGEMENT SYSTEMS ADVISORY",
        description: "Integrate sustainability and employee wellbeing into operations through comprehensive advisory services...",
        details: {
          title: "MANAGEMENT SYSTEMS & ADVISORY",
          points: [
            "Environmental Management Systems Advisory, Workplace Health and Safety Management Systems Advisory, and Wellbeing & Mental Health Assessments Advisory integrate sustainability and employee wellbeing into operations.",
            "Develop robust management systems that address environmental, health, safety, and social aspects of operations.",
            "Create workplace cultures that prioritize both sustainability performance and employee health and wellbeing outcomes."
          ]
        }
      }
    ]
  };

  const iconComponents = {
    FileCheck: FileCheck,
    Lock: Lock,
    Award: Award,
    Settings: Settings
  };

  return (
    <>
      <Header3 />
      <div>
        <ServiceMain servicesData={servicesData} iconComponents={iconComponents} />
      </div>
      <Footer3 />
    </>
  );
}