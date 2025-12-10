"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Target,
  TrendingUp,
  Award,
  Calendar,
  Mail,
  Phone,
  ChevronDown,
  Check,
} from "lucide-react";
import Header4 from "@/components/Header4/Header4";
import Footer3 from "@/components/Footer3/Footer3";
import QueryForm4 from "@/components/QueryForm4/QueryForm4";
import Image from "next/image";
import QueryForm5 from "@/components/QueryForm5/QueryForm5";

export default function SustainabilityLanding() {
  const [openFaq, setOpenFaq] = useState(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };












  

  const faqs = [
  {
    "q": "Is this Certification free?",
    "a": "Yes, the certification is completely free of cost. This initiative by Towards Green Future is designed to help businesses explore sustainability opportunities without any financial commitment."
  },
  {
    "q": "Is this just a certificate or do I get anything else?",
    "a": "No, it's not just a certificate that you would get at the end of the evaluation, if we find your initiative to have a larger impact we would develop a detailed case study which will be published on our website and also promoted by TGF. For all evaluations we would be sharing a two pager report as well.  "
  },
  {
    "q": "I believe I will not charge anything even if I am based anywhere in India?",
    "a": "TGF will bear all the cost of the certification, verifier and other charges if your sustainability or climate change action makes its way through our initial assessment. "
  },
  {
    "q": "How will this help me? ",
    "a": "Currently, organizations are spending enormously to showcase their action towards sustainability, we would help you validate your effort in terms of impact and also provide an additional platform to showcase and promote your sustainability efforts."
  }
]

  const scrollToSection = () => {
    let section = document.getElementById("form");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header4 />
      <div className="">
        {/* Hero Section */}
        <motion.section
          className="pt-24 pb-32 px-6 border-b border-gray-200 bg-teal-500 min-h-screen h-full max-sm:px-3 max-sm:pt-12 max-sm:min-h-[fit]  max-sm:h-unset max-sm:pb-2"
          {...fadeIn}
        >
          <div className="max-w-[1371px] mx-auto h-full flex flex-row justify-between max-sm:flex-col max-sm:justify-start max-sm:items-center">
            <div className="text-left h-full flex flex-col justify-between items-start">
              <h1 className="text-2xl sm:text-5xl font-bold font-lora  mb-2 text-white leading-tight">
              E+ Statement 
              </h1>
              <p className="max-w-2xl text-white mb-4">Recognizing Voluntary Sustainability Excellence</p>
              <p className="text- text-[#fff] max-w-3xl">
           {`  E+ Statement is a verified recognition statement that highlights and validates a company or an individual's sustainability actions, achievements, and initiatives that are voluntary, self-driven, and exceed compliance expectations.`}
              </p>

              <p className="flex flex-row text-md font-outfit text-white max-w-3xl mt-4">
              {`In a world where organizations are figuring out sustainability impact, there are companies that have already taken action. The statement is to highlight and recognize companies that choose to go beyond what regulations require and innovate, take initiative, and commit to a more sustainable future because it is the right thing to do—not simply because they must.
`}
              </p>

              <p className="flex flex-row text-md font-outfit text-white max-w-3xl mt-4">
             {`The “E+” represents the added effort, vision, and leadership shown by companies and individuals that proactively advance environmental stewardship.
`}
              </p>

              <p className="text text-sm mt-12 font-italic font-outfit text-white  max-sm:mr-auto max-sm:mt-6">
                Initiated by TGF
                 <div className='flex flex-row w-full'>
              <Image src={`/image/tgf (2).png`} width={211} height={211} className='w-[71px] mr-auto rounded-lg mt-4' />
            </div>
              </p>
            </div>

            <div className="flex flex-col justify-end items-end h-full mt-4 max-sm:mt-6 max-sm:items-start max-sm:w-full">
             {/*  <p className="text-2xl text-white mr-2">Lead Program Partner</p> */}
              <div className="flex flex-row mx-auto max-sm:mx-0 mt-[-25px]">
                <Image
                  src={`https://res.cloudinary.com/dgxiftsm0/image/upload/v1765359124/Untitled_design_60_r663sw.png`}
                  width={211}
                  height={211}
                  className="w-[121px] lg:w-[221px] mx-auto max-sm:mx-0"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Value Proposition */}
        {/*    <motion.section 
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
      </motion.section> */}

        {/* Benefits Section */}








        <motion.section
          className="py-24 px-6 border-b border-gray-200 max-sm:px-3 max-sm:py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-[1371px] mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center max-sm:gap-8">
              <div>
                <h2 className="text-3xl font-lora font-bold mb-12 text-gray-900 max-sm:mb-6">
                  {`Why   `}
                  <span className="text-green-600">It Matters</span>
                </h2>

                






                <div className="space-y-6">
                  <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl">
                    <Check
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                      strokeWidth={2}
                    />
                    <p className="text-base text-gray-700 leading-relaxed max-sm:text-sm">
                    Highlighting leaders, not just rule-followers
                    </p>
                  </div>
                  <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl max-sm:text-sm">
                    <Check
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                      strokeWidth={2}
                    />
                    <p className="text-base text-gray-700 leading-relaxed">
                      Encouraging continuous improvement with recognition that goes beyond checklists
                    </p>
                  </div>
                  <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl">
                    <Check
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                      strokeWidth={2}
                    />
                    <p className="text-base text-gray-700 leading-relaxed max-sm:text-sm">
                    Helping companies communicate impact credibly to customers, investors, and partners
                    </p>
                  </div>
                   <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl">
                    <Check
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                      strokeWidth={2}
                    />
                    <p className="text-base text-gray-700 leading-relaxed max-sm:text-sm">
                   Strengthening brand reputation through transparent evidence of voluntary action
                    </p>
                  </div>
                   <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl">
                    <Check
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                      strokeWidth={2}
                    />
                    <p className="text-base text-gray-700 leading-relaxed max-sm:text-sm">
                   Motivating competitive sustainability performance across industries
                    </p>
                  </div>
                </div>
              </div>

              <div className=" border-gray-200  rounded-xl flex items-center justify-center mt-6 md:mt-0">
                <div>
                <h2 className="text-3xl font-lora font-bold mb-12 text-gray-900 max-sm:mb-6">
                  {`How 
  `}
                  <span className="text-green-600">It Works</span>
                </h2>

                






                <div className="space-y-6 mb-3">
                  <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl">
                    <Check
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                      strokeWidth={2}
                    />
                    <p className="text-base text-gray-700 leading-relaxed max-sm:text-sm">
                    Submission of Sustainability Actions
                    Organizations submit voluntary initiatives and evidence of impact.

                    </p>
                  </div>
                  <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl max-sm:text-sm">
                    <Check
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                      strokeWidth={2}
                    />
                    <p className="text-base text-gray-700 leading-relaxed">
                      Assessment and Verification
                      Independent evaluators verify the additional environmental and social value created beyond compliance.

                    </p>
                  </div>
                  <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl">
                    <Check
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                      strokeWidth={2}
                    />
                    <p className="text-base text-gray-700 leading-relaxed max-sm:text-sm">
                   Issuance of E+ Statement
                   A formal recognition statement is awarded, along with communication materials and optional public listing.

                    </p>
                  </div>
                   <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl">
                    <Check
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                      strokeWidth={2}
                    />
                    <p className="text-base text-gray-700 leading-relaxed max-sm:text-sm">
                  Annual Renewal
                  Ensures ongoing commitment and continuous improvement.

                    </p>
                  </div>
                   <div className=" h-[71px] mt-12 pt-">
                   
                    <p className="text-base text-gray-700 leading-relaxed max-sm:text-sm">
                
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </motion.section>


        

        {/* CTA Section */}
      {/*   <motion.section
          className="py-24 px-6 border-b border-gray-200 max-sm:px-8 max-sm:px-3 bg-[##f9f9f9]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-lora mb-8 text-gray-900 leading-relaxed max-sm:text-2xl max-sm:mb-2">
           Share us these few details 

              <span className="text-blue-600"> to get E+ Certified, </span>
            </h2>
            <p className="text-base text-gray-600 mb-12 leading-relaxed max-sm:text-sm ">
             
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClickCapture={scrollToSection}
              className="px-10 py-4 bg-green-600 text-white text-base font-medium rounded-lg hover:bg-green-700 transition-colors border-2 border-green-600 nax-sm:px-6 max-sm:py-3 max-sm:text-sm"
            >
              Fill form
            </motion.button>
          </div>
        </motion.section> */}

        {/* FAQ Section */}
        <motion.section
          className="py-24 px-6 border-b border-gray-200 max-sm:px-3 max-sm:py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-lora font-bold mb-16 text-center text-gray-900 max-sm:text-2xl max-sm:mb-8">
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
                    className="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors max-sm:px-4 max-sm:py-3"
                  >
                    <span className="text-base text-gray-900 text-left font-medium max-sm:text-sm">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown
                        className="w-6 h-6 text-gray-400"
                        strokeWidth={2}
                      />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === idx ? "auto" : 0,
                      opacity: openFaq === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 border-t-2 border-gray-200 pt-6 max-sm:px-4 max-sm:pb-4 max-sm:pt-4">
                      <p className="text-base text-gray-600 leading-relaxed max-sm:text-sm">
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
        <section id="form" className="py-16 px-6 max-sm:px-6 max-sm:py-8 bg-[#f9f9f9]">
          <QueryForm5  />
        </section>
      </div>
      <Footer3 />
    </>
  );
}
