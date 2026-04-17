"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene8DarkCurrent({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.510 to 0.575
  const opacity = useTransform(scrollYProgress, [0.510, 0.530, 0.555, 0.575], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.510, 0.575], [0.95, 1.05]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  return (
    <motion.div
      style={{ opacity, scale, display }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
    >
      <div className="relative w-full max-w-2xl h-52 mx-auto flex items-stretch rounded-2xl overflow-hidden border border-white/10 shadow-xl mb-12">

        {/* P side */}
        <div className="flex-1 bg-[#2A1010]/40 border-r border-white/10 flex items-center justify-center">
          <span className="text-[#FF9A9A]/50 text-xs font-mono uppercase">P-Side</span>
        </div>

        {/* Depletion */}
        <div className="w-48 bg-[#050810] relative flex items-center justify-center overflow-hidden border-x border-white/15">
          <span className="absolute top-4 text-white/25 font-mono text-[9px] uppercase tracking-wider">Total Darkness</span>

          {/* Stray thermal carrier 1 — hole drifts left */}
          <motion.div
            className="absolute w-5 h-5 rounded-full bg-[#CA4A4A] shadow-[0_0_12px_rgba(202,74,74,0.8)] flex items-center justify-center text-[8px] text-white font-bold"
            animate={{ x: [60, -80], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
          >
            h⁺
          </motion.div>

          {/* Stray thermal carrier 2 — electron drifts right */}
          <motion.div
            className="absolute w-5 h-5 rounded-full bg-[#4A8ACA] shadow-[0_0_12px_rgba(74,138,202,0.8)] flex items-center justify-center text-[8px] text-white font-bold"
            animate={{ x: [-50, 90], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1.5, repeatDelay: 0.5 }}
          >
            e⁻
          </motion.div>

          {/* Temperature glow */}
          <motion.div
            className="absolute inset-0 bg-orange-600/5"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <span className="absolute bottom-4 text-white/25 font-mono text-[9px] uppercase tracking-wider">Thermal ≈ 300K</span>
        </div>

        {/* N side */}
        <div className="flex-1 bg-[#0A1A2F]/40 border-l border-white/10 flex items-center justify-center">
          <span className="text-[#9ADEFF]/50 text-xs font-mono uppercase">N-Side</span>
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <p className="text-[11px] tracking-[0.4em] uppercase text-orange-400/60 font-mono mb-3">Chapter 4 — Noise Floor</p>
        <h2 className="text-2xl md:text-3xl text-white font-light tracking-wide mb-4">Dark Current</h2>
        <p className="text-white/70 text-base leading-relaxed">
          Even without any light, thermal energy at room temperature randomly generates electron-hole pairs inside the depletion region. These produce a tiny background "dark current" — the fundamental noise floor of the device.
        </p>
      </div>
    </motion.div>
  );
}
