import { useState } from 'react';

export default function Stats() {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const statsData = [
    {
      value: "400+",
      label1: "Projects",
      label2: "Served",
      hoverContent: {
        title: "400+ Projects Delivered",
        description: "From small-scale implementations to enterprise-wide transformations",
        details: [
          "Residential solar installations: 180+",
          "Commercial & industrial projects: 150+",
          "Utility-scale developments: 45+",
          "Energy efficiency audits: 25+",
        ],
        highlight: "98.5% client satisfaction rate across all projects"
      }
    },
    {
      value: "6.5M+",
      label1: "Tons of CO₂",
      label2: "Prevented",
      hoverContent: {
        title: "6.5M+ Tons CO₂ Emissions Prevented",
        description: "Making a measurable impact on climate change",
        details: [
          "Equivalent to planting 107M trees",
          "Equal to removing 1.4M cars off the road yearly",
          "Saves 2.8B liters of gasoline consumption",
          "Powers 850K homes with clean energy",
        ],
        highlight: "Contributing to global carbon neutrality goals"
      }
    },
    {
      value: "125+",
      label1: "Businesses",
      label2: "Benefitted",
      hoverContent: {
        title: "125+ Businesses Transformed",
        description: "Empowering organizations across diverse industries",
        details: [
          "Manufacturing sector: 35 companies",
          "Retail & hospitality: 28 companies",
          "Technology & IT: 24 companies",
          "Healthcare & education: 38 companies",
        ],
        highlight: "Average energy cost reduction of 42% per client"
      }
    },
    {
      value: "12M+",
      label1: "Trees",
      label2: "Saved",
      hoverContent: {
        title: "12M+ Trees Preserved",
        description: "Protecting forests through renewable energy adoption",
        details: [
          "Equivalent to 30,000 acres of forest",
          "Prevents deforestation in sensitive ecosystems",
          "Supports biodiversity conservation",
          "Maintains natural carbon sinks",
        ],
        highlight: "Every megawatt installed saves 200+ trees annually"
      }
    },
    {
      value: "13+",
      label1: "Countries",
      label2: "Covered",
      hoverContent: {
        title: "13+ Countries Worldwide",
        description: "Global reach with local expertise",
        details: [
          "North America: USA, Canada, Mexico",
          "Europe: UK, Germany, France, Spain",
          "Asia-Pacific: India, Japan, Australia",
          "Middle East: UAE, Saudi Arabia",
        ],
        highlight: "24/7 multilingual support across all regions"
      }
    },
  ];

  const handleMouseMove = (e, index) => {
    setHoveredStat(index);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredStat(null);
  };

  return (
    <div className="bg-[#fff] flex items-center justify-center p-4 sm:p-10 relative">
      <div className="w-full max-w-[1371px]">
        {/* Header */}
        <div className="text-center mb-12 max-sm:mb-4">
          <h2 className="text-xl sm:text-3xl font-outfit text-gray-800 mb-2 max-sm:text-xl">
            OVER A DECADE OF DEDICATION
          </h2>
          <h3 className="text-xl sm:text-3xl font-bold font-outfit max-sm:text-xl">
            <span className="text-blue-600">WHY</span>{" "}
            <span className="text-teal-500">US?</span>
          </h3>
          <p className="text-gray-600 text-base sm:text-sm font-sans mt-4 max-sm:hidden">
            Serving clients globally with a team of certified experts
          </p>
          <p className="text-gray-700 text-base sm:text-sm font-sans mt-2 max-sm:hidden">
            Over 75+ years of combined experience.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-t border-gray-100">
            {statsData.map((item, i) => (
              <div
                key={i}
                className="text-center py-8 px-4 border-b sm:border-b-0 sm:border-r last:border-r-0 border-gray-100 max-sm:p-4 cursor-pointer transition-all duration-200 hover:bg-gray-50"
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-gray-800 text-xl sm:text-5xl font-bold mb-2 font-outfit">
                  {item.value}
                </div>
                <div className="text-gray-600 text-sm sm:text-base font-sans max-sm:text-xs">
                  {item.label1}
                </div>
                <div className="text-gray-600 text-sm sm:text-base font-sans max-sm:text-xs">
                  {item.label2}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Card */}
      {hoveredStat !== null && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: `${mousePosition.x + 20}px`,
            top: `${mousePosition.y - 100}px`,
          }}
        >
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 w-80 animate-in fade-in duration-200">
            <h4 className="text-lg font-bold text-gray-800 mb-2 font-outfit">
              {statsData[hoveredStat].hoverContent.title}
            </h4>
            <p className="text-sm text-gray-600 mb-4 font-sans">
              {statsData[hoveredStat].hoverContent.description}
            </p>
            
            <div className="space-y-2 mb-4">
              {statsData[hoveredStat].hoverContent.details.map((detail, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700 font-sans">{detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-3 border-l-4 border-blue-600">
              <p className="text-xs font-semibold text-gray-800 font-sans">
                {statsData[hoveredStat].hoverContent.highlight}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}