"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene9PhotonsArrive({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.67 to 0.74
  const opacity = useTransform(scrollYProgress, [0.67, 0.69, 0.72, 0.74], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.67, 0.74], [0.95, 1.05]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  const photons = [
    { delay: 0,   x: "20%" },
    { delay: 0.4, x: "40%" },
    { delay: 0.8, x: "60%" },
    { delay: 1.2, x: "75%" },
  ];

  return (
    <motion.div
      style={{ opacity, scale, display }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
    >
      {/* Visualization */}
      <div className="relative w-full max-w-2xl h-56 mx-auto flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#050810] shadow-xl mb-12">

        {/* Top: photon rain */}
        <div className="flex-1 relative overflow-hidden flex items-end">
          {photons.map((p, i) => (
            <motion.div
              key={`photon-${i}`}
              className="absolute top-0"
              style={{ left: p.x }}
              animate={{ y: [-40, 130] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: p.delay, ease: "easeIn" }}
            >
              <div className="w-3 h-3 rounded-full bg-[#FFD97C] shadow-[0_0_16px_rgba(255,215,100,0.9)]" />
              <div className="w-[1px] h-14 bg-gradient-to-b from-[#FFD97C]/60 to-transparent mx-auto" />
            </motion.div>
          ))}
          <span className="absolute top-3 left-4 text-[#FFD97C]/60 text-[10px] font-mono uppercase tracking-widest">hν ↓ Photons</span>
        </div>

        {/* Divider: semiconductor surface */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* Bottom: depletion region */}
        <div className="h-20 flex items-center justify-center relative">
          <motion.div
            className="absolute inset-0 bg-[var(--color-accent)]/5"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-white/35 text-[10px] font-mono uppercase tracking-widest">Depletion Region</span>
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[#FFD97C]/60 font-mono mb-3">Chapter 5 — Detection</p>
        <h2 className="text-2xl md:text-3xl text-white font-light tracking-wide mb-4">Incident Photons</h2>
        <p className="text-white/70 text-base leading-relaxed">
          Light with energy exceeding the semiconductor bandgap (E = hν &gt; E_g) penetrates the surface and enters the depletion region, where it interacts with valence electrons.
        </p>
      </div>
    </motion.div>
  );
}
