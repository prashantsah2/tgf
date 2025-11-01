"use client";
import React from 'react';
import { Cloud, Wind, Package, Briefcase, Plus } from 'lucide-react';
import Footer3 from '@/components/Footer3/Footer3';
import Header3 from '@/components/Header4/Header4';
import ServiceMain from '@/components/ServiceMain/ServiceMain';
import ServiceNew1 from '@/components/ServiceNew1/ServiceNew1';

export default function OptionsInfographic() {

  const servicesData = {
    title: "CARBON",
    title2: "",
    services: [
      {
        id: 1,
        icon: "Cloud",
        title: "CARBON FOOTPRINT",
        description: "Our carbon services empower businesses to measure, manage, and reduce emissions through robust accounting...",
        details: {
          title: "CARBON FOOTPRINT",
          points: [
            "Our carbon services empower businesses to measure, manage, and reduce emissions through robust accounting, verification, and decarbonization strategies.",
            "We enable climate leadership and compliance while unlocking new value opportunities for your organization.",
            "Comprehensive carbon footprint assessment and management solutions tailored to your business needs."
          ]
        }
      },
      {
        id: 2,
        icon: "Wind",
        title: "DECARBONIZATION SOLUTIONS",
        description: "Strategic pathways to reduce carbon footprints and transition to net-zero operations...",
        details: {
          title: "DECARBONIZATION SOLUTIONS",
          points: [
            "Carbon Accounting Tools and Decarbonization Solutions enable precise emissions tracking and establish effective pathways to reduce carbon footprints.",
            "Develop comprehensive decarbonization roadmaps aligned with climate goals and industry best practices.",
            "Implementation support for transitioning to low-carbon operations and achieving net-zero targets."
          ]
        }
      },
      {
        id: 3,
        icon: "Package",
        title: "ISO 14064 VERIFICATION",
        description: "Greenhouse Gas Accounting and Verification ensuring accurate emissions measurement and reporting...",
        details: {
          title: "ISO 14064 VERIFICATION & ASSURANCE",
          points: [
            "Carbon Footprint, Product Carbon Footprint, Carbon Footprint Assurance, and Greenhouse Gas Accounting and Verification (ISO 14064) services available.",
            "GHG Verification Against Corporate Voluntary Schemes enable accurate emissions measurement, reporting, and validation.",
            "Third-party verification and assurance services ensuring credibility and compliance with international standards."
          ]
        }
      },
      {
        id: 4,
        icon: "Briefcase",
        title: "REGULATION GUIDANCE",
        description: "CDP Disclosures, SBTi Disclosures, and Regulation Guidance ensuring compliance with global frameworks...",
        details: {
          title: "ESG DISCLOSURES & REGULATION GUIDANCE",
          points: [
            "CDP Disclosures, SBTi Disclosures, and Regulation Guidance (CBAM) ensure compliance with global frameworks and enable transparent ESG communication.",
            "Expert support for carbon disclosure projects and sustainability reporting requirements.",
            "Guidance on emerging regulations including Carbon Border Adjustment Mechanism (CBAM) and other compliance frameworks."
          ]
        }
      },
      {
        id: 5,
        icon: "Plus",
        title: "ENERGY SERVICES",
        description: "Energy Audits & Optimization, Energy Savings Measurement & Verification, and renewable energy solutions...",
        details: {
          title: "ENERGY SERVICES & PCF",
          points: [
            "Energy Audits & Optimization, Energy Savings Measurement & Verification, Inspection & Monitoring Services for Renewable Energy Systems.",
            "Self-Consumption Feasibility studies enhance efficiency, reliability, and energy independence.",
            "Product Carbon Footprint (PCF) assessment enabling product-level emissions tracking and reduction strategies."
          ]
        }
      }
    ]
  };

  const iconComponents = {
    Cloud: Cloud,
    Wind: Wind,
    Package: Package,
    Briefcase: Briefcase,
    Plus: Plus
  };

  return (
    <>
      <Header3 />
      <div>
      {/*   <ServiceMain servicesData={servicesData} iconComponents={iconComponents} /> */}
       <ServiceNew1  />
      </div>
      <Footer3 />
    </>
  );
}