export default function CourseDescription() {
  return (
    <div className="min-h-screen bg-white py-8 px-4 pt-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-outfit text-slate-900 mb-4">
            Service Description
          </h1>
          <p className="text-md font-sans text-[#313131] leading-relaxed font-light">
            Dive into the fundamentals of carbon markets with our beginner-level course, 
            <span className="font-semibold"> {`"Understanding Carbon Markets: Level 1."`}</span> 
            Led by industry experts with years of hands-on experience, the course is designed for those 
            eager to understand climate change mitigation, project registration and carbon trading. 
            This course covers essential topics laying the groundwork for comprehending the complexities 
            and opportunities within carbon markets.
          </p>
        </div>

        {/* Key Topics Section */}
        <div className="bg-slate-50 p-6 border border-slate-200">
          <h2 className="text-2xl font-outfit text-slate-900 mb-6">
            Key Topics Covered
          </h2>

          <div className="space-y-4">
            {/* Topic 1 */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-200 text-slate-700 font-bold text-sm">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-md text-slate-900 mb-1">
                  Understanding Climate Change
                </h3>
                <p className="text-xs text-slate-600">
                  Explore the science behind climate change and its global impacts.
                </p>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-200 text-slate-700 font-bold text-sm">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-md text-slate-900 mb-1">
                  Introduction to Carbon Markets
                </h3>
                <p className="text-xs text-slate-600">
                  Learn how carbon markets address climate change and reduce greenhouse gas emissions.
                </p>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-200 text-slate-700 font-bold text-sm">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-md text-slate-900 mb-1">
                  Types and History of Carbon Markets
                </h3>
                <p className="text-xs text-slate-600">
                  Trace the evolution of carbon markets and understand the different types, including voluntary and compliance markets.
                </p>
              </div>
            </div>

            {/* Topic 4 */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-200 text-slate-700 font-bold text-sm">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-md text-slate-900 mb-1">
                  Carbon Credits and Emissions
                </h3>
                <p className="text-xs text-slate-600">
                  Learn about carbon credits, emission baselines, project tracking, and factors influencing credit quality and pricing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-start items-start">
            <div className="border-[1px] text-sm font-sans border-[#dedede] border-solid mt-2 px-2 py-2">
                <span className="px-4 py-2 bg-slate-900 text-[#222]">Duration:</span> <span className="px-4 py-2"> 4 Weeks (16 Hours)</span>
            </div> 
              <div className="border-[1px] text-sm font-sans mt-2 ml-2 border-[#cfcfcf] border-solid px-2 py-2">
                <span className="px-4 py-2 bg-slate-900 text-[#222]">Cost:</span> <span className="px-4 py-2"> 8999</span>
            </div>
            
        </div>

        <div className="mt-2 text-2xl font-outfit mt-8">
          <div className="mt-2 text-2xl font-outfit mb-4">Contact Details</div>

          <div className="text-sm font-sans text-[#313131] leading-relaxed font-light">
            For more information, please reach out to us at: <br/>
            <span className="font-semibold pt-2 mb-2">Email:</span> trainings@enengspl.com

            <br/>
            <span className="font-semibold pt-2 mb-2 ">Phone:</span> +91-8697156199
            </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 text-center">
          <button className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}