import React from 'react';
import { IndianRupee, ShoppingCart, Truck, CreditCard, Handshake } from 'lucide-react';
import Image from 'next/image';

export default function Whyus() {
  const features = [
    {
      icon: IndianRupee,
      title: 'Transparent Pricing',
      description: 'No hidden charges—what you see is what you get'
    },
    {
      icon: ShoppingCart,
      title: 'As Easy as Grocery Shopping',
      description: 'Experience a simple way to sell your used electronics'
    },
    {
      icon: Truck,
      title: 'Fastest Pickup',
      description: 'Get your old appliance picked up within 24-48 hours'
    },
    {
      icon: CreditCard,
      title: 'Secure Transactions',
      description: 'Payments are processed securely and reliably'
    },
    {
      icon: Handshake,
      title: 'Trusted Across India',
      description: 'Serving customers nationwide with reliability and satisfaction'
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
          <p className="text-gray-600">
           {` Eco-Friendly Recycling by India's largest E-waste Recycler`}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image Placeholder */}
          
            <div className=" rounded-lg  flex items-center justify-center w-full">
                <div className=" rounded-lg  flex items-center justify-center border-2 border-gray-200">
                <div className="text-center text-gray-400 w-full">
                 <Image src={`/image/about.png`} width={400} height={400} alt="About Us Image" className=" w-full"/>
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