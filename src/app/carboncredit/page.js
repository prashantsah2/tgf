"use client"
import React, { useState } from 'react';
import { Leaf, TrendingUp, BarChart3, DollarSign, Recycle, Zap, Target, CheckCircle2, ArrowUpRight, TreePine, Factory, Lightbulb, Users } from 'lucide-react';
import Header4 from '@/components/Header4/Header4';
import Footer3 from '@/components/Footer3/Footer3';

export default function CarbonOffsetPage() {
  const [activeService, setActiveService] = useState('implementation');

  const services = [
    { 
      id: 'implementation', 
      name: 'Project Implementation', 
      icon: Target,
      desc: 'Turn strategies into action'
    },
    { 
      id: 'development', 
      name: 'Project Development', 
      icon: TrendingUp,
      desc: 'Build sustainable solutions'
    },
    { 
      id: 'monitoring', 
      name: 'Project Monitoring', 
      icon: BarChart3,
      desc: 'Track real-time progress'
    },
    { 
      id: 'funding', 
      name: 'Project Funding', 
      icon: DollarSign,
      desc: 'Secure investments'
    },
    { 
      id: 'trading', 
      name: 'Carbon Credit Trading', 
      icon: Recycle,
      desc: 'Navigate carbon markets'
    },
    { 
      id: 'irec', 
      name: 'i-REC', 
      icon: Zap,
      desc: 'Energy certificates'
    }
  ];

  const benefits = [
    'Seamless execution from planning to implementation',
    'Years of expertise in emission reduction',
    'On-time and within budget delivery',
    'Advanced monitoring technology',
    'Verified emission reductions',
    'Adherence to environmental standards'
  ];

  const projectTypes = [
    { icon: TreePine, name: 'Reforestation Projects', count: '45+' },
    { icon: Zap, name: 'Renewable Energy', count: '32+' },
    { icon: Factory, name: 'Energy Efficiency', count: '28+' },
    { icon: Lightbulb, name: 'Innovation Projects', count: '15+' }
  ];

  return (
    <>
    <Header4/>
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
     

      {/* Hero Section */}
      <div className="border-b-4 border-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-black text-gray-900 mb-6 leading-tight">
              Driving Carbon Neutrality
              <span className="block text-green-600">Through Action</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive environmental solutions that transform vision into measurable impact
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
              Explore Services
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

       <div className="bg-green-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5" />
            <span className="text-sm font-medium">Carbon Offset Solutions Platform</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <span>Global Impact: 80M+ Tons CO₂</span>
            <span>•</span>
            <span>200+ Active Projects</span>
          </div>
        </div>
      </div>

      {/* Services Navigation */}
      <div className="bg-gray-50 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`p-6 rounded-xl transition-all text-center ${
                    activeService === service.id
                      ? 'bg-green-600 text-white shadow-xl scale-105'
                      : 'bg-white border-2 border-gray-200 hover:border-green-400 text-gray-700'
                  }`}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${
                    activeService === service.id ? 'text-white' : 'text-green-600'
                  }`} />
                  <div className={`font-bold text-sm mb-1 ${
                    activeService === service.id ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.name}
                  </div>
                  <div className={`text-xs ${
                    activeService === service.id ? 'text-green-100' : 'text-gray-500'
                  }`}>
                    {service.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Sidebar - Project Types */}
          <div className="lg:col-span-1">
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h3>
              <div className="space-y-4">
                {projectTypes.map((type, index) => {
                  const Icon = type.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg p-4 border border-green-200 hover:shadow-md transition-all">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-600 p-2 rounded-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{type.name}</div>
                          <div className="text-sm text-green-600 font-medium">{type.count} Projects</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 bg-white rounded-lg p-6 border-2 border-green-600">
                <Users className="w-12 h-12 text-green-600 mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Expert Team Members</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-green-600 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Target className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl font-bold">Project Implementation</h2>
                </div>
                <p className="text-green-50 text-lg">
                  Translating carbon offset strategies into tangible environmental benefits
                </p>
              </div>

              <div className="p-8">
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our carbon offset project implementation service is designed to seamlessly execute 
                    emission reduction initiatives, translating strategies into tangible actions that deliver 
                    measurable environmental benefits.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Drawing upon years of expertise, we oversee every aspect of project implementation, 
                    from initial planning to on-the-ground execution. Our approach is rooted in a commitment 
                    to excellence, ensuring that projects are completed efficiently, on time, and within budget 
                    while adhering to the highest standards of environmental integrity.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
              {`      Leveraging advanced monitoring techniques and technology, we track project performance, 
                    verify emission reductions, and ensure adherence to project methodologies and standards. 
                    Whether it's reforestation, renewable energy deployment, or energy efficiency improvements, 
                    our dedicated team is ready to turn your vision for carbon neutrality into reality, driving 
                    meaningful change and making a positive difference for the planet.`}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold transition-all shadow-md hover:shadow-lg">
                    Start a Project
                  </button>
                  <button className="flex-1 bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 py-4 rounded-lg font-bold transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
    <Footer3/>
    </>
  );
}