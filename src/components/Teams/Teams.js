import Image from 'next/image'
import WorkProfile from '../WorkProfile/WorkProfile';
import { useState } from 'react';
import workers from './workers.json';

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


const teamMember = [
  { name: 'Ruchika', surname: 'Sharma', image: '/image/page 14 - Our Core Team (2)',id:12 },
  { name: 'Abhishek K', surname: 'Srivastava', image: '/api/placeholder/150/150',id:13 },
  { name: 'Ajay', surname: 'Srivastava', image: '/api/placeholder/150/150',id:14 },
  { name: 'Nishad', surname: 'Nanavaty', image: '/api/placeholder/150/150',id:15 },
  { name: 'Puneet', surname: 'Chopra', image: '/api/placeholder/150/150',id:16 },
  { name: 'Anchal', surname: 'Srivastava', image: '/api/placeholder/150/150',id:17 },
  { name: 'Kallol', surname: 'Borah', image: '/api/placeholder/150/150',id:18 },
  { name: 'Aniket Kumar', surname: 'Srotriya', image: '/api/placeholder/150/150',id:19 },
  { name: 'Utkarsh', surname: 'Thakur', image: '/api/placeholder/150/150',id:20 },
  { name: 'Sweta', surname: 'Kn', image: '/api/placeholder/150/150',id:21 },
  { name: 'Hemang', surname: 'Awasthi', image: '/api/placeholder/150/150',id:22 },
  { name: 'Gayathri', surname: 'Nagalingam', image: '/api/placeholder/150/150',id:23 },
  { name: 'Akash', surname: 'Dixit', image: '/api/placeholder/150/150',id:24 },
  { name: 'Aakashdeep', surname: '', image: '/api/placeholder/150/150',id:25 },
];

export default function Teams() {

  const [showWorkProfile, setShowWorkProfile] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  function handleClick(userId) {
  const user = workers.find((u) => u.id === userId);
  if (user){

  setShowWorkProfile(true);
  setSelectedMember(user);}
  else{
    setSelectedMember(false);
  }
}


  return (
    <div className="bg-[#fff] min-h-screen w-full">
    

      {/* Main Content */}
      <div className="max-w-[1371px] mx-auto py-16">
        {/* Header Section */}
        <div className="grid lg:grid-cols-1  items-start mb-20">
          <div>
            <h1 className="text-xl lg:text-2xl font-outfit  text-gray-900 leading-[21px]">
              Meet the talented team<br></br> who make all this happen 
            </h1>
          </div>
          <div className="pt-4">
            <p className="text-md font-sans text-gray-600 leading-relaxed max-sm:text-xs max-sm:leading-2">
              Our philosophy is simple; hire great people and give <br></br> them the resources and support to do their best work.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-20">
          {teamMember.map((member,index) => (
            <div key={member.id} className="bg-white border-[1px] border-[#eee] border-solid rounded-lg  overflow-hidden  hover:shadow-md transition-shadow"
            onClick={() => {
             handleClick(member.id);
            }}

            >
              <div className={`${member.bgColor} aspect-square relative mx-4 scale-75` }>
                {/* Placeholder for team member image */}
               <img className='rounded-full' src={`/image/page 14 - Our Core Team (${index+1}).png`} width={1211} height={1211} />
              </div>
              <div className="pt-3 pb-6 pl-2 text-center">
                <h3 className="text-md font-sans text-gray-900 mb-1">{member.name +' ' +member.surname}</h3>
                <p className="text-[#bfbfbf] font-sans text-sm mb-3">{member.role?member.role:'this is role'}</p>
               {/*  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p> */}
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Section */}
       {/*  <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
           {` We're looking for talented people`}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Untitled is growing fast, and we are always looking for passionate, dynamic, 
            and talented individuals to join our distributed team all around the world.
          </p>
        </div> */}
        {showWorkProfile && <>
        <WorkProfile member={selectedMember} onClose={()=>{setShowWorkProfile(false)}} />
        </>}
      </div>
    </div>
  )
}