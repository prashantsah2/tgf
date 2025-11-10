import React from 'react';
import { IndianRupee, ShoppingCart, Truck, CreditCard, Handshake } from 'lucide-react';
import { Globe2, Users2,Lightbulb, ShieldCheck, Leaf } from 'lucide-react';
import Image from 'next/image';

export default function Whyus() {


  const features = [
  {
    icon: Globe2,
    title: 'Holistic Approach',
    description:
      'We view sustainability as a shared journey, integrating environmental, social, and economic aspects for lasting impact.'
  },
  {
    icon: Users2,
    title: 'Expert Team',
    description:
      'Our professionals bring strong expertise in environmental science, sustainable development, and community engagement.'
  },
  {
    icon: Handshake,
    title: 'Collaborative Partnerships',
    description:
      'We work closely with organizations, MSMEs, and communities to drive practical, on-ground climate action.'
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description:
      'We develop and promote eco-friendly strategies tailored to local needs and global sustainability goals.'
  },
  {
    icon: ShieldCheck,
    title: 'Transparency & Accountability',
    description:
      'Every initiative is guided by integrity, measurable outcomes, and a commitment to long-term change.'
  },
  {
    icon: Leaf,
    title: 'Proven Impact',
    description:
      'Our efforts consistently empower communities and industries to embrace green growth and build a sustainable future.'
  }
];

  return (
    <div className=" py-4 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-lora font-bold text-gray-900 mb-3">
            Why Choose <span className="text-teal-600">TGF?</span>
          </h1>
          
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image Placeholder */}
          
            <div className=" rounded-lg  flex items-center justify-center w-full">
                <div className=" rounded-lg  flex items-center justify-center border-2 border-gray-200">
                <div className="text-center text-gray-400 w-full">
                 <Image src={`/image/Why Choose TGF (1).png`} width={400} height={400} alt="About Us Image" className=" w-full aspect-[.7] object-cover rounded-xl"/>
                </div>
              </div>
            </div>
          

          {/* Right: Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}