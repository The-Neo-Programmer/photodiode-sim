"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene8DarkCurrent({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.47 to 0.54
  const opacity = useTransform(scrollYProgress, [0.47, 0.49, 0.52, 0.54], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.47, 0.54], [0.95, 1.05]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  return (
    <motion.div 
      style={{ opacity, scale, display }}
      className="absolute inset-0 flex-col items-center justify-center pointer-events-none"
    >
      <div className="absolute top-1/4 text-center w-full">
        <h2 className="text-xl md:text-2xl text-white font-light tracking-wide mb-2">Dark Current</h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          Even in total darkness, thermal energy randomly creates a few carriers that drift across the junction, causing a tiny but measurable "dark current."
        </p>
      </div>

      <div className="mt-20 relative w-full max-w-xl h-64 mx-auto flex items-stretch border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex-1 bg-[#2A1010]/30 border-r border-white/20 relative" />
        <div className="w-64 bg-black relative flex items-center justify-center overflow-hidden">
           {/* Stray minority carriers drifting */}
           <motion.div 
             animate={{ x: [-100, 100], opacity: [0, 1, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             className="absolute w-3 h-3 rounded-full bg-[#CA4A4A] flex items-center justify-center top-1/3"
           >
             <span className="text-[6px] text-white">+</span>
           </motion.div>
           <motion.div 
             animate={{ x: [100, -100], opacity: [0, 1, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
             className="absolute w-3 h-3 rounded-full bg-[#4A8ACA] flex items-center justify-center bottom-1/3"
           >
             <span className="text-[6px] text-white">-</span>
           </motion.div>
        </div>
        <div className="flex-1 bg-[#0A1A2F]/30 border-l border-white/20 relative" />
      </div>
    </motion.div>
  );
}
