"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene3Substrate({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.12 to 0.20
  const opacity = useTransform(scrollYProgress, [0.12, 0.14, 0.18, 0.20], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.12, 0.20], [0.9, 1.1]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  return (
    <motion.div 
      style={{ opacity, scale, display }}
      className="absolute inset-0 flex-col items-center justify-center pointer-events-none"
    >
      <div className="text-center mb-16">
        <h2 className="text-xl md:text-2xl text-white font-light tracking-wide mb-2">The Silicon Substrate</h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          Before a junction is formed, a pure intrinsic semiconductor crystal structure forms the foundational lattice.
        </p>
      </div>

      <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto bg-black/50 border border-white/5 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.02)] flex items-center justify-center">
        {/* Subtle Silicon Lattice Grid */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 2px, transparent 2px)',
          backgroundSize: '24px 24px',
          backgroundPosition: 'center center'
        }} />
        <div className="bg-black/60 inset-0 absolute backdrop-blur-[1px]" />
        
        <span className="relative z-10 text-white/30 tracking-widest uppercase font-mono text-xs">Intrinsic Si</span>
      </div>
    </motion.div>
  );
}
