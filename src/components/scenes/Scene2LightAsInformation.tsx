"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene2LightAsInformation({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.05 to 0.13
  const opacity = useTransform(scrollYProgress, [0.05, 0.08, 0.11, 0.14], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.05, 0.14], [0.8, 1.2]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  const photonZ1 = useTransform(scrollYProgress, [0.05, 0.14], [0, 200]);
  const photonZ2 = useTransform(scrollYProgress, [0.05, 0.14], [50, 300]);

  return (
    <motion.div 
      style={{ opacity, scale, display }}
      className="absolute inset-0 items-center justify-center pointer-events-none perspective-[1000px] flex-col"
    >
      <div className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-center transform-style-preserve-3d">
        <div className="absolute w-[200px] h-[200px] rounded-full bg-black border border-white/5 shadow-[0_0_100px_rgba(255,255,255,0.02)] translate-z-[-200px] opacity-40"></div>
        <motion.div style={{ translateZ: photonZ1 }} className="absolute left-1/4 top-1/3 w-32 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent blur-[1px] rotate-12" />
        <motion.div style={{ translateZ: photonZ2 }} className="absolute right-1/4 bottom-1/3 w-48 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent blur-[2px] -rotate-12" />
        <motion.div className="absolute bottom-1/4 text-center">
          <p className="text-[var(--color-accent)]/80 text-sm tracking-[0.2em] uppercase font-medium">Optical Signal</p>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--color-accent)]/50 to-transparent mx-auto mt-4" />
        </motion.div>
      </div>
    </motion.div>
  );
}
