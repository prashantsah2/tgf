





export default function Stats() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-7xl">
        {/* Logo */}
        <div className="flex justify-end mb-8 sm:mb-12">
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

        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 px-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            OVER A DECADE OF DEDICATION
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-blue-600">WHY</span>{" "}
            <span className="text-teal-500">US?</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-2">
            Serving clients globally
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Driven by a team of certified experts with 75+ years of combined experience.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 rounded-none">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0">
            {/* Projects Served */}
            <div className="text-center py-8 sm:py-12 px-4 sm:px-6 border-r border-white/20 border-b sm:border-b-0">
              <div className="text-white text-4xl sm:text-6xl font-bold mb-2 sm:mb-4">400+</div>
              <div className="text-white text-sm sm:text-lg font-medium">Projects</div>
              <div className="text-white text-sm sm:text-lg font-medium">Served</div>
            </div>

            {/* CO2 Prevented */}
            <div className="text-center py-8 sm:py-12 px-4 sm:px-6 border-b sm:border-b-0 sm:border-r border-white/20">
              <div className="text-white text-4xl sm:text-6xl font-bold mb-2 sm:mb-4">6.5 Million+</div>
              <div className="text-white text-sm sm:text-lg font-medium">Tons of CO<sub>2</sub></div>
              <div className="text-white text-sm sm:text-lg font-medium">prevented</div>
            </div>

            {/* Businesses Benefitted */}
            <div className="text-center py-8 sm:py-12 px-4 sm:px-6 border-r border-white/20 border-b lg:border-b-0">
              <div className="text-white text-4xl sm:text-6xl font-bold mb-2 sm:mb-4">125+</div>
              <div className="text-white text-sm sm:text-lg font-medium">Businesses</div>
              <div className="text-white text-sm sm:text-lg font-medium">Benefitted</div>
            </div>

            {/* Trees Saved */}
            <div className="text-center py-8 sm:py-12 px-4 sm:px-6 border-b lg:border-b-0 lg:border-r border-white/20">
              <div className="text-white text-4xl sm:text-6xl font-bold mb-2 sm:mb-4">12 Million+</div>
              <div className="text-white text-sm sm:text-lg font-medium">Trees</div>
              <div className="text-white text-sm sm:text-lg font-medium">Saved</div>
            </div>

            {/* Countries Covered */}
            <div className="text-center py-8 sm:py-12 px-4 sm:px-6 col-span-2 sm:col-span-1">
              <div className="text-white text-4xl sm:text-6xl font-bold mb-2 sm:mb-4">13+</div>
              <div className="text-white text-sm sm:text-lg font-medium">Countries</div>
              <div className="text-white text-sm sm:text-lg font-medium">Covered</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-gray-400 text-sm italic">Private & Confidential</p>
        </div>
      </div>
    </div>
  );
}