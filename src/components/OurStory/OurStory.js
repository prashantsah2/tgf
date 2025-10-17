import React from 'react';
import { Leaf, TrendingDown, Globe } from 'lucide-react';

export default function OurStory() {
  return (
    <div className=" bg-white max-sm:pb-16">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-16 max-sm:py-2 max-sm:px-0 ">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-sans text-gray-900 mb-4">Our Story</h1>
          <div className="w-16 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        {/* Problem Section */}
        <div className="mb-12">
          <div className="flex gap-4 mb-6">
            <TrendingDown className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-md font-semibold text-gray-900 mb-2">Climate Change Impact</h2>
              <p className="text-md text-gray-700 leading-relaxed mb-3">
                Climate change is real and it is affecting all forms of life on this planet in one way or the other. One of the major reasons for this is the unprecedented level of carbon emission, which traps the heat inside our atmosphere.
              </p>
              <p className="text-md text-gray-700 leading-relaxed">
                Everything we make, buy, and sell leaves a carbon trail and it accumulates to affect our climate adversely. Unaware and unregulated businesses are the major contributors to this problem.
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-12">
          <div className="flex gap-4">
            <Leaf className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-md font-semibold text-gray-900 mb-2">Our Mission</h2>
              <p className="text-md text-gray-700 leading-relaxed mb-3">
                ENEN Green started off in 2014 with a goal to make these businesses aware of the climate change issues and help them reduce their carbon footprint by adopting green and sustainable business practices.
              </p>
              <p className="text-md text-gray-700 leading-relaxed">
                Hitherto we have helped more than 100 businesses to respond effectively to the rapidly changing business scenarios by monitoring and regulating their carbon emissions, and by adopting solutions to become carbon neutral and sustainable.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xl font-bold text-emerald-600 mb-1">100+</p>
            <p className="text-xs text-gray-600">Businesses Supported</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-emerald-600 mb-1">2014</p>
            <p className="text-xs text-gray-600">Started Our Mission</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-emerald-600 mb-1">∞</p>
            <p className="text-xs text-gray-600">Positive Impact</p>
          </div>
        </div>
      </div>
    </div>
  );
}