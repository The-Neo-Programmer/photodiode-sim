"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene7ReverseBias({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.425 to 0.515
  const opacity = useTransform(scrollYProgress, [0.425, 0.445, 0.495, 0.515], [0, 1, 1, 0]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  // Depletion region widens as user scrolls
  const depletionWidth = useTransform(scrollYProgress, [0.430, 0.505], ["5rem", "16rem"]);

  return (
    <motion.div
      style={{ opacity, display }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <p className="text-[11px] tracking-[0.4em] uppercase text-white/30 font-mono mb-3">Chapter 4 — Biasing</p>
        <h2 className="text-2xl md:text-3xl text-white font-light tracking-wide mb-3">Applying Reverse Bias</h2>
        <p className="text-white/70 text-base max-w-xl leading-relaxed">
          Connecting the negative terminal to P and positive to N widens the depletion region, strengthening the internal electric field that will sweep photogenerated carriers.
        </p>
      </div>

      {/* Junction diagram */}
      <div className="relative w-full max-w-3xl flex items-stretch h-48 md:h-56 rounded-2xl overflow-hidden border border-white/10 shadow-xl">

        {/* P-Side */}
        <div className="flex-1 bg-[#2A1010]/50 flex flex-col justify-between p-5 border-r border-[#CA4A4A]/20">
          <span className="text-[#FF9A9A] text-xs font-mono uppercase tracking-widest">P-Type</span>
          <div className="flex flex-col gap-1">
            <span className="text-[#FF9A9A]/60 text-[10px] font-mono">Terminal: −</span>
            <div className="w-12 h-5 rounded border border-[#FF9A9A]/40 flex items-center justify-center text-[#FF9A9A]/80 text-[10px]">−V</div>
          </div>
        </div>

        {/* Depletion Zone (animates width) */}
        <motion.div
          style={{ width: depletionWidth }}
          className="bg-gradient-to-r from-[#2A1010]/20 via-[#08080F] to-[#0A1A2F]/20 border-x border-white/25 flex flex-col items-center justify-center gap-3 overflow-hidden relative"
        >
          <span className="text-white/40 text-[9px] font-mono tracking-[0.2em] uppercase">Depletion</span>
          {/* E-field lines */}
          {[0,1,2].map(i => (
            <motion.div
              key={`efield-${i}`}
              className="flex items-center gap-1"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            >
              <span className="text-[#FF9A9A] text-[9px]">⊕</span>
              <div className="w-12 h-[1px] bg-gradient-to-r from-[#FF9A9A]/40 to-[#7CDFFF]/40" />
              <span className="text-[#7CDFFF] text-[9px]">⊖</span>
            </motion.div>
          ))}
          <span className="text-white/25 text-[8px] font-mono">Widening →</span>
        </motion.div>

        {/* N-Side */}
        <div className="flex-1 bg-[#0A1A2F]/50 flex flex-col justify-between p-5 text-right border-l border-[#4A8ACA]/20">
          <span className="text-[#9ADEFF] text-xs font-mono uppercase tracking-widest">N-Type</span>
          <div className="flex flex-col items-end gap-1">
            <span className="text-[#9ADEFF]/60 text-[10px] font-mono">Terminal: +</span>
            <div className="w-12 h-5 rounded border border-[#9ADEFF]/40 flex items-center justify-center text-[#9ADEFF]/80 text-[10px]">+V</div>
          </div>
        </div>
      </div>

      {/* Live voltage readout */}
      <motion.div className="mt-8 flex items-center gap-3">
        <span className="text-white/40 text-sm font-mono uppercase tracking-wider">Reverse Voltage</span>
        <motion.span 
          className="text-[var(--color-accent)] text-xl font-light font-mono"
          style={{ opacity }}
        >
          <motion.span style={{
            // Show scrolling value
          }}>
            {/* Static display */}
          </motion.span>
          ≈ V_R
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
