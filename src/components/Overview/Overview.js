import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Overview() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const visionPoints = [
    {
      icon: "🌍",
      title: "Carbon Neutrality",
      text: "Work towards global carbon neutrality through innovative solutions and sustainable practices.",
    },
    {
      icon: "🌱",
      title: "Zero Impact",
      text: "Minimize environmental impact to zero, ensuring a healthier planet for future generations.",
    },
    {
      icon: "🤝",
      title: "Global Initiatives",
      text: "Implement worldwide initiatives with tangible social and economic benefits for communities.",
    },
  ];

  return (
    <div className="flex items-center justify-center bg-[#fff] px-6 sm:px-10 py-16 sm:py-24">
      <div className="w-full max-w-[1371px]">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
         

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-gray-800 text-xl sm:text-3xl font-bold mt-6 mb-1"
          >
            OUR
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 ml-2">
             COMPANY VISION
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-gray-600 text-sm max-w-xl mx-auto leading-comfortable"
          >
           To attain global carbon neutrality with
zero net harm while creating
measurable positive impacts
          </motion.p>
        </motion.div>

        {/* Vision Cards Grid */}
        <motion.div
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {visionPoints.map((point, i) => (
            <motion.div
              key={i}
              custom={i + 3}
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-8  transition-all duration-300 border border-gray-100"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg ">
                {i + 1}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {point.text}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full opacity-0 group-hover:opacity-100  duration-300" />
            </motion.div>
          ))}
        </motion.div>

      
      </div>
    </div>
  );
}