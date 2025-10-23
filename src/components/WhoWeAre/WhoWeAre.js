import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-[1391px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who Are We?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Your vision turns into our reality as we transform business, responsibly.
            </p>
            
            <p className="text-base text-gray-600 leading-relaxed">
              At Cognitud, we are driven by a passion to translate ideas into tangible 
              realities. Challenging the norm is our modus operandi. We strive for 
              excellence. We believe in the power of extraordinary ideas that are so 
              bold, so innovative, that they demand attention. We are committed to 
              nurturing these ideas, achieving long-term, sustainable growth, and 
              driving progress that leaves a lasting impact.
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