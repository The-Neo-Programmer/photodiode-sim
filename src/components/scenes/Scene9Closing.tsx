"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene9Closing({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Fade in at the very end
  const opacity = useTransform(scrollYProgress, [0.95, 0.98, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0.95, 1], [50, 0]);

  return (
    <motion.div 
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
    >
      <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 font-[var(--font-sans)] drop-shadow-lg">
        Luma
      </h1>
      <p className="text-base md:text-lg text-white/50 font-light max-w-xl mx-auto leading-relaxed">
        Incident light generates charge carriers in a reverse-biased junction, 
        producing a measurable current used for detection.
      </p>
      
      <div className="mt-20 w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent mx-auto" />
    </motion.div>
  );
}
