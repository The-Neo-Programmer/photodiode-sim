"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene1Opening({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Scene 1 is visible from 0 to 0.1, and fades out by 0.15
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);

  return (
    <motion.div 
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
    >
      <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white mb-6 font-[var(--font-sans)] drop-shadow-lg">
        Luma
      </h1>
      <p className="text-lg md:text-xl text-white/60 font-light max-w-xl mx-auto leading-relaxed">
        How a photodiode converts incident light <br className="hidden md:block"/> into an electrical signal.
      </p>
    </motion.div>
  );
}
