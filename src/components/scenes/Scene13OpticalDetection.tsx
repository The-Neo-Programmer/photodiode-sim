"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene13OpticalDetection({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.80 to 0.87
  const opacity = useTransform(scrollYProgress, [0.80, 0.82, 0.85, 0.87], [0, 1, 1, 0]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  return (
    <motion.div 
      style={{ opacity, display }}
      className="absolute inset-0 flex-col items-center justify-center pointer-events-none"
    >
      <div className="absolute top-[15%] text-center w-full">
        <h2 className="text-xl md:text-2xl text-[var(--color-accent)] font-light tracking-wide mb-2">Signal Detection</h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          Pulsed optical data enters the device, and the precisely corresponding depletion physics convert it instantly into a readable electrical square wave.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-2xl mt-20 gap-8">
        {/* Optical Input */}
        <div className="flex-1 flex flex-col items-center gap-4 w-full">
          <span className="text-[10px] text-[var(--color-accent)] uppercase tracking-widest font-mono">Optical Input</span>
          <div className="h-16 w-full border-b border-white/10 flex items-center justify-around overflow-hidden px-4">
               <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 1] }} className="w-8 h-8 rounded-full bg-[var(--color-accent)] blur-sm" />
               <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2, times: [0, 0.5, 1] }} className="w-8 h-8 rounded-full bg-[var(--color-accent)] blur-sm" />
               <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4, times: [0, 0.5, 1] }} className="w-8 h-8 rounded-full bg-[var(--color-accent)] blur-sm" />
          </div>
        </div>

        <div className="text-white/20 px-4">→</div>

        {/* Electrical Output Trace */}
        <div className="flex-1 flex flex-col items-center gap-4 w-full">
          <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">Electrical Trace</span>
          <div className="h-16 w-full border border-white/5 bg-white/[0.02] rounded flex items-center justify-center overflow-hidden">
                <svg width="100%" height="100%" preserveAspectRatio="none" className="stroke-[var(--color-accent)]/80 stroke-[2px] fill-transparent">
                  <motion.path 
                    d="M 0 32 L 20 32 L 20 8 L 40 8 L 40 32 L 60 32 L 60 8 L 80 8 L 80 32 L 100 32"
                    vectorEffect="non-scaling-stroke"
                    animate={{ x: [0, -40] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path 
                    d="M 100 32 L 120 32 L 120 8 L 140 8 L 140 32 L 160 32 L 160 8 L 180 8 L 180 32 L 200 32"
                    vectorEffect="non-scaling-stroke"
                    animate={{ x: [0, -40] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
