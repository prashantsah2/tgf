"use client";
import React from 'react';
import { Brain, Lightbulb, MousePointerClick, Mountain, Info, FileText, ShieldAlert, Briefcase, Database, AlertTriangle, Sprout, BarChart3, ShieldCheck } from 'lucide-react';
import Footer3 from '@/components/Footer3/Footer3';
import Header3 from '@/components/Header4/Header4';
import ServiceMain from '@/components/ServiceMain/ServiceMain';
import Header4 from '@/components/Header4/Header4';

export default function OptionsInfographic() {





  return (
      <><Header4 />
      <div className='flex flex-col justify-center items-center min-h-screen w-screen'>
    
    <div className="relative w-full h-screen  overflow-x-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/image/comming soon.mp4" type="video/mp4" />
      </video>
      
      {/* Your content goes here */}
      <div className="relative z-10">
        {/* Add your page content */}
      </div>
    </div>
  
      </div>
       <Footer3/>
        
        </>
  );
}