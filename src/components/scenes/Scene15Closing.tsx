"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export function Scene15Closing({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Fade in at the very end 0.93 to 1.0
  const opacity = useTransform(scrollYProgress, [0.93, 0.98, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0.93, 1], [50, 0]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  return (
    <motion.div 
      style={{ opacity, y, display }}
      className="absolute inset-0 flex-col items-center justify-center text-center px-6 pointer-events-none"
    >
      <div className="mb-8 opacity-90 drop-shadow-2xl">
        <Image 
          src="/Luma-icon.png" 
          alt="Luma Identity" 
          width={80} 
          height={80} 
          sizes="80px"
          className="mx-auto"
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 font-[var(--font-sans)] drop-shadow-lg">
        Luma
      </h1>
      <p className="text-base md:text-lg text-white/50 font-light max-w-xl mx-auto leading-relaxed font-[var(--font-sans)]">
        Incident light generates charge carriers in a reverse-biased junction, 
        producing a measurable current used for detection.
      </p>
      
      <div className="mt-20 w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent mx-auto" />
    </motion.div>
  );
}
