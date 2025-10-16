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
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff] px-6 sm:px-10">
      <div className="w-full max-w-[1371px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="rounded-3xl bg-gradient-to-br from-blue-600 via-teal-500 to-emerald-400 p-10 sm:p-14 text-white flex flex-col justify-center min-h-[400px]"
        >
          {[
            "Work towards global carbon neutrality.",
            "Minimize environmental impact to zero.",
            "Implement global initiatives with tangible social and economic benefits.",
          ].map((text, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              className="flex items-start gap-4 mb-8 last:mb-0"
            >
              <div className="text-lg font-semibold">{i + 1}.</div>
              <p className="text-base sm:text-lg leading-relaxed font-light">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="space-y-6 flex flex-col justify-center min-h-[400px]"
        >
          <motion.h3
            variants={fadeUp}
            custom={0}
            className="text-teal-600 text-sm sm:text-base font-semibold tracking-widest"
          >
            ENEO GREEN
          </motion.h3>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-gray-800 text-3xl sm:text-4xl font-semibold"
          >
            OUR COMPANY’S VISION
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg"
          >
            To achieve global carbon neutrality with zero net harm while
            generating measurable, positive environmental and social outcomes.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="h-1 w-28 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"
          />

       
        </motion.div>
      </div>
    </div>
  );
}
