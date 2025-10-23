import { useState } from 'react';
import { X, Mail, Phone, MapPin, Linkedin } from 'lucide-react';


export default function WorkerProfile({ onClose ,workerData = {
  name: "Sweta",
  role: "HR Manager",
  company: "ENÈR GREEN",
  image: "/api/placeholder/400/400",
  bio: [
    "She brings five years of versatile experience across the Healthcare, Manufacturing, and Climate Change sectors, with strong expertise in HR operations, talent management, payroll processing, and office administration. Her professional background includes managing correspondence, designing efficient filing systems, supervising clerical staff, and ensuring timely updates on compliance requirements.",
    "She holds a Master's degree in Economics (2025) and an Economics Honors degree from Kalindi College, University of Delhi (2019). With a strong foundation in economic principles and organizational behavior, she applies analytical and strategic thinking to HR management, aligning workforce strategies with business objectives, fostering employee engagement, and ensuring compliance with labor regulations."
  ],
  contact: {
    email: "sweta@energreen.com",
    phone: "+91 98765 43210",
    location: "New Delhi, India",
    linkedin: "linkedin.com/in/sweta"
  },
  experience: 5,
    education: "Master's in Economics",
    sectors: ["Healthcare", "Manufacturing", "Climate Change"],
  skills: [
    { name: "Public Relations", value: 95 },
    { name: "Problem Solving", value: 90 },
    { name: "Conflict Resolution", value: 85 },
    { name: "Emotional Intelligence", value: 88 },
    { name: "Trustworthiness", value: 92 },
    { name: "Creativity", value: 80 }
  ]
}}) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-green-500 rounded-full"></div>
            <h2 className="text-lg font-semibold text-gray-900">{workerData.name}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left - Profile */}
            <div className="md:col-span-1">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 bg-gray-100">
                <img 
                  src={workerData.image} 
                  alt={workerData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{workerData.name}</h3>
              <p className="text-sm text-green-600 font-medium mb-4">{workerData.role}</p>

              {/* Contact */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-600">{workerData.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-600">{workerData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-600">{workerData.contact.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-600">{workerData.contact.linkedin}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Experience</p>
                  <p className="text-sm font-medium text-gray-900">{workerData.experience} Years</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Education</p>
                  <p className="text-sm font-medium text-gray-900">{workerData.education}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Sectors</p>
                  <p className="text-sm font-medium text-gray-900">{workerData.sectors.join(", ")}</p>
                </div>
              </div>
            </div>

            {/* Right - Details */}
            <div className="md:col-span-2">
              {/* Bio */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-green-500 rounded-full"></div>
                  About
                </h4>
                <div className="space-y-3">
                  {workerData.bio.map((paragraph, index) => (
                    <p key={index} className="text-xs text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-4 bg-green-500 rounded-full"></div>
                  Key Skills
                </h4>
                <div className="space-y-3">
                  {workerData.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs font-medium text-gray-700">{skill.name}</span>
                        <span className="text-xs text-green-600 font-medium">{skill.value}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.value}%`,
                            animation: `slideIn 1s ease-out ${index * 0.1}s backwards`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
}