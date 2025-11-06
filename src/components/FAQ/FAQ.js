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
        <span className="font-medium text-gray-800 pr-6 text-base md:text-lg ">{question}</span>
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
        <div className="px-4 md:px-6 pb-4 text-sm md:text-base text-gray-600 leading-relaxed">{answer}</div>
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-700 rounded-2xl mb-4">
            <HelpCircle className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-medium text-gray-800 mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and how we can help your business grow.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8 max-w-4xl mx-auto">
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

        {/* Contact Section */}
        <div className="bg-teal-700 rounded-2xl p-6 md:p-8 text-center text-white shadow-sm max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-2">Still have questions?</h2>
          <p className="text-sm md:text-base text-teal-100 mb-6">
            We are here to help! Reach out to our team and we will get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-4 py-2 bg-white text-teal-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 ease-in-out hover:scale-[1.02]">
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
}