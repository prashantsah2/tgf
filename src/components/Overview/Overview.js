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
    <div className=" flex items-center justify-center bg-[#fff] px-6 sm:px-10 pt-8">
      <div className="w-full max-w-[1371px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="rounded-3xl min-h-[571px] bg-gradient-to-br from-blue-400 via-teal-600 to-emerald-400 p-10 sm:p-14 text-white flex flex-col justify-center "
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
              className="flex items-start gap-4 mb-16 last:mb-0 relative"
            >
              <div className={`text-lg font-semibold bg-[#444] w-12 h-12 flex justify-center items-center right-[-75px] rounded-full absolute top-[${i*25}px]`}>{i + 1}.</div>
              <p className="text-base w-full text-right sm:text-lg leading-relaxed font-light">
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
