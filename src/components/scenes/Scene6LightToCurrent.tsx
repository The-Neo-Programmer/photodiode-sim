"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useLumaStore } from "@/lib/store";

export function Scene6LightToCurrent({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { lightIntensity } = useLumaStore();
  
  // Visible from 0.65 to 0.75
  const opacity = useTransform(scrollYProgress, [0.65, 0.7, 0.75, 0.8], [0, 1, 1, 0]);

  // Dark current is minimal, photo current scales with light intensity
  const currentLevel = 5 + (lightIntensity / 100) * 80; // height percentage

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="absolute top-1/4 text-center w-full">
        <h2 className="text-xl md:text-2xl text-white font-light tracking-wide mb-2">Light to Current</h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          Higher incident light intensity creates more electron-hole pairs, 
          directly proportionally increasing the photocurrent.
        </p>
      </div>

      <div className="flex items-end justify-center h-64 w-full max-w-md gap-16 mt-20">
        
        {/* Light Level Visualization */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-32 bg-white/5 rounded-full overflow-hidden relative border border-white/10">
            <div 
              className="absolute bottom-0 w-full bg-[var(--color-accent)]/80 transition-all duration-300"
              style={{ height: `${lightIntensity}%` }}
            />
          </div>
          <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Intensity</span>
        </div>

        {/* Current Meter Visualization */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-32 bg-white/5 rounded-full overflow-hidden relative border border-white/10">
             {/* Small baseline represents Dark Current */}
            <div className="absolute bottom-0 w-full h-[5%] bg-[#CA4A4A]/50 border-t border-[#CA4A4A]" />
            
            <div 
              className="absolute bottom-[5%] w-full bg-white/80 transition-all duration-300"
              style={{ height: `${currentLevel}%` }}
            />
          </div>
          <div className="text-center flex flex-col space-y-1">
             <span className="text-[10px] text-[var(--color-accent)] uppercase tracking-widest font-mono">Photocurrent</span>
             {lightIntensity === 0 && <span className="text-[9px] text-[#CA4A4A] tracking-wider uppercase font-mono mt-1">(Dark Current)</span>}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
