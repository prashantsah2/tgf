import React from 'react';
import { Brain, Lightbulb, MousePointerClick, Mountain, Info } from 'lucide-react';
import Footer3 from '@/components/Footer3/Footer3';
import Header3 from '@/components/Header4/Header4';
import ServiceMain from '@/components/ServiceMain/ServiceMain';

export default function OptionsInfographic() {

const servicesData = {
  title: "CARBON",
  title2: "FOOTPRINT",
  services: [

    {
      id: 1,
      icon: "Cloud",
      title: "CLIMATE CHANGE",
      description: "At the core of our Sustainability Solutions are FIVE pillars designed to provide ............",
      details: {
        title: "CLIMATE CHANGE",
        points: [
          "At the core of our Sustainability Solutions are FIVE pillars designed to provide One Stop Solution for climate action and mitigation strategies.",
          "Within each pillar, services are structured to resolve key climate issues across sectors, adapting to the maturity of the organization.",
          "Companies may engage us for specific services to address focused climate priorities. We provide an integrated framework that delivers comprehensive climate solutions and long-term support throughout their journey."
        ]
      }
    },
    {
      id: 2,
      icon: "Briefcase",
      title: "SUSTAINABLE BUSINESS PRACTICES",
      description: "At the core of our Sustainability Solutions are FIVE pillars............",
      details: {
        title: "SUSTAINABLE BUSINESS PRACTICES",
        points: [
          "At the core of our Sustainability Solutions are FIVE pillars designed to transform business operations for sustainability.",
          "Within each pillar, services are structured to integrate sustainable practices across all business functions.",
          "Companies may engage us for specific services to address focused business sustainability goals. We provide frameworks that deliver operational excellence and long-term value creation."
        ]
      }
    },
    {
      id: 3,
      icon: "Package",
      title: "SUSTAINABLE SUPPLY CHAIN",
      description: "At the core of our Sustainability Solutions are FIVE pillars designed to provide ............",
      details: {
        title: "SUSTAINABLE SUPPLY CHAIN",
        points: [
          "At the core of our Sustainability Solutions are FIVE pillars designed to provide One Stop Solution for more sustainable business practices.",
          "Within each pillar, services are structured to resolve key issues across the value chain, adapting to the maturity of the organization.",
          "Companies may engage us for specific services to address focused environmental, social, or governance priorities within one or more pillars. For organizations seeking a broader approach, we provide an integrated framework that delivers a holistic sustainability strategy and long-term support throughout their journey."
        ]
      }
    },
    {
      id: 4,
      icon: "Plus",
      title: "ADDITIONAL SERVICES",
      description: "At the core of our Sustainability Solutions are FIVE pillars designed to provide ............",
      details: {
        title: "ADDITIONAL SERVICES",
        points: [
          "At the core of our Sustainability Solutions are FIVE pillars designed to provide comprehensive support services.",
          "Within each pillar, services are structured to address unique organizational needs and emerging sustainability challenges.",
          "Companies may engage us for specialized services tailored to their specific requirements. We provide flexible solutions that complement core sustainability initiatives."
        ]
      }
    },
    {
      id: 5,
      icon: "Wind",
      title: "CARBON",
      description: "At the core of our Sustainability Solutions are FIVE pillars designed to provide ............",
      details: {
        title: "CARBON",
        points: [
          "At the core of our Sustainability Solutions are FIVE pillars designed to provide complete carbon management solutions.",
          "Within each pillar, services are structured to measure, reduce, and offset carbon emissions across operations.",
          "Companies may engage us for carbon-focused services including footprint assessment, reduction strategies, and offset programs. We provide end-to-end carbon management support."
        ]
      }
    }
  ]
};


  return (
      <><Header3 />
      <div>
        <ServiceMain servicesData={servicesData} />
      </div>
       <Footer3/>
        
        </>
  );
}