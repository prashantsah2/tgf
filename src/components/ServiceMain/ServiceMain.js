'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Leaf, Cloud, Briefcase, Package, Plus, Wind } from 'lucide-react';

// Services data from JSON




export default function ServiceMain({servicesData,iconComponents}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(servicesData.services[2]);

  const visibleCards = 3;
  const maxIndex = servicesData.services.length - visibleCards;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-[1391px] mx-auto pb-12">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl md:text-4xl font-outfit text-green-600">
              {servicesData.title}
            </h2>
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </div>
          <Leaf className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-3xl md:text-4xl font-outfit text-green-600" 
            style={{ 
              WebkitTextStroke: '1px #22c55e',
              WebkitTextFillColor: 'transparent'
            }}>
          {servicesData.title2}
        </h3>
        <div className="h-1 bg-green-500 mt-3 w-full" />
      </div>

      {/* Services Carousel */}
      <div className="max-w-7xl mx-auto mb-16 pt-12">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-12 top-1/2 -translate-y-1/2 -translate-x-14 z-10 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="absolute right-12 top-1/2 -translate-y-1/2 translate-x-14 z-10 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards + 2)}%)` }}
            >
              {servicesData.services.map((service) => {
                const IconComponent = iconComponents[service.icon];
                return (
                  <div
                    key={service.id}
                    onClick={() => handleServiceClick(service)}
                    className={`flex-shrink-0 w-[calc(33.333%-16px)] cursor-pointer transition-all duration-300 z-50 max-md:w-[calc(47.333%-16px)] ${
                      selectedService.id === service.id
                        ? ''
                        : 'hover:scale-100'
                    }`}
                  >
                    <div
                      className={`bg-white rounded-2xl p-6 h-full transition-all duration-300 ${
                        selectedService.id === service.id
                          ? 'border-4 border-green-500'
                          : 'border-2 border-gray-200 hover:border-green-300'
                      }`}
                    >
                      {/* Icon */}
                      <div className="mb-5">
                        <div className="w-14 h-14 rounded-full border-3 border-green-500 mx-auto flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-green-500" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-center text-lg font-outfit text-gray-800 mb-3 min-h-[32px] tracking-wide">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-center text-sm font-sans text-gray-600 mb-5 leading-relaxed min-h-[48px]">
                        {service.description}
                      </p>

                      {/* Learn More Button */}
                      <button className="mx-auto flex items-center gap-1 bg-green-500 text-white px-4 py-1.5 rounded-full text-[10px] font-semibold hover:bg-green-600 transition-colors group">
                        <ChevronRight className="w-3 h-3" />
                        <span>LEARN MORE</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Detail Section */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-lg font-bold text-gray-800 mb-6 tracking-wide">
          {selectedService.details.title}
        </h3>

        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
          <div className="space-y-5">
            {selectedService.details.points.map((point, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <ChevronRight className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}