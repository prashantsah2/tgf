import React from 'react';
import { Leaf, Cloud, BarChart3, Zap, FileText, Users } from 'lucide-react';
import Header3 from '@/components/Header4/Header4';
import Footer3 from '@/components/Footer3/Footer3';

export default function CarbonServices() {
  const services = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Carbon Footprint",
      description: "Measure and analyze your complete carbon footprint across all operations"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Decarbonization Solutions",
      description: "Develop effective pathways to reduce and eliminate carbon emissions"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Carbon Accounting & Tools",
      description: "Precise emissions tracking and accounting solutions with ISO 14064 compliance"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy Services",
      description: "Energy audits, optimization, and renewable energy system solutions"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "ESG Disclosures",
      description: "CDP, SBTi disclosures and regulation guidance for transparent communication"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Verification & Assurance",
      description: "ISO 14064 verification and GHG accounting validation services"
    }
  ];

  return (
    <><Header3 />
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full border-2 border-teal-500 flex items-center justify-center">
              <Cloud className="w-6 h-6 text-teal-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Carbon Services</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Our carbon services empower businesses to measure, manage, and reduce emissions through robust accounting, verification, and decarbonization strategies, enabling climate leadership and compliance while unlocking new value opportunities.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-teal-500 mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Take Control of Your Carbon Impact
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Enable accurate measurement, reporting, and validation for climate compliance and leadership
          </p>
          <button className="px-8 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition-colors">
            Learn More
          </button>
        </div>
      </section>
    </div>

    <Footer3/>
        
        </>
  );
}