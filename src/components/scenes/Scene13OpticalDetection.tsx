"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene13OpticalDetection({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.875 to 0.935 — after Circuit (0.790-0.880), before RealWorld (0.930-0.990)
  const opacity = useTransform(scrollYProgress, [0.875, 0.895, 0.915, 0.935], [0, 1, 1, 0]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  return (
    <motion.div
      style={{ opacity, display }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-8"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-accent)]/60 font-mono mb-3">Chapter 5 — Output</p>
        <h2 className="text-2xl md:text-3xl text-white font-light tracking-wide mb-3">Optical Signal Detection</h2>
        <p className="text-white/70 text-sm max-w-lg leading-relaxed">
          As light pulses on and off, the photodiode instantly produces a corresponding electrical square wave — perfectly replicating the optical bit pattern.
        </p>
      </div>

      {/* Side-by-side signals */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-3xl gap-8">

        {/* Optical Input */}
        <div className="flex-1 w-full flex flex-col gap-3">
          <span className="text-[10px] text-[var(--color-accent)]/70 uppercase tracking-widest font-mono text-center">Optical Input (Light)</span>
          <div className="h-20 w-full border border-white/10 bg-[#050810] rounded-xl relative overflow-hidden flex items-center">
            <svg width="100%" height="100%" preserveAspectRatio="none" className="overflow-visible">
              <motion.path
                d="M 0 40 L 20 40 L 20 10 L 40 10 L 40 40 L 60 40 L 60 10 L 80 10 L 80 40 L 100 40"
                stroke="rgba(255,215,100,0.9)"
                strokeWidth="2.5"
                fill="none"
                vectorEffect="non-scaling-stroke"
                animate={{ x: [0, -40] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 100 40 L 120 40 L 120 10 L 140 10 L 140 40 L 160 40 L 160 10 L 180 10 L 180 40 L 200 40"
                stroke="rgba(255,215,100,0.9)"
                strokeWidth="2.5"
                fill="none"
                vectorEffect="non-scaling-stroke"
                animate={{ x: [0, -40] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </svg>
            {/* Glow when high */}
            <motion.div
              className="absolute inset-0 bg-[#FFD964]/10"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
            />
          </div>
        </div>

        {/* Arrow */}
        <div className="text-white/30 text-3xl font-light flex-shrink-0 mt-6">→</div>

        {/* Electrical Output */}
        <div className="flex-1 w-full flex flex-col gap-3">
          <span className="text-[10px] text-[var(--color-accent)]/70 uppercase tracking-widest font-mono text-center">Electrical Output (Current)</span>
          <div className="h-20 w-full border border-[var(--color-accent)]/20 bg-[#050810] rounded-xl relative overflow-hidden flex items-center shadow-[0_0_20px_rgba(124,220,255,0.06)]">
            <svg width="100%" height="100%" preserveAspectRatio="none" className="overflow-visible">
              <motion.path
                d="M 0 40 L 20 40 L 20 10 L 40 10 L 40 40 L 60 40 L 60 10 L 80 10 L 80 40 L 100 40"
                stroke="rgba(124,220,255,0.9)"
                strokeWidth="2.5"
                fill="none"
                vectorEffect="non-scaling-stroke"
                animate={{ x: [0, -40] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 100 40 L 120 40 L 120 10 L 140 10 L 140 40 L 160 40 L 160 10 L 180 10 L 180 40 L 200 40"
                stroke="rgba(124,220,255,0.9)"
                strokeWidth="2.5"
                fill="none"
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
