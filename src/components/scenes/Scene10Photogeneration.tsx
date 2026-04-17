"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene10Photogeneration({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.630 to 0.695
  const opacity = useTransform(scrollYProgress, [0.630, 0.650, 0.675, 0.695], [0, 1, 1, 0]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  const pairs = [
    { delay: 0,   y: "30%" },
    { delay: 0.8, y: "55%" },
    { delay: 1.6, y: "70%" },
  ];

  return (
    <motion.div
      style={{ opacity, display }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
    >
      <div className="relative w-full max-w-3xl h-56 mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#050810] shadow-xl mb-12 flex items-center">
        {/* E-field arrow (subtle background) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-2/3 h-[1px] bg-gradient-to-r from-[#FF9A9A] to-[#9ADEFF]" />
          <div className="absolute right-[16%] text-[#9ADEFF] text-xl">→</div>
        </div>

        {/* Photon impact flash */}
        {pairs.map((p, i) => (
          <div key={`pair-${i}`} className="absolute inset-0" style={{ top: p.y }}>
            {/* Flash */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FFD97C]"
              animate={{ scale: [0, 2.5], opacity: [0.8, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: p.delay + 0.2, repeatDelay: 1.6 }}
              style={{ filter: "blur(4px)", top: 0 }}
            />
            {/* Electron sweeping right */}
            <motion.div
              className="absolute left-1/2 w-5 h-5 rounded-full bg-[#7CDFFF] shadow-[0_0_16px_rgba(124,220,255,1)] flex items-center justify-center text-[8px] text-[#003A52] font-bold"
              animate={{ x: [0, 220], opacity: [1, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: p.delay, repeatDelay: 0.7, ease: "easeOut" }}
            >
              e⁻
            </motion.div>
            {/* Hole sweeping left */}
            <motion.div
              className="absolute left-1/2 w-5 h-5 rounded-full bg-[#FF7A7A] shadow-[0_0_16px_rgba(255,120,120,1)] flex items-center justify-center text-[8px] text-white font-bold"
              animate={{ x: [0, -220], opacity: [1, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: p.delay, repeatDelay: 0.7, ease: "easeOut" }}
            >
              h⁺
            </motion.div>
          </div>
        ))}

        {/* N label */}
        <span className="absolute right-4 top-4 text-[#9ADEFF]/50 text-[10px] font-mono uppercase">N →</span>
        {/* P label */}
        <span className="absolute left-4 top-4 text-[#FF9A9A]/50 text-[10px] font-mono uppercase">← P</span>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-accent)]/60 font-mono mb-3">Chapter 5 — Photogeneration</p>
        <h2 className="text-2xl md:text-3xl text-white font-light tracking-wide mb-4">Carrier Sweep</h2>
        <p className="text-white/70 text-base leading-relaxed">
          Each absorbed photon excites a valence electron, creating an electron-hole pair. The internal electric field immediately and decisively sweeps the electron toward N and the hole toward P — generating a net photocurrent.
        </p>
      </div>
    </motion.div>
  );
}
