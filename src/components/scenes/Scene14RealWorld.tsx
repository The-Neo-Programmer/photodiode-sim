"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene14RealWorld({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.86 to 0.93
  const opacity = useTransform(scrollYProgress, [0.86, 0.88, 0.91, 0.93], [0, 1, 1, 0]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  return (
    <motion.div 
      style={{ opacity, display }}
      className="absolute inset-0 flex-col items-center justify-center pointer-events-none"
    >
      <div className="absolute top-[15%] text-center w-full">
        <h2 className="text-xl md:text-2xl text-white font-light tracking-wide mb-2">Real-World Application</h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          From optical communication to ambient light sensing, photodiodes form the vital bridge between photons and electronics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto w-full px-6">
        <div className="flex flex-col items-center text-center gap-4 border border-white/5 bg-white/[0.01] p-6 rounded-2xl backdrop-blur-sm">
           <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-2">
             <div className="w-4 h-4 bg-[var(--color-accent)]/80 rounded-full blur-[2px]" />
           </div>
           <h3 className="text-sm text-white/80 tracking-wide">Fiber Optics</h3>
           <p className="text-xs text-white/40">High-speed data reception in internet backbone networks.</p>
        </div>
        <div className="flex flex-col items-center text-center gap-4 border border-white/5 bg-white/[0.01] p-6 rounded-2xl backdrop-blur-sm translate-y-0 md:translate-y-8">
           <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-2">
             <div className="w-4 h-4 bg-red-500/80 rounded-full blur-[2px]" />
           </div>
           <h3 className="text-sm text-white/80 tracking-wide">IR Receivers</h3>
           <p className="text-xs text-white/40">Detecting infrared pulses from remote controls and sensors.</p>
        </div>
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
