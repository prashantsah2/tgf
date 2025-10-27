"use client";
import React from 'react';
import { Calculator, Recycle, Award, Users, Zap, ShieldCheck, Lightbulb, GraduationCap } from 'lucide-react';
import Footer3 from '@/components/Footer3/Footer3';
import Header3 from '@/components/Header4/Header4';
import ServiceMain from '@/components/ServiceMain/ServiceMain';

export default function AdditionalServices() {

  const servicesData = {
    title: "ADDITIONAL SERVICES",
    title2: "",
    services: [
      {
        id: 1,
        icon: "Calculator",
        title: "FOOTPRINT ACCOUNTING",
        description: "Comprehensive footprint measurement and accounting services to track and manage environmental impacts...",
        details: {
          title: "FOOTPRINT ACCOUNTING",
          points: [
            "Comprehensive footprint accounting services that measure and track environmental impacts across operations and value chains.",
            "Advanced methodologies for calculating carbon, water, and ecological footprints to inform sustainability strategies.",
            "Detailed reporting and analysis to identify reduction opportunities and monitor progress toward sustainability goals."
          ]
        }
      },
      {
        id: 2,
        icon: "Recycle",
        title: "SUPPLY CHAIN SUSTAINABILITY",
        description: "Build resilient and responsible supply chains through comprehensive sustainability programs...",
        details: {
          title: "SUPPLY CHAIN SUSTAINABILITY",
          points: [
            "Comprehensive supply chain sustainability solutions that embed ESG principles and reduce risks across the value chain.",
            "Supplier engagement and assessment frameworks to build transparency and drive responsible sourcing practices.",
            "Long-term partnership development that aligns with global sustainability goals and stakeholder expectations."
          ]
        }
      },
      {
        id: 3,
        icon: "Award",
        title: "CERTIFICATIONS",
        description: "Achieve internationally recognized certifications to strengthen credibility and demonstrate compliance...",
        details: {
          title: "CERTIFICATIONS",
          points: [
            "Support for achieving key sustainability certifications that strengthen credibility and demonstrate commitment to excellence.",
            "Guidance through certification processes including documentation, implementation, and audit preparation.",
            "Ongoing compliance support to maintain certifications and adapt to evolving standards and requirements."
          ]
        }
      },
      {
        id: 4,
        icon: "Users",
        title: "MANAGEMENT SYSTEMS ADVISORY",
        description: "Strategic guidance to integrate sustainability into core business practices and operations...",
        details: {
          title: "MANAGEMENT SYSTEMS ADVISORY",
          points: [
            "Strategic guidance is essential to embed sustainability into core business practices. We provide CSR Consultation and CBAM Advisory to align corporate initiatives with evolving regulatory and stakeholder expectations.",
            "Develop robust environmental, social, and governance management systems tailored to organizational needs.",
            "Integrate sustainability considerations into decision-making processes and operational frameworks."
          ]
        }
      },
      {
        id: 5,
        icon: "Zap",
        title: "ENERGY & INFRASTRUCTURE",
        description: "Robust infrastructure solutions to improve efficiency and promote sustainable practices...",
        details: {
          title: "ENERGY & INFRASTRUCTURE",
          points: [
            "Most organizations require robust infrastructure solutions that improve efficiency and compliance. These include Energy Audit Certification to measure and enhance energy use.",
            "Green Building Services (LEED/IGBC Certification) to promote sustainable construction practices and operational efficiency.",
            "Comprehensive energy management strategies that reduce costs, improve performance, and support decarbonization goals."
          ]
        }
      },
      {
        id: 6,
        icon: "ShieldCheck",
        title: "COMPLIANCE & CERTIFICATION",
        description: "Ensure compliance with global standards through comprehensive certification services...",
        details: {
          title: "COMPLIANCE & CERTIFICATION",
          points: [
            "Ensuring compliance with global standards is critical for sustainable growth. Our services cover Food Safety & Compliance (EFSA FCM, US FDA), FSC & EUDR Compliance, and Water Footprint Certification.",
            "Navigate complex regulatory landscapes and maintain compliance with evolving international standards.",
            "Build credibility and market access through internationally recognized certifications and compliance frameworks."
          ]
        }
      },
      {
        id: 7,
        icon: "Lightbulb",
        title: "ADVISORY",
        description: "Strategic CSR Consultation and CBAM Advisory to align with regulatory and stakeholder expectations...",
        details: {
          title: "ADVISORY SERVICES",
          points: [
            "Strategic guidance is essential to embed sustainability into core business practices. We provide CSR Consultation and CBAM Advisory.",
            "Align corporate initiatives with evolving regulatory requirements and stakeholder expectations through expert guidance.",
            "Develop proactive strategies to address emerging sustainability challenges and capitalize on opportunities."
          ]
        }
      },
      {
        id: 8,
        icon: "GraduationCap",
        title: "TRAINING & CAPACITY BUILDING",
        description: "Build organizational knowledge and capability for long-term sustainability impact...",
        details: {
          title: "TRAINING & CAPACITY BUILDING",
          points: [
            "Building organizational knowledge and capability is key to long-term impact. Our Training & Capacity Building programs equip teams with the knowledge and tools needed to lead on sustainability and compliance.",
            "Customized training programs covering sustainability principles, compliance requirements, and implementation best practices.",
            "Capacity building initiatives that create internal champions and drive organizational culture change toward sustainability."
          ]
        }
      }
    ]
  };

  const iconComponents = {
    Calculator: Calculator,
    Recycle: Recycle,
    Award: Award,
    Users: Users,
    Zap: Zap,
    ShieldCheck: ShieldCheck,
    Lightbulb: Lightbulb,
    GraduationCap: GraduationCap
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