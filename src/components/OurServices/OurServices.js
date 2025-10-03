import React from 'react';

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Carbon",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Comprehensive carbon management solutions"
    },
    {
      id: 2,
      title: "Carbon Credit",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Strategic carbon credit consulting and trading"
    },
    {
      id: 3,
      title: "Sustainability",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "End-to-end sustainability transformation"
    },
    {
      id: 4,
      title: "Certifications",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Professional certification and compliance services"
    },
    {
      id: 5,
      title: "Other Services",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Additional specialized consulting services"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-6 tracking-wide">
            OUR SERVICES
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Taking Your Business to the Next Level
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
           {` Our goal is to embed sustainable climate action into corporate activity. Effectiveness, transparency and 
            credibility are key. We will work with you to design solutions that are suitable for you as a company. It's 
            up to you whether you adopt the entire range of measures – from long-term climate action strategy to 
            offsetting of your total emissions – or simply select individual building blocks, such as carbon footprint 
            assessment or consultancy around carbon emission reduction.`}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-100 p-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-4 text-center">
                <h4 className="text-lg text-left font-bold text-gray-900 group-hover:text-green-500 transition-colors duration-200">
                  {service.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Badges - Fixed Position */}
      
    </section>
  );
};

export default OurServices;