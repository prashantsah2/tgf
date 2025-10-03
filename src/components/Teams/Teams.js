import Image from 'next/image'

const teamMembers = [
  {
    id: 1,
    name: "Zaid Schwartz",
    role: "Founder & CEO",
    description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: "/team/zaid.jpg",
    bgColor: "bg-green-100"
  },
  {
    id: 2,
    name: "Lily-Rose Chedjou",
    role: "Engineering Manager",
    description: "Lead engineering teams at Netflix, Pitch, and Protocol Labs.",
    image: "/team/lily-rose.jpg",
    bgColor: "bg-amber-100"
  },
  {
    id: 3,
    name: "Amélie Laurent",
    role: "Product Designer",
    description: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
    image: "/team/amelie.jpg",
    bgColor: "bg-purple-100"
  },
  {
    id: 4,
    name: "Riley O'Moore",
    role: "Frontend Developer",
    description: "Former frontend dev for Linear, Coinbase, and Postscript.",
    image: "/team/riley.jpg",
    bgColor: "bg-yellow-100"
  },
  {
    id: 5,
    name: "Cameron Yang",
    role: "UX Researcher",
    description: "Lead user research for 250k+ Contractor for leading mobile games.",
    image: "/team/cameron.jpg",
    bgColor: "bg-gray-200"
  },
  {
    id: 6,
    name: "Orlando Smith",
    role: "Backend Engineer",
    description: "Former backend engineer at Stripe, Uber, and other startups.",
    image: "/team/orlando.jpg",
    bgColor: "bg-slate-200"
  }
]

export default function Teams() {
  return (
    <div className="bg-gray-50 min-h-screen w-full">
    

      {/* Main Content */}
      <div className="max-w-[1371px] mx-auto py-16">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Meet the talented team who make all this happen
            </h1>
          </div>
          <div className="lg:pt-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              Our philosophy is simple; hire great people and give them the resources and support to do their best work.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className={`${member.bgColor} aspect-square relative`}>
                {/* Placeholder for team member image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
           {` We're looking for talented people`}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Untitled is growing fast, and we are always looking for passionate, dynamic, 
            and talented individuals to join our distributed team all around the world.
          </p>
        </div>
      </div>
    </div>
  )
}