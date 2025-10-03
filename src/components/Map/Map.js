import { MapPin } from 'lucide-react';

export default function Map() {
  const projectLocations = [
    { id: 1, top: '32%', left: '15%' }, // North America
    { id: 2, top: '24%', left: '54%' }, // Europe 1
    { id: 3, top: '28%', left: '56%' }, // Europe 2
    { id: 4, top: '22%', left: '58%' }, // Europe 3
    { id: 5, top: '26%', left: '60%' }, // Europe 4
    { id: 6, top: '30%', left: '57%' }, // Europe 5
    { id: 7, top: '35%', left: '53%' }, // Africa 1
    { id: 8, top: '48%', left: '63%' }, // Africa 2
    { id: 9, top: '42%', left: '61%' }, // Middle East 1
    { id: 10, top: '38%', left: '66%' }, // Middle East 2
    { id: 11, top: '32%', left: '70%' }, // Asia 1
    { id: 12, top: '40%', left: '75%' }, // Asia 2
    { id: 13, top: '52%', left: '78%' }, // Australia
  ];

  const officeLocation = { top: '42%', left: '68%' }; // India

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8 sm:mb-12">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2">
              OUR FOOTPRINT
            </h1>
            <h2 className="text-3xl sm:text-5xl font-bold text-blue-600">
              PROJECTS
            </h2>
          </div>
          
          {/* Logo */}
          <div className="text-right">
            <div className="text-3xl sm:text-5xl font-bold">
              <span className="text-blue-600">en</span>
              <span className="text-teal-500">eo</span>
            </div>
            <div className="text-xs font-semibold text-teal-600 tracking-wider mt-1">
              ENEO GREEN
            </div>
          </div>
        </div>

        {/* Map Section - Placeholder for actual map image */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] mb-8 bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <p className="text-lg font-semibold mb-2">World Map Image Goes Here</p>
            <p className="text-sm">Replace this section with your actual map image</p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-orange-500 fill-orange-500 flex-shrink-0 mt-1" />
            <div>
              <div className="font-bold text-gray-900 text-lg">Global Projects</div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <MapPin className="w-7 h-7 text-gray-900 fill-gray-900 flex-shrink-0 mt-1" />
            <div>
              <div className="font-bold text-gray-900 text-lg">Offices</div>
              <div className="text-sm text-gray-600">India: Delhi (H.O.) | Faridabad</div>
            </div>
          </div>
        </div>

        {/* Gradient Bar */}
        <div className="w-48 h-2 bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 mb-8"></div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-400 text-sm italic">Private & Confidential</p>
        </div>
      </div>
    </div>
  );
}