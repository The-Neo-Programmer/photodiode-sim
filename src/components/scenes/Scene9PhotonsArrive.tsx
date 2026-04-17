"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Scene9PhotonsArrive({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.53 to 0.60
  const opacity = useTransform(scrollYProgress, [0.53, 0.55, 0.58, 0.60], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.53, 0.60], [0.95, 1.05]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.div 
      style={{ opacity, scale, display }}
      className="absolute inset-0 flex-col items-center justify-center pointer-events-none"
    >
      <div className="absolute top-1/4 text-center w-full">
        <h2 className="text-xl md:text-2xl text-[var(--color-accent)] font-light tracking-wide mb-2">Photons Arrive</h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          Incident light carrying energy greater than the bandgap enters the depletion region seamlessly through the surface.
        </p>
      </div>

      <div className="mt-20 relative w-full max-w-xl h-64 mx-auto flex items-center justify-center overflow-hidden">
        {mounted && (
           <motion.div 
             animate={{ y: [-150, 0] }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
             className="w-[200px] h-[200px] bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-20 blur-xl"
           />
        )}
        <div className="absolute bottom-0 w-full h-1/2 bg-black/80 backdrop-blur-sm border-t border-white/20 flex items-center justify-center">
           <span className="text-white/20 font-mono tracking-widest text-[10px] uppercase">Active Region</span>
        </div>
      </div>
    </motion.div>
  );
}
