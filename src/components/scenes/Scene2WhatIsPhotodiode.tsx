"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene2WhatIsPhotodiode({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.040 to 0.100 (Increased duration for text)
  const opacity = useTransform(scrollYProgress, [0.040, 0.060, 0.080, 0.100], [0, 1, 1, 0]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  return (
    <motion.div
      style={{ opacity, display }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 pointer-events-none"
    >
      {/* Glowing background orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-[var(--color-accent)]/5 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative max-w-3xl flex flex-col items-center gap-8"
      >
        <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-accent)]/70 font-mono">
          Chapter 1 — The Component
        </p>

        <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
          What is a <span className="text-[var(--color-accent)]">Photodiode?</span>
        </h2>

        <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
          A photodiode is a semiconductor device that converts light directly into an electrical current. 
          It is the cornerstone of optical sensing — the eye of every modern electronic system.
        </p>

        <div className="flex items-center gap-8 mt-4">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center">
              <span className="text-2xl">💡</span>
            </div>
            <span className="text-white/50 text-xs uppercase tracking-wider">Light In</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/30" />
            <div className="w-8 h-8 border border-[var(--color-accent)]/60 rounded flex items-center justify-center">
              <span className="text-[var(--color-accent)] text-[10px] font-mono">PD</span>
            </div>
            <div className="w-16 h-[1px] bg-gradient-to-r from-white/30 to-transparent" />
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <span className="text-white/50 text-xs uppercase tracking-wider">Current Out</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
