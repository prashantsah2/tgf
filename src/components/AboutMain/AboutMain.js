import React from 'react';
import { IndianRupee, ShoppingCart, Truck, CreditCard, Handshake } from 'lucide-react';
import Image from 'next/image';

export default function AboutMain() {
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
    <div className=" bg-white">
      {/* Why Choose Section */}
  
      {/* About Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-lora text-gray-900 mb-3">
              About <span className="text-teal-600">Us</span>
            </h2>
            {/* <p className="text-gray-600">
              Leading the way in sustainable e-waste management
            </p> */}
          </div>


          

          <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/*   <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Our Mission
                  </h3>
                  <p className="text-sm text-gray-600">
                    To create a sustainable future by making e-waste recycling accessible, transparent, and rewarding for everyone across India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Our Vision
                  </h3>
                  <p className="text-sm text-gray-600">
                    {`To be India's most trusted e-waste recycling platform, setting new standards in environmental responsibility and customer satisfaction`}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Our Impact
                  </h3>
                  <p className="text-sm text-gray-600">
                    Over 500,000 devices recycled, preventing tons of toxic waste from polluting our environment and contributing to a circular economy
                  </p>
                </div>
              </div>
            </div> */}

            <div className='flex flex-row justify-center items-center text-left font-sm font-outfit text-gray-600'>
              Towards Green Future (TGF) is a non-profit organization committed to fostering sustainable growth, promoting climate awareness, and driving environmental responsibility across communities. Through its initiatives, TGF aims to empower individuals, institutions, and industries to adopt eco-friendly practices and contribute to a resilient, greener planet for future generations.

            </div>

            <div>
              <div className=" rounded-lg  flex items-center justify-center border-2 border-gray-200">
                <div className="text-center text-gray-400 w-full">
                 <Image src={`/image/About us.png`} width={400} height={400} alt="About Us Image" className="mx-auto  aspect-[2] w-full object-cover"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}