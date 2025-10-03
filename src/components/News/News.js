import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      region: "North America",
      date: "9/3/2025",
      title: "U.S. Appeals Court Backs Trump EPA in Terminating $16 Billion Climate Grants",
      image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "American flag with city skyline"
    },
    {
      id: 2,
      region: "GCC",
      date: "9/3/2025", 
      title: "FAB Issues Gulf's First Blue Bond",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Middle Eastern cityscape at sunset"
    },
    {
      id: 3,
      region: "EU-UK",
      date: "9/3/2025",
      title: "EU Plans to Close Loopholes in Carbon Border Tax Regime",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "EU flag"
    },
    {
      id: 4,
      region: "Asia-Pacific",
      date: "9/3/2025",
      title: "ASEAN Sustainability Reporting Standards Strengthen Regional Climate Ties in Southeast Asia",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Modern Asian architecture"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              LATEST NEWS
            </h2>
            <p className="text-lg text-gray-600">
              Discover the latest in sustainability
            </p>
          </div>
          <button className="flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200">
            View All
            <ArrowUpRight className="ml-1 h-5 w-5" />
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 group cursor-pointer">
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Region and Date */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-teal-600">
                    {item.region}
                  </span>
                  <span className="text-sm text-gray-500">
                    {item.date}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight group-hover:text-teal-600 transition-colors duration-200">
                  {item.title}
                </h3>
                
                {/* Arrow Link */}
                <div className="flex justify-end">
                  <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-teal-600 transition-colors duration-200" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Promotional Overlay Card */}
      <div className="absolute bottom-8 right-8 bg-slate-800 text-white p-6 rounded-lg shadow-lg max-w-sm z-10">
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">
            Curious About Your Companys Sustainability Score?
          </h3>
          <div className="text-sm text-gray-300 italic">
           
          </div>
        </div>
        <button className="w-full bg-white text-slate-800 font-medium py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200">
          Check My Score Now
        </button>
      </div>
    </section>
  );
};

export default News;