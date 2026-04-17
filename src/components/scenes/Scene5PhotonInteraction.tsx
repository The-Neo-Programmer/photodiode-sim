"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Scene5PhotonInteraction({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible from 0.5 to 0.65
  const opacity = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.5, 0.7], [0.9, 1.1]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="absolute top-1/4 text-center">
        <h2 className="text-xl md:text-2xl text-[var(--color-accent)] font-light tracking-wide mb-2">Photon Interaction</h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          Incident light strikes the depletion region, generating electron-hole pairs 
          which are immediately swept apart.
        </p>
      </div>

      <div className="relative w-full max-w-xl h-64 mt-20 flex items-center justify-center">
        {/* Subtle grid background to look like a physical space */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />

        {/* Incoming Photons */}
        {mounted && (
          <motion.div
            animate={{ 
              y: [-100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-[2px] h-32 bg-gradient-to-b from-transparent via-[var(--color-accent)] to-[var(--color-accent)] blur-[1px]"
          />
        )}

        {/* Depletion Active Zone */}
        <div className="w-1/2 h-full border-x border-white/10 relative overflow-hidden flex items-center justify-center">
          {mounted && (
            <div className="relative">
              {/* Explosion / Pair generation representation */}
              <motion.div 
                animate={{ scale: [0, 1.5], opacity: [1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                className="w-16 h-16 bg-[var(--color-accent)]/80 rounded-full blur-xl"
              />
              
              {/* Electron moving right */}
              <motion.div 
                animate={{ x: [0, 150], opacity: [1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                className="absolute top-1/2 mt-[-8px] left-1/2 w-4 h-4 rounded-full bg-[#4A8ACA] shadow-[0_0_10px_#4A8ACA] flex items-center justify-center text-[10px] text-white"
              >
                e⁻
              </motion.div>

              {/* Hole moving left */}
              <motion.div 
                animate={{ x: [0, -150], opacity: [1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                className="absolute top-1/2 mt-[-8px] right-1/2 w-4 h-4 rounded-full bg-[#CA4A4A] shadow-[0_0_10px_#CA4A4A] border border-[#CA4A4A] flex items-center justify-center text-[10px] text-white"
              >
                h⁺
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
