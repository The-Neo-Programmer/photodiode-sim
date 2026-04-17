"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene2LightAsInformation({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.13 to 0.20 (shifted to make room for new Scene2 "What is a Photodiode")
  const opacity = useTransform(scrollYProgress, [0.13, 0.15, 0.18, 0.20], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.13, 0.20], [0.85, 1.15]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  const photonZ1 = useTransform(scrollYProgress, [0.13, 0.20], [0, 200]);
  const photonZ2 = useTransform(scrollYProgress, [0.13, 0.20], [50, 300]);

  return (
    <motion.div 
      style={{ opacity, scale, display }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none perspective-[1000px] flex-col"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/8 blur-[100px]" />
      </div>

      <div className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-center transform-style-preserve-3d">
        <div className="absolute w-[280px] h-[280px] rounded-full bg-black border border-white/10 shadow-[0_0_120px_rgba(255,255,255,0.04)]" />
        <motion.div style={{ translateZ: photonZ1 }} className="absolute left-1/4 top-1/3 w-48 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent blur-[2px] rotate-12 opacity-90" />
        <motion.div style={{ translateZ: photonZ2 }} className="absolute right-1/4 bottom-1/3 w-64 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent blur-[3px] -rotate-12 opacity-80" />

        <div className="absolute bottom-1/4 text-center flex flex-col items-center gap-4">
          <p className="text-white/80 text-lg tracking-widest uppercase font-light">
            Light as Information
          </p>
          <p className="text-white/50 text-sm max-w-xs leading-relaxed">
            Every photon carries energy. The photodiode's job is to absorb that energy and produce a measurable current.
          </p>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[var(--color-accent)]/60 to-transparent mx-auto" />
        </div>
      </div>
    </motion.div>
  );
}
