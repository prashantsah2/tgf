import React, { useState } from 'react';
import { Leaf, Award, TrendingUp, Shield, ArrowRight } from 'lucide-react';

const ServicesList = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: Leaf,
      title: "Carbon Footprint",
      description: "Our program helps organizations and people make environmentally conscious decisions by calculating and reducing carbon footprints. We offer tailored evaluations and practical advice to successfully reduce environmental impact.",
      color: "from-emerald-700 to-emerald-900"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Carbon Credit",
      description: "By promoting efforts to reduce greenhouse gas emissions, carbon credits aid in emissions offsets. Our service makes it easier to buy and keep track of these credits, allowing you to assist international sustainability programs and achieve environmental goals.",
      color: "from-slate-100 to-slate-200"
    },
    {
      id: 3,
      icon: Shield,
      title: "Sustainability (ESG)",
      description: "In order to improve sustainability, ensure social responsibility, ethical governance, and long-term stewardship—thus promoting resilience and good effect in a changing world—we assist firms in integrating ESG (Environmental, Social, and Governance) techniques.",
      color: "from-slate-100 to-slate-200"
    },
    {
      id: 4,
      icon: Award,
      title: "Certifications",
      description: "We offer ESG and sustainability certifications to support businesses in rigorously validating their adherence to global standards, improving their reputation, gaining the trust of stakeholders, and improving the environment and community.",
      color: "from-slate-100 to-slate-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1391px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering organizations to achieve sustainability goals through comprehensive environmental solutions and expert guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHighlighted = index === 5;
            
            return (
              <div
                key={service.id}
                className={`relative group transition-all duration-300 border-[1px] rounded-md border-solid border-[#0e763b] ${
                  hoveredCard === service.id ? 'scale-101' : 'scale-100'
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`h-full rounded-xl overflow-hidden ${
                    isHighlighted
                      ? 'bg-gradient-to-br from-emerald-700 to-emerald-900 text-white'
                      : 'bg-white text-gray-900'
                  } transition-shadow duration-300 ${
                    hoveredCard === service.id ? '' : ''
                  }`}
                >
                  <div className="p-8">
                    {/* Icon */}
                    <div className={`mb-6 ${isHighlighted ? 'text-white' : 'text-emerald-700'}`}>
                      <Icon size={48} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <h3 className={`text-2xl font-semibold mb-4 ${
                      isHighlighted ? 'text-white' : 'text-gray-900'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-6 ${
                      isHighlighted ? 'text-emerald-50' : 'text-gray-600'
                    }`}>
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <button
                      className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-md font-medium transition-all duration-300 ${
                        isHighlighted
                          ? 'bg-white text-emerald-800 hover:bg-emerald-50'
                          : 'bg-emerald-700 text-white hover:bg-emerald-800'
                      } ${hoveredCard === service.id ? 'gap-3' : 'gap-2'}`}
                    >
                      Know More
                      <ArrowRight size={18} className="transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-emerald-700 text-white rounded-lg font-semibold text-lg hover:bg-emerald-800 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Start Your Sustainability Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;