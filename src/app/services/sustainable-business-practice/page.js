"use client";
import React from 'react';
import { Brain, Lightbulb, MousePointerClick, Mountain, Info, FileText, ShieldAlert, Briefcase, Database, AlertTriangle, Sprout, BarChart3, ShieldCheck } from 'lucide-react';
import Footer3 from '@/components/Footer3/Footer3';
import Header3 from '@/components/Header4/Header4';
import ServiceMain from '@/components/ServiceMain/ServiceMain';

export default function OptionsInfographic() {

const servicesData = {
  title: `SUSTAINABLE
BUSINESS 
`,
  title2: `PRACTICES`,
  description: "Our solutions embed sustainability into core business strategies, driving resource efficiency, ethical growth, and long-term value creation while strengthening stakeholder trust.",
  
  services: [
    {
      id: 1,
      icon: "FileText",
      title: "SUSTAINABILITY REPORTING",
      description: "End-to-end Sustainability Reporting across standards such as GRI, IR, SASB, TNFD and compliance frameworks like BRSR and CSRD ensures transparency and alignment with global benchmarks.",
      details: {
        title: "SUSTAINABILITY REPORTING",
        points: [
          "End-to-end Sustainability Reporting across standards such as GRI, IR, SASB, TNFD",
          "Compliance frameworks like BRSR and CSRD ensures transparency and",
          "alignment with global benchmarks."
        ]
      }
    },
    {
      id: 2,
      icon: "ShieldCheck",
      title: "ESG ASSURANCE, CONSULTING AND DUE DILIGENCE",
      description: "ESG assurance with limited and reasonable checks (AA1000AS Type-1 & Type-2), combined with expert consulting and due diligence, builds stakeholder confidence.",
      details: {
        title: "ESG ASSURANCE, CONSULTING AND DUE DILIGENCE",
        points: [
          "ESG assurance with limited and reasonable checks (AA1000AS Type-1 & Type-2),",
          "combined with expert consulting and due diligence, builds stakeholder",
          "confidence."
        ]
      }
    },
    {
      id: 3,
      icon: "BarChart3",
      title: "ESG DISCLOSURES",
      description: "Improved ESG ratings and disclosures are achieved through platforms such as EcoVadis, S&P-CSA, MSCI, BSI, Responsible Care, UNGC, TCFD, and TNFD consultancy.",
      details: {
        title: "ESG DISCLOSURES",
        points: [
          "Improved ESG ratings and disclosures are achieved through platforms such as",
          "EcoVadis, S&P-CSA, MSCI, BSI, Responsible Care, UNGC, TCFD, and TNFD",
          "consultancy."
        ]
      }
    },
    {
      id: 4,
      icon: "Database",
      title: "ESG DATA MANAGEMENT TOOL",
      description: "EnScope, an in-house ESG data management tool, is being developed to streamline ESG compliance, reporting and disclosure processes.",
      details: {
        title: "ESG DATA MANAGEMENT TOOL",
        points: [
          "EnScope, an in-house ESG data management tool, is being developed to",
          "streamline ESG compliance, reporting and disclosure processes."
        ]
      }
    },
    {
      id: 5,
      icon: "AlertTriangle",
      title: "RISK ASSESSMENT",
      description: "Risk assessments identify ESG, climate, and operational risks, enabling proactive mitigation strategies.",
      details: {
        title: "RISK ASSESSMENT",
        points: [
          "Risk assessments identify ESG, climate, and operational risks, enabling proactive",
          "mitigation strategies."
        ]
      }
    },
    {
      id: 6,
      icon: "Sprout",
      title: "SUSTAINABILITY PROJECTS",
      description: "Sustainability projects in carbon credits, plastic credits, water credits, renewable energy certificates (RECs/IRECs), carbon offsets, and carbon neutrality solutions support measurable climate action and impact.",
      details: {
        title: "SUSTAINABILITY PROJECTS",
        points: [
          "Sustainability projects in carbon credits, plastic credits, water credits, renewable",
          "energy certificates (RECs/IRECs), carbon offsets, and carbon neutrality solutions",
          "support measurable climate action and impact."
        ]
      }
    }
  ],


}


const iconComponents = {
  FileText: FileText,
  ShieldCheck: ShieldCheck,
  BarChart3: BarChart3,
  Database: Database,
  AlertTriangle: AlertTriangle,
  Sprout:Sprout
};
  return (
      <><Header3 />
      <div>
        <ServiceMain servicesData={servicesData} iconComponents={iconComponents} />
      </div>
       <Footer3/>
        
        </>
  );
}