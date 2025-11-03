"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Mail, MessageCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-4 px-4 md:px-6 flex items-start ho justify-between text-left hover:bg-[#fff] transition-all duration-300 ease-in-out"
      >
        <span className=" text-gray-800 font-thin font-outfit pr-6 text-base md:text-lg ">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-teal-700 flex-shrink-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 md:px-6 pb-4 text-sm md:text-base text-gray-600 font-thin leading-relaxed">{answer}</div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    question: "Is the consultation only for MSMEs?",
    answer:
      "While the program is primarily designed to empower MSMEs, the consultation is open to any industry or organization interested in adopting or improving sustainable practices. Whether you’re a startup, a growing enterprise, or an established business, you’re welcome to join and begin your sustainability journey."
  },
  {
    question: "Do you charge for the consultation?",
    answer:
      "No, the consultation is completely free of cost. This initiative by Towards Green Future, in collaboration with ENEN Green, is designed to help businesses explore sustainability opportunities without any financial commitment."
  },
  {
    question: "Am I obligated to take any services after the consultation?",
    answer:
      "Not at all. The consultation is purely advisory and aims to guide you in adopting sustainable practices best suited to your operations. You are under no obligation to take any further services after the session."
  },
  {
    question: "What if I am not available on the mentioned date (Saturday)?",
    answer:
      "If you’re unavailable on the scheduled consultation day, don’t worry! You can request an alternative slot through our website www.enengreen.com, and our team will arrange a convenient time for your session."
  }
];


  return (
    <div className=" bg-gray-50 md:pt-12 md:pb-6">
      <div className="max-w-[1391px] mx-auto px-4 lg:px-0 ">
        {/* Header */}
        <div className="text-left mb-12">
        
          <h1 className="text-xl text-left md:text-3xl font-lora font-medium text-black mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-left text-sm md:text-base text-gray-600 max-w-2xl font-outfit mr-auto">
            Find answers to common questions about our services, process, and how we can help your business grow.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8 max-w-[1391px] mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}