"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene4PType({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.28 to 0.38
  const opacity = useTransform(scrollYProgress, [0.28, 0.30, 0.36, 0.38], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.28, 0.38], [0.95, 1.05]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  // Fixed positions — NO Math.random() to prevent hydration mismatch
  const ions = [
    { x: "15%", y: "20%" }, { x: "45%", y: "15%" }, { x: "72%", y: "22%" },
    { x: "20%", y: "55%" }, { x: "55%", y: "50%" }, { x: "78%", y: "58%" },
    { x: "30%", y: "78%" }, { x: "65%", y: "80%" },
  ];

  return (
    <motion.div
      style={{ opacity, scale, display }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
    >
      {/* Red ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-[#CA4A4A]/5 blur-[100px]" />
      </div>

      <div className="relative w-72 h-64 md:w-96 md:h-80 mx-auto bg-[#2A1010]/40 border border-[#CA4A4A]/30 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(202,74,74,0.1)] mb-12">
        {/* Acceptor ions */}
        {ions.map((pos, i) => (
          <div key={`acceptor-${i}`} className="absolute" style={{ left: pos.x, top: pos.y }}>
            {/* Acceptor ion */}
            <div className="w-9 h-9 rounded-full border border-[#CA4A4A]/50 flex items-center justify-center bg-[#CA4A4A]/10 text-[#CA4A4A]/80 text-[11px] font-mono">
              B⁻
            </div>
            {/* Free hole orbiting around it */}
            <motion.div
              className="absolute w-4 h-4 rounded-full bg-[#FF7A7A] shadow-[0_0_10px_rgba(255,120,120,0.9)] border border-white/30 flex items-center justify-center text-[7px] text-white font-bold"
              animate={{
                x: [8, 14, 8, 2, 8],
                y: [-8, -2, 8, -2, -8],
              }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
            >
              h⁺
            </motion.div>
          </div>
        ))}

        <span className="absolute bottom-3 left-4 text-[#FF7A7A]/60 text-[10px] font-mono uppercase tracking-widest">
          P-Type Region
        </span>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[#FF7A7A]/60 font-mono mb-3">
          Chapter 3 — Doping
        </p>
        <h2 className="text-2xl md:text-3xl text-[#FF9A9A] font-light tracking-wide mb-4">P-Type Semiconductor</h2>
        <p className="text-white/70 text-base leading-relaxed">
          Trivalent atoms like Boron are introduced into the silicon lattice. With only 3 valence electrons, each dopant creates a "hole" — a positively charged vacancy that moves freely through the crystal.
        </p>
      </div>
    </motion.div>
  );
}
