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

export default function SustainabilityLanding() {
  const [openFaq, setOpenFaq] = useState(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const faqs = [
    {
      q: "Is this program only for college or university students?",
      a: "No. This initiative is open to colleges, universities, training institutes, and youth-led communities. It is designed for students and young individuals interested in sustainability, climate change, and future-ready leadership skills.",
    },
    {
      q: "Is there any fee, and are we required to take any paid services afterward?",
      a: "No. All sessions, workshops, and lectures are completely free of cost. This program is purely educational and awareness-based. Institutions or students are under no obligation to subscribe to any paid service or certification after the session.",
    },
    {
      q: "What is the mode of the session—online or offline?",
      a: "Sessions can be conducted in both online and offline formats. The mode of delivery will depend on factors such as the institution’s location, the participants’ size, and the interest.",
    },
    {
      q: "Can the session be scheduled on a different date if required?",
      a: "Yes. If the proposed date is not suitable, institutions can reschedule the meeting through our booking form, Also, you may request an alternative slot through email. Our team will coordinate and arrange the session at a mutually convenient time for faculty and students.",
    },
  ];

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
          className="pt-24 pb-32 px-6 border-b border-gray-200 bg-teal-500 min-h-screen h-full"
          {...fadeIn}
        >
          <div className="max-w-[1371px] mx-auto h-full flex flex-row justify-between">
            <div className="text-left h-full flex flex-col justify-between items-start">
              <h1 className="text-5xl max-sm:3xl font-bold font-lora  mb-2 text-white leading-tight">
                 Young learners Program
              </h1>
              <p className="text- text-[#fff]">
                Empower today’s youth with the knowledge that tomorrow will
                demand!!
              </p>

              <p className="flex flex-row text-md font-outfit text-white max-w-3xl mt-4">
                Through our free sustainability and climate awareness sessions,
                we help educational institutions prepare students to become
                responsible, future-ready leaders in a world where environmental
                responsibility is no longer optional—but essential.
              </p>

              <p className="flex flex-row text-md font-outfit text-white max-w-3xl mt-4">
                From climate change awareness and climate mitigation strategies
                to ESG leadership, carbon footprint reduction, and real-world
                sustainability practices, our expert-led workshops are designed
                to inspire critical thinking and action. Students are introduced
                to key concepts such as ESG ratings and reporting, Life Cycle
                Assessment (LCA), circular economy models, sustainable product
                design, and green innovation—helping them understand how
                industries can shift from linear to regenerative systems. These
                sessions empower young minds to think responsibly, develop
                problem-solving abilities, and become active contributors to a
                sustainable future.
              </p>

              <p className="text text-2xl mt-12 font-italic font-outfit text-white">
                Initiated by TGF
                 <div className='flex flex-row w-full'>
              <Image src={`/image/tgf (2).png`} width={211} height={211} className='w-[71px] mx-auto rounded-lg mt-4' />
            </div>
              </p>
            </div>

            <div className="flex flex-col justify-end items-end h-full mt-4">
              <p className="text-2xl text-white mr-2">Lead Program Partner</p>
              <div className="flex flex-row mx-auto">
                <Image
                  src={`/image/enenwhite.png`}
                  width={211}
                  height={211}
                  className="w-[121px]"
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
          className="py-24 px-6 border-b border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-[1371px] mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-lora font-bold mb-12 text-gray-900">
                  {`Why  `}
                  <span className="text-green-600">Join </span>
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl">
                    <Check
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                      strokeWidth={2}
                    />
                    <p className="text-base text-gray-700 leading-relaxed">
                      Transform curiosity into climate leadership.
                    </p>
                  </div>
                  <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl">
                    <Check
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                      strokeWidth={2}
                    />
                    <p className="text-base text-gray-700 leading-relaxed">
                      Prepare for a sustainability-driven future.
                    </p>
                  </div>
                  <div className="flex gap-4 p-6 border-2 border-gray-200 rounded-xl">
                    <Check
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                      strokeWidth={2}
                    />
                    <p className="text-base text-gray-700 leading-relaxed">
                      Lead with purpose, not just profit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 h-96 rounded-xl flex items-center justify-center">
                <video
                  autoPlay
                  
                  muted
                  playsInline
                  className=" w-full h-full object-cover"
                >
                  <source
                    src="/image/SBTSUSTANIBILITY.CFD.mp4"
                    type="video/mp4"
                  />
                </video>
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
              Take the first step towards a{" "}
              <span className="text-blue-600">greener future</span>
            </h2>
            <p className="text-base text-gray-600 mb-12 leading-relaxed">
              Collaborate with us or book a group session today let’s create a
              greener tomorrow, together”
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClickCapture={scrollToSection}
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
        <section id="form" className="py-16 px-6">
          <QueryForm4 />
        </section>
      </div>
      <Footer3 />
    </>
  );
}
