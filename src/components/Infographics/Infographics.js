import React from 'react';
import { Search, Users, BarChart3, MessageSquare } from 'lucide-react';

export default function Infographics() {
  const steps = [
    {
      title: "CLIMATE CHANGE ASSESSMENT",
      icon: Search,
      description: `Most projects need a preliminary review or assessment that establishes project
viability. These review include idea note development, methodology
development and feasibility study.`,
      gradient: "from-green-500 to-teal-500",
      align: "right"
    },
    {
      title: "STAKEHOLDER ENGAGEMENT",
      icon: Users,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt eiusmod biccidunt adipiscing",
      gradient: "from-green-500 to-teal-500",
      align: "left"
    },
    {
      title: "DATA EVALUATION",
      icon: BarChart3,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt eiusmod biccidunt adipiscing",
   gradient: "from-green-500 to-teal-500",
      align: "right"
    },
    {
      title: "COMMUNICATION OF FINDINGS",
      icon: MessageSquare,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt eiusmod biccidunt adipiscing",
   gradient: "from-green-500 to-teal-500",
      align: "left"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fff] py-16 flex items-center justify-center">
      <div className="w-full max-w-[1311px]">
        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isRight = false;
            
            return (
              <div 
                key={index}

                className={`flex items-center gap-6  border-b-[2px] border-gray-300 pb-12 border-solid ${isRight ? 'flex-row-reverse justify-start ml-auto max-w-3xl' : 'justify-start max-w-3xl'}`}
              >
                <div className={`w-36 h-36 rounded-full bg-gradient-to-br ${step.gradient} p-1 flex-shrink-0`}>
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gray-800" strokeWidth={1.5} />
                  </div>
                </div>
                
                <div className={`flex-1 max-w-sm ${isRight ? 'text-right' : 'text-left'}`}>
                  <h3 className="font-outfit text-base mb-3 tracking-wide">{step.title}</h3>
                  <p className="text-sm text-gray-600 font-sans leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}