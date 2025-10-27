import React, { useState } from 'react';
import { Leaf, Award, TrendingUp, Shield, ArrowRight, Box } from 'lucide-react';
import { title } from 'process';

const ServicesList = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: Leaf,
      title: "CLIMATE CHANGE",
      description: `Our solutions accelerate the transition to a low-carbon future, reducing emissions across the
value chain while unlocking opportunities for climate resilience and sustainable growth.
`,
      color: "from-emerald-700 to-emerald-900"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "SUSTAINABLE BUSINESS PRACTICES",
      description: "By promoting efforts to reduce greenhouse gas emissions, carbon credits aid in emissions offsets. Our service makes it easier to buy and keep track of these credits, allowing you to assist international sustainability programs and achieve environmental goals.",
      color: "from-slate-100 to-slate-200"
    },
    {
      id: 3,
      icon: Shield,
      title: "CARBON",
      description: `Our carbon services empower businesses to measure, manage, and reduce emissions through robust accounting, verification,
and decarbonization strategies, enabling climate leadership and compliance while unlocking new value opportunities.
`,
      color: "from-slate-100 to-slate-200"
    },
    {
      id: 4,
      icon: Award,
      title: "SUSTAINABLE SUPPLY CHAIN",
      description: `Our sustainable supply chain solutions help businesses build transparency, resilience, and responsibility across their value chains by
embedding ESG principles, reducing risks, and driving long-term supplier partnerships that align with global sustainability goals.
`,
      color: "from-slate-100 to-slate-200"
    },{
      id:5,
      icon:Box,
      title:'ADDITIONAL SERVICES',
      description:''
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1391px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-xl md:text-3xl text-[#fff] bg-gradient-to-r font-outfit font-bold bg-clip-text text-transparent from-blue-500 to-teal-700  mb-4">
            Our Services
          </span>
          <p className="text-md text-gray-600 max-w-3xl mx-auto mt-2 ">
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

    
      </div>
    </div>
  );
};

export default ServicesList;