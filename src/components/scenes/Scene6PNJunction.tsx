"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene6PNJunction({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.330 to 0.430 (Increased duration for mechanics)
  const opacity = useTransform(scrollYProgress, [0.330, 0.355, 0.405, 0.430], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.330, 0.430], [0.95, 1.05]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  // Fixed positions — no Math.random()
  const pPositions = [
    { left: "10%", top: "15%" }, { left: "35%", top: "10%" },
    { left: "60%", top: "18%" }, { left: "15%", top: "50%" },
    { left: "45%", top: "48%" }, { left: "20%", top: "75%" },
    { left: "50%", top: "72%" }, { left: "70%", top: "40%" },
  ];
  const nPositions = [
    { right: "10%", top: "15%" }, { right: "35%", top: "10%" },
    { right: "60%", top: "18%" }, { right: "15%", top: "50%" },
    { right: "45%", top: "48%" }, { right: "20%", top: "75%" },
    { right: "50%", top: "72%" }, { right: "70%", top: "40%" },
  ];

  return (
    <motion.div
      style={{ opacity, scale, display }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
    >
      {/* Schematic */}
      <div className="relative w-full max-w-4xl h-56 md:h-72 mx-auto flex items-stretch rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.04)] mb-12">

        {/* P-Type half */}
        <div className="flex-1 bg-gradient-to-r from-[#2A1010]/60 to-[#2A1010]/20 relative overflow-hidden">
          <span className="absolute top-4 left-4 text-[#FF9A9A]/70 text-xs font-mono tracking-widest uppercase">P-Type</span>
          <span className="absolute bottom-4 left-4 text-[#FF9A9A]/40 text-[10px] font-mono">free holes →</span>
          {pPositions.map((pos, i) => (
            <motion.div
              key={`p-${i}`}
              className="absolute w-7 h-7 rounded-full bg-[#CA4A4A] shadow-[0_0_10px_rgba(202,74,74,0.7)] flex items-center justify-center text-[9px] text-white font-bold"
              style={pos}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            >
              h⁺
            </motion.div>
          ))}
        </div>

        {/* Depletion Region */}
        <div className="w-32 md:w-48 bg-gradient-to-r from-[#2A1010]/10 via-[#0A0F1A] to-[#0A1A2F]/10 border-x border-white/20 flex flex-col items-center justify-center gap-4 relative">
          <span className="text-white/30 text-[9px] font-mono tracking-[0.15em] uppercase">Depletion Zone</span>

          {/* Electric field arrow */}
          <div className="flex items-center gap-1 opacity-70">
            <span className="text-[#FF7A7A] text-[10px]">⊕</span>
            <div className="w-12 h-[1px] bg-gradient-to-r from-[#FF7A7A]/40 to-[#7CDFFF]/40" />
            <span className="text-[#7CDFFF] text-[10px]">⊖</span>
          </div>
          <span className="text-white/25 text-[8px] font-mono">E-field →</span>

          {/* Fixed immobile ions */}
          <div className="flex justify-between w-full px-3">
            {[0,1,2].map(i => (
              <div key={`d-${i}`} className="flex flex-col gap-3">
                <div className="w-5 h-5 rounded border border-[#FF7A7A]/70 flex items-center justify-center text-[8px] text-[#FF7A7A]">−</div>
                <div className="w-5 h-5 rounded border border-[#7CDFFF]/70 flex items-center justify-center text-[8px] text-[#7CDFFF]">+</div>
              </div>
            ))}
          </div>
        </div>

        {/* N-Type half */}
        <div className="flex-1 bg-gradient-to-l from-[#0A1A2F]/60 to-[#0A1A2F]/20 relative overflow-hidden">
          <span className="absolute top-4 right-4 text-[#9ADEFF]/70 text-xs font-mono tracking-widest uppercase">N-Type</span>
          <span className="absolute bottom-4 right-4 text-[#9ADEFF]/40 text-[10px] font-mono">← free electrons</span>
          {nPositions.map((pos, i) => (
            <motion.div
              key={`n-${i}`}
              className="absolute w-6 h-6 rounded-full bg-[#4A8ACA] shadow-[0_0_10px_rgba(74,138,202,0.8)] flex items-center justify-center text-[8px] text-white font-bold"
              style={pos}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.4 + i * 0.25, repeat: Infinity, ease: "easeInOut" }}
            >
              e⁻
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <p className="text-[11px] tracking-[0.4em] uppercase text-white/30 font-mono mb-3">Chapter 4 — Junction</p>
        <h2 className="text-2xl md:text-3xl text-white font-light tracking-wide mb-4">The P-N Junction</h2>
        <p className="text-white/70 text-base leading-relaxed">
          When P and N-type materials meet, carriers diffuse across the boundary and recombine — leaving behind immobile ions. This charge separation creates an internal electric field: the depletion region.
        </p>
      </div>
    </motion.div>
  );
}
