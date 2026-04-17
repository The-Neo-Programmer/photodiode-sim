"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Scene10Photogeneration({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.60 to 0.67
  const opacity = useTransform(scrollYProgress, [0.60, 0.62, 0.65, 0.67], [0, 1, 1, 0]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.div 
      style={{ opacity, display }}
      className="absolute inset-0 flex-col items-center justify-center pointer-events-none"
    >
      <div className="absolute top-1/4 text-center w-full">
        <h2 className="text-xl md:text-2xl text-[var(--color-accent)] font-light tracking-wide mb-2">Photogeneration & Sweep</h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          The photon creates an electron-hole pair. The strong internal electric field immediately sweeps the electron toward the n-side and the hole toward the p-side, preventing recombination.
        </p>
      </div>

      <div className="relative w-full max-w-xl h-64 mt-20 flex items-center justify-center border border-white/5 bg-black overflow-hidden rounded-2xl shadow-xl">
        {mounted && (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Explosion / Pair generation */}
            <motion.div 
              animate={{ scale: [0, 2], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="w-16 h-16 bg-[var(--color-accent)]/60 rounded-full blur-xl"
            />
            
            {/* Electron moving right */}
            <motion.div 
              animate={{ x: [0, 200], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute w-4 h-4 rounded-full bg-[#4A8ACA] shadow-[0_0_10px_#4A8ACA] flex items-center justify-center text-[10px] text-white"
            >
              e⁻
            </motion.div>

            {/* Hole moving left */}
            <motion.div 
              animate={{ x: [0, -200], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute w-4 h-4 rounded-full bg-[#CA4A4A] shadow-[0_0_10px_#CA4A4A] border border-[#CA4A4A] flex items-center justify-center text-[10px] text-white"
            >
              h⁺
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
