"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene8RealWorld({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible from 0.85 to 0.95
  const opacity = useTransform(scrollYProgress, [0.85, 0.88, 0.92, 0.95], [0, 1, 1, 0]);

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="text-center mb-16">
        <h2 className="text-xl md:text-2xl text-white font-light tracking-wide mb-2">Real-World Application</h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          From optical communication to ambient light sensing, 
          photodiodes are the bridge between the optical and digital world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 max-w-4xl mx-auto w-full px-6">
        
        {/* Optical Communications */}
        <div className="flex flex-col items-center text-center gap-4 border border-white/5 bg-white/[0.01] p-6 rounded-2xl backdrop-blur-sm">
           <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-2">
             <div className="w-4 h-4 bg-[var(--color-accent)]/80 rounded-full blur-[2px]" />
           </div>
           <h3 className="text-sm text-white/80 tracking-wide">Fiber Optics</h3>
           <p className="text-xs text-white/40">High-speed data reception in internet backbone networks.</p>
        </div>

        {/* Remote Control Systems */}
        <div className="flex flex-col items-center text-center gap-4 border border-white/5 bg-white/[0.01] p-6 rounded-2xl backdrop-blur-sm translate-y-0 md:translate-y-8">
           <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-2">
             <div className="w-4 h-4 bg-red-500/80 rounded-full blur-[2px]" />
           </div>
           <h3 className="text-sm text-white/80 tracking-wide">IR Receivers</h3>
           <p className="text-xs text-white/40">Detecting infrared pulses from remote controls and sensors.</p>
        </div>
        
        {/* Safety */}
        <div className="flex flex-col items-center text-center gap-4 border border-white/5 bg-white/[0.01] p-6 rounded-2xl backdrop-blur-sm">
           <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-2">
             <div className="w-6 h-[1px] bg-white/50 rotate-45" />
           </div>
           <h3 className="text-sm text-white/80 tracking-wide">Smoke Detectors</h3>
           <p className="text-xs text-white/40">Sensing light scattering caused by airborne particles.</p>
        </div>

      </div>
    </motion.div>
  );
}
