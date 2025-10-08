import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

const GlobalFootprint = () => {
  const [hoveredPin, setHoveredPin] = useState(null);

  // Project locations with approximate coordinates (percentage-based positioning)
  const projects = [
    { id: 1, name: 'North America', x: 18, y: 38, type: 'project' },
    { id: 2, name: 'Europe 1', x: 62, y: 25, type: 'project' },
    { id: 3, name: 'Europe 2', x: 64, y: 28, type: 'project' },
    { id: 4, name: 'West Africa', x: 55, y: 52, type: 'project' },
    { id: 5, name: 'East Africa', x: 63, y: 55, type: 'project' },
    { id: 6, name: 'India', x: 72, y: 45, type: 'office', location: 'Delhi (H.O.)' },
    { id: 7, name: 'Middle East', x: 68, y: 42, type: 'project' },
    { id: 8, name: 'East Asia', x: 82, y: 44, type: 'project' },
    { id: 9, name: 'Southeast Asia', x: 81, y: 54, type: 'project' },
    { id: 10, name: 'Australia', x: 88, y: 72, type: 'project' },
  ];

  const offices = [
    'Delhi (H.O.)',
    'Faridabad',
    'Noida',
    'Bangalore'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-2">
            <span className="text-emerald-600">OUR FOOTPRINT</span>
          </h1>
          <h2 className="text-5xl font-bold text-emerald-600">PROJECTS</h2>
        </div>

        <Image src={`/image/map.png`} width={1211} height={1211} className="aspect-square" />

      </div>
    </div>
  );
};

export default GlobalFootprint