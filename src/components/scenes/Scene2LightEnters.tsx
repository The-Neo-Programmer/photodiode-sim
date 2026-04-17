"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene2LightEnters({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Scene 2 fades in from 0.08 to 0.15, peaks at 0.15-0.2, fades out 0.25
  const opacity = useTransform(scrollYProgress, [0.08, 0.15, 0.2, 0.25], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.08, 0.25], [0.8, 1.2]);

  // Motion values for the photon streams
  const photonZ1 = useTransform(scrollYProgress, [0.08, 0.25], [0, 200]);
  const photonZ2 = useTransform(scrollYProgress, [0.08, 0.25], [50, 300]);

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none perspective-[1000px]"
    >
      <div className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-center transform-style-preserve-3d">
        
        {/* Distant Device Silhouette */}
        <div className="absolute w-[200px] h-[200px] rounded-full bg-black border border-white/5 shadow-[0_0_100px_rgba(255,255,255,0.02)] translate-z-[-200px] opacity-40"></div>

        {/* Photon beams mapping towards the center */}
        <motion.div 
          style={{ translateZ: photonZ1 }}
          className="absolute left-1/4 top-1/3 w-32 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent blur-[1px] rotate-12"
        />
        <motion.div 
          style={{ translateZ: photonZ2 }}
          className="absolute right-1/4 bottom-1/3 w-48 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent blur-[2px] -rotate-12"
        />
        
        {/* Label */}
        <motion.div className="absolute bottom-1/4 text-center">
          <p className="text-[var(--color-accent)]/80 text-sm tracking-[0.2em] uppercase font-medium">Optical Signal</p>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--color-accent)]/50 to-transparent mx-auto mt-4" />
        </motion.div>

      </div>
    </motion.div>
  );
}
