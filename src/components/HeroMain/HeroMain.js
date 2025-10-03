import React from 'react';
import { Play, Leaf, Shield, Globe, TreePine, Recycle } from 'lucide-react';

export default function HeroMain() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="w-full mx-auto">
        {/* Main Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Protecting Our
                <span className="block text-green-600">Planet Through</span>
                <span className="block">Carbon Action.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Where Environmental Responsibility Meets Innovation. 
                Safeguarding Our Earth for Future Generations Through 
                Carbon Reduction & Protection.
              </p>
              
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105  flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Protect Our Planet</span>
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl p-8">
              {/* Simulated workspace with sustainability focus */}
              <div className="bg-white rounded-xl p-6 
              
              mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <span className="font-semibold text-gray-800">Carbon Protection Dashboard</span>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Environmental metrics */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">CO₂ Emissions Prevented</span>
                    <span className="text-green-600 font-semibold">2.4M tons</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full w-5/6 animate-pulse"></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Forest Areas Protected</span>
                    <span className="text-green-600 font-semibold">15,000 acres</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full w-4/5"></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Clean Energy Generated</span>
                    <span className="text-blue-600 font-semibold">450 GWh</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Team working illustration */}
              <div className="bg-white rounded-xl p-4 ">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <TreePine className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Environmental Protection</div>
                    <div className="text-sm text-gray-600">Safeguarding ecosystems & wildlife</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center  animate-bounce">
                <Recycle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl  p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-transparent to-emerald-50"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Our Environmental Impact Process</h3>
                    <p className="text-gray-600">Comprehensive carbon protection & ecosystem restoration</p>
                  </div>
                </div>
                <button className="bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110">
                  <Play className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-white rounded-2xl  p-8 transition-all duration-300  group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600 font-medium">Years Protecting</p>
              <p className="text-sm text-gray-500 mt-2">environmental ecosystems</p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-2xl p-8 transition-all duration-300 
             group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">600+</h3>
              <p className="text-gray-600 font-medium">Conservation Projects</p>
              <p className="text-sm text-gray-500 mt-2">across the globe</p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-2xl  p-8 transition-all duration-300  group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">800+</h3>
              <p className="text-gray-600 font-medium">Species Protected</p>
              <p className="text-sm text-gray-500 mt-2">from carbon impact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}