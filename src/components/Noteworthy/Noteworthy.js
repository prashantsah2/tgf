import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Medal, Users, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const achievements = [
  {
    id: 1,
    title: "TOP 10 ESG",
    subtitle: "Among Top 10 ESG and Sustainability Consultants in India",
    icon:`/image/page 3 - icons (5).png`,
    color: "from-blue-500 to-teal-500",

  },
  {
    id: 2,
    title: "AA1000AS Licensed",
    subtitle: "Assurance Provider Accountability",
    icon: `/image/page 3 - icons (1).png`,
    color: "from-teal-500 to-green-500"
  },
  {
    id: 3,
    title: "GOLD 2023",
    subtitle: "EcoVadis Sustainability Rating",
    icon: `/image/page 3 - icons (2).png`,
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: 4,
    title: "APPROVED",
    subtitle: "EcoVadis Consultant - Issued 2025",
    icon: `/image/page 3 - icons (3).png`,
    color: "from-green-500 to-teal-500"
  },
  {
    id: 5,
    title: "APPROVED",
    subtitle: "EcoVadis Training Partner - 2025",
    icon: `/image/page 3 - icons (4).png`,
    color: "from-teal-600 to-blue-600"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function AchievementsShowcase() {
  return (
    <div className=" bg-white py-16 px-4 max-sm:px-4 lg:px-8 flex flex-col items-center justify-center max-sm:pb-8">
      <div className="max-w-[1391px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-sm:mb-0"
        >
          <div className="flex items-center justify-between mb-12 max-sm:mb-2">
             <div className='w-full text-3xl text-center max-sm:text-xl'>
        <h2 className="font-sans mx-auto text-gray-800 mb-6 w-full text-left max-sm:mb-4">
         NOTEWORTHY <span className="bg-gradient-to-r font-bold font-outfit from-blue-600 to-teal-500 bg-clip-text text-transparent">ARCHIVEMENTS</span>
        </h2>
      </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 max-sm:gap-2 max-sm:mb-4"
        >
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 max-sm:px-2 h-full flex flex-col items-center text-center border-2 border-gray-100">
                  {/* Icon Badge */}
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 max-sm:mb-2 `}>
                    
                    <img src={`${achievement.icon}`} width={311} height={411} className='w-full h-full' />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-outfit text-gray-800 mb-2 max-sm:text-sm">
                    {achievement.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-sm text-gray-600 leading-relaxed font-sans max-xs:text-xs">
                    {achievement.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t-2 border-dashed border-gray-200 pt-8"
        >
          <h2 className="text-xl md:text-xl font-sans text-center text-gray-800 max-sm:text-sm">
           {` India's First Gold-rated and Accredited Sustainability Service Provider`}
          </h2>
        </motion.div>
      </div>
    </div>
  );
}