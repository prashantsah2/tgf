"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Target, TrendingUp, Award, Calendar, Mail, Phone, ChevronDown, Check } from 'lucide-react';
import Header4 from "@/components/Header4/Header4";
import Footer3 from "@/components/Footer3/Footer3"
import QueryForm3 from '@/components/QueryForm3/QueryForm3';

export default function SustainabilityLanding() {
  const [openFaq, setOpenFaq] = useState(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const faqs = [
    {
      q: "Is the consultation only for MSMEs?",
      a: "While the program is primarily designed to empower MSMEs, the consultation is open to any industry or organization interested in adopting or improving sustainable practices. Whether you're a startup, a growing enterprise, or an established business, you're welcome to join and begin your sustainability journey."
    },
    {
      q: "Do you charge for the consultation?",
      a: "No, the consultation is completely free of cost. This initiative by Towards Green Future, in collaboration with ENEN Green, is designed to help businesses explore sustainability opportunities without any financial commitment."
    },
    {
      q: "Am I obligated to take any services after the consultation?",
      a: "Not at all. The consultation is purely advisory and aims to guide you in adopting sustainable practices best suited to your operations. You are under no obligation to take any further services after the session."
    },
    {
      q: "What if I am not available on the mentioned date (Saturday)?",
      a: "If you're unavailable on the scheduled consultation day, don't worry! You can request an alternative slot through our website www.enengreen.com, and our team will arrange a convenient time for your session."
    }
  ];

  return (
    <>
    <Header4/>
    <div className="">
      {/* Hero Section */}
      <motion.section 
        className="pt-24 pb-32 px-6 border-b border-gray-200 bg-teal-500"
        {...fadeIn}
      >
        <div className="max-w-[1371px] mx-auto">
          <div className="text-left ">
            
            
            <h1 className="text-3xl max-sm:xl font-bold font-lora  mb-2 text-white leading-tight">
              Go Green, Grow Strong
            </h1>
            <p className='text- text-[#fff]'> Free Climate & 
              
              Sustainability handholding for MSMEs</p>
            
          </div>

        </div>
      </motion.section>

      {/* Value Proposition */}
      <motion.section 
        className="py-24 px-6 border-b border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-[1371px] mx-auto">
          <h2 className="text-3xl font-bold font-lora text-left text-gray-900 leading-relaxed">
            Accelerate your sustainable growth with our <span className="text-blue-600">free consultation</span>
          </h2>
          <p className='flex flex-row text-lg font-outfit text-gray-900'>Accelerate your sustainable growth with our free climate and sustainability consultation!
Discover how reducing carbon emissions, improving resource efficiency, and aligning with ESG goals can boost your brand value and cut operational costs. Our experts at ENEN Green will help you identify tailored strategies and compliance opportunities to future-proof your business against evolving environmental regulations. Take the first step toward a greener, more competitive future—book your free session today!</p>

        
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-24 px-6 border-b border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-[1371px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-lora font-bold mb-12 text-gray-900">
                {`What You’ll Discover in `}<span className="text-green-600">Our Free Consultation</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-base text-gray-700 leading-relaxed">
                    Customized Sustainability Insights: Understand your organization’s current environmental footprint and opportunities for improvement.
                  </p>
                </div>
                <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-base text-gray-700 leading-relaxed">
                 Growth & Compliance Benefits: Learn how adopting sustainability can enhance your brand value, meet ESG goals, and align with global standards.
                  </p>
                </div>
                <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-base text-gray-700 leading-relaxed">
                   Partnership Opportunities: Explore how TGF can support your sustainability journey through collaborations, awareness programs, and long-term impact initiatives.
                  </p>
                </div>
                <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-base text-gray-700 leading-relaxed">
                    Expert guidance from ENEN Green sustainability specialists
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 h-96 rounded-xl flex items-center justify-center">
              <p className="text-base text-gray-400">Space for colorful illustration</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-24 px-6 border-b border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-lora mb-8 text-gray-900 leading-relaxed">
            Take the first step toward a <span className="text-blue-600">greener future</span>
          </h2>
          <p className="text-base text-gray-600 mb-12 leading-relaxed">
            Book your free session today and discover how sustainability can transform your business
          </p>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-green-600 text-white text-base font-medium rounded-lg hover:bg-green-700 transition-colors border-2 border-green-600"
          >
            Book Free Consultation
          </motion.button>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-24 px-6 border-b border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-lora font-bold mb-16 text-center text-gray-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="border-2 border-gray-200 rounded-xl overflow-hidden"
                initial={false}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base text-gray-900 text-left font-medium">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" strokeWidth={2} />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === idx ? 'auto' : 0,
                    opacity: openFaq === idx ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 border-t-2 border-gray-200 pt-6">
                    <p className="text-base text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-16 px-6">
      
        <QueryForm3/>
      </footer>
    </div>
     <Footer3/>
    </>
  );
}