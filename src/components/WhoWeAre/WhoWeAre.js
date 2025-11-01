import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-[1391px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900">
            <span className='text-teal-500'>  WHO</span> <span className='text-blue-500'>WE ARE?</span>
            </h2>
  
            
            <p className="text-base text-gray-600 leading-relaxed">
             ENEN Green is a market leader in the domains of climate change and sustainability. We strive to bring about a change in the Indian market by transforming traditional businesses into sustainable green businesses. We are constantly working towards a green future.
We assist organizations to reduce their carbon footprint and tackle environment degradation through green business practices.
            </p>
            
           {/*  <button className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200 group">
              Read More
              <ArrowUpRight className="ml-1 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button> */}
          </div>

          {/* Right Content - Team Photo */}
          <div className="relative">
            {/* Team Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Cognitud team members standing together with arms crossed"
                className="w-full h-auto"
              />
              

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;