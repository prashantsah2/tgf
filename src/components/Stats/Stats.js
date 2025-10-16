export default function Stats() {
  return (
    <div className="min-h-screen bg-[#fff] flex items-center justify-center p-4 sm:p-10">
      <div className="w-full max-w-6xl">
       

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800 mb-2">
            OVER A DECADE OF DEDICATION
          </h2>
          <h3 className="text-4xl sm:text-6xl font-bold">
            <span className="text-blue-600">WHY</span>{" "}
            <span className="text-teal-500">US?</span>
          </h3>
          <p className="text-gray-600 text-base sm:text-lg mt-4">
            Serving clients globally with a team of certified experts
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Over 75+ years of combined experience.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl  overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-t border-gray-100">
            {[
              { value: "400+", label1: "Projects", label2: "Served" },
              { value: "6.5M+", label1: "Tons of CO₂", label2: "Prevented" },
              { value: "125+", label1: "Businesses", label2: "Benefitted" },
              { value: "12M+", label1: "Trees", label2: "Saved" },
              { value: "13+", label1: "Countries", label2: "Covered" },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center py-8 px-4 border-b sm:border-b-0 sm:border-r last:border-r-0 border-gray-100"
              >
                <div className="text-gray-800 text-3xl sm:text-5xl font-bold mb-2">
                  {item.value}
                </div>
                <div className="text-gray-600 text-sm sm:text-base font-medium">
                  {item.label1}
                </div>
                <div className="text-gray-600 text-sm sm:text-base font-medium">
                  {item.label2}
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </div>
  );
}
