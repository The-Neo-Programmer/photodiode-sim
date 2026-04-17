"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene5NType({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.25 to 0.34
  const opacity = useTransform(scrollYProgress, [0.25, 0.27, 0.32, 0.34], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.25, 0.34], [0.95, 1.05]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  return (
    <motion.div 
      style={{ opacity, scale, display }}
      className="absolute inset-0 flex-col items-center justify-center pointer-events-none"
    >
      <div className="absolute top-1/4 text-center w-full">
        <h2 className="text-xl md:text-2xl text-[#4A8ACA] font-light tracking-wide mb-2">N-Type Doping</h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          Doping with pentavalent impurities provides an excess of negatively charged free electrons, leaving behind positively charged donor ions.
        </p>
      </div>

      <div className="mt-20 relative w-64 h-64 md:w-80 md:h-80 mx-auto bg-[#0A1A2F]/30 border border-[#1A3A5F] rounded-2xl flex flex-wrap content-center justify-center gap-6 p-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="relative w-12 h-12 flex items-center justify-center">
            {/* Donor Ion (Positive) */}
            <div className="w-8 h-8 rounded border border-[#4A8ACA]/40 flex items-center justify-center bg-black/50">
              <span className="text-[#4A8ACA]/60 text-[10px]">+</span>
            </div>
            {/* Free Electron (Negative) */}
            <motion.div 
               animate={{ x: [0, -6, 3, 0], y: [0, 5, -2, 0] }}
               transition={{ duration: 2.5 + i, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-[#4A8ACA] shadow-[0_0_8px_#4A8ACA] text-white flex items-center justify-center text-[7px]"
            >
               e⁻
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
