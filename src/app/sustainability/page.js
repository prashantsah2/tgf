'use client'
import React, { useState } from 'react';
import { Shield, TrendingUp, Users, FileText, Award, Target, CheckCircle, BarChart2, Leaf, Globe } from 'lucide-react';

export default function ESGServicesPage() {
  const [activeTab, setActiveTab] = useState('maturity');

  const services = [
    { 
      id: 'maturity', 
      name: 'ESG Maturity Assessment', 
      icon: Shield,
      color: 'bg-slate-700',
      hoverColor: 'hover:bg-slate-600'
    },
    { 
      id: 'gap', 
      name: 'ESG Gap Analysis', 
      icon: TrendingUp,
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-500'
    },
    { 
      id: 'benchmarking', 
      name: 'ESG Peer Benchmarking', 
      icon: BarChart2,
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-500'
    },
    { 
      id: 'materiality', 
      name: 'ESG Materiality Assessment', 
      icon: Target,
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-500'
    },
    { 
      id: 'reporting', 
      name: 'Sustainability (ESG) Reporting', 
      icon: FileText,
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-500'
    },
    { 
      id: 'brsr', 
      name: 'BRSR Reporting', 
      icon: FileText,
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-500'
    },
    { 
      id: 'rating', 
      name: 'ESG Rating (EcoVadis)', 
      icon: Award,
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-500'
    },
    { 
      id: 'cdp', 
      name: 'CDP Reporting', 
      icon: Globe,
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-500'
    },
    { 
      id: 'sbti-target', 
      name: 'SBTi Target Submission', 
      icon: Target,
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-500'
    },
    { 
      id: 'sbti-feasibility', 
      name: 'SBTi Feasibility Assessment', 
      icon: CheckCircle,
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-500'
    }
  ];

  const keyPoints = [
    'Comprehensive evaluation against industry standards',
    'Identification of strengths and improvement areas',
    'Tailored approach to unique organizational goals',
    'Actionable insights and recommendations',
    'Long-term value creation focus'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ESG Solutions</h1>
                <p className="text-sm text-gray-600">Environmental, Social & Governance Excellence</p>
              </div>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Service Pills */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Our Services</h2>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`${
                    activeTab === service.id ? service.color : 'bg-white border-2 border-gray-200'
                  } ${service.hoverColor} ${
                    activeTab === service.id ? 'text-white' : 'text-gray-700'
                  } px-5 py-3 rounded-full font-semibold transition-all shadow-sm hover:shadow-md flex items-center gap-2`}
                >
                  <Icon className="w-5 h-5" />
                  {service.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Area */}
          <div className="lg:col-span-2">
            <div className="bg-slate-700 rounded-3xl p-10 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-10 h-10" />
                <h2 className="text-4xl font-bold">ESG Maturity Assessment</h2>
              </div>
              
              <div className="space-y-4 text-slate-100 leading-relaxed">
                <p>
                {`  Our ESG (Environmental, Social, and Governance) maturity assessment service involves 
                  analyzing an organization's existing ESG status and performance. Through comprehensive 
                  evaluation and benchmarking against industry standards, we assess the organization's 
                  current sustainability practices, policies, and outcomes.`}
                </p>
                
                <p>
                {`  This process identifies strengths, weaknesses, and areas for improvement across ESG pillars. 
                  Our tailored approach considers the organization's unique goals and context, providing 
                  actionable insights and recommendations to enhance ESG performance and drive long-term 
                  value creation.`}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-600">
                <h3 className="text-xl font-bold mb-4">What We Deliver</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Our Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Assessments Completed</span>
                  <span className="text-2xl font-bold text-green-600">500+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Industries Served</span>
                  <span className="text-2xl font-bold text-green-600">25+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Client Satisfaction</span>
                  <span className="text-2xl font-bold text-green-600">98%</span>
                </div>
              </div>
            </div>

            {/* ESG Pillars */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 shadow-lg text-white">
              <h3 className="font-bold mb-4">ESG Pillars</h3>
              <div className="space-y-3">
                <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Globe className="w-5 h-5" />
                    <span className="font-semibold">Environmental</span>
                  </div>
                  <p className="text-sm text-green-50">Climate, resources, pollution</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">Social</span>
                  </div>
                  <p className="text-sm text-green-50">People, community, diversity</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold">Governance</span>
                  </div>
                  <p className="text-sm text-green-50">Ethics, compliance, leadership</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-slate-900 rounded-2xl p-6 shadow-lg text-white">
              <h3 className="font-bold mb-3">Ready to Start?</h3>
              <p className="text-slate-300 text-sm mb-4">
                Schedule a consultation with our ESG experts today.
              </p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}