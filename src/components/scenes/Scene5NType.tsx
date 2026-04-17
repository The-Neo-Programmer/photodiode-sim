"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene5NType({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.37 to 0.46
  const opacity = useTransform(scrollYProgress, [0.37, 0.39, 0.44, 0.46], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.37, 0.46], [0.95, 1.05]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  // Fixed electron positions
  const donors = [
    { x: "12%", y: "18%" }, { x: "42%", y: "12%" }, { x: "68%", y: "20%" },
    { x: "18%", y: "54%" }, { x: "52%", y: "48%" }, { x: "75%", y: "56%" },
    { x: "28%", y: "76%" }, { x: "62%", y: "78%" },
  ];

  return (
    <motion.div
      style={{ opacity, scale, display }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
    >
      {/* Blue ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-[#4A8ACA]/5 blur-[100px]" />
      </div>

      <div className="relative w-72 h-64 md:w-96 md:h-80 mx-auto bg-[#0A1A2F]/40 border border-[#4A8ACA]/30 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(74,138,202,0.1)] mb-12">
        {/* Donor ions with free electrons */}
        {donors.map((pos, i) => (
          <div key={`donor-${i}`} className="absolute" style={{ left: pos.x, top: pos.y }}>
            {/* Donor ion */}
            <div className="w-9 h-9 rounded-full border border-[#4A8ACA]/50 flex items-center justify-center bg-[#4A8ACA]/10 text-[#4A8ACA]/80 text-[11px] font-mono">
              P⁺
            </div>
            {/* Free electron shooting away */}
            <motion.div
              className="absolute w-4 h-4 rounded-full bg-[#7CDFFF] shadow-[0_0_12px_rgba(124,220,255,0.9)] border border-white/30 flex items-center justify-center text-[7px] text-[#003A52] font-bold"
              animate={{
                x: [-6, -14, -6, 2, -6],
                y: [6, 0, -8, 0, 6],
              }}
              transition={{ duration: 2.5 + (i % 3) * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              e⁻
            </motion.div>
          </div>
        ))}
        <span className="absolute bottom-3 right-4 text-[#7CDFFF]/60 text-[10px] font-mono uppercase tracking-widest">
          N-Type Region
        </span>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[#7CDFFF]/60 font-mono mb-3">
          Chapter 3 — Doping
        </p>
        <h2 className="text-2xl md:text-3xl text-[#9ADEFF] font-light tracking-wide mb-4">N-Type Semiconductor</h2>
        <p className="text-white/70 text-base leading-relaxed">
          Pentavalent atoms like Phosphorus provide a fifth valence electron. This extra electron is loosely bound and becomes a free negative charge carrier within the crystal.
        </p>
      </div>
    </motion.div>
  );
}
