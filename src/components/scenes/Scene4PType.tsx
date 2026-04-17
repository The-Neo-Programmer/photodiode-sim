"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene4PType({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.18 to 0.27
  const opacity = useTransform(scrollYProgress, [0.18, 0.20, 0.25, 0.27], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.18, 0.27], [0.95, 1.05]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  return (
    <motion.div 
      style={{ opacity, scale, display }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto bg-[#2A1010]/30 border border-[#5A2020] rounded-2xl flex flex-wrap content-center justify-center gap-6 p-8 mb-12 shadow-2xl">
        {/* Acceptor ions with holes */}
        {[...Array(6)].map((_, i) => (
          <div key={`ptype-${i}`} className="relative w-12 h-12 flex items-center justify-center">
            {/* Acceptor Ion (Negative) */}
            <div className="w-8 h-8 rounded border border-[#CA4A4A]/40 flex items-center justify-center bg-black/50">
              <span className="text-[#CA4A4A]/60 text-[10px]">-</span>
            </div>
            {/* Free Hole (Positive) */}
            <motion.div 
               animate={{ x: [0, 5, -2, 0], y: [0, -4, 3, 0] }}
               transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#CA4A4A] shadow-[0_0_8px_#CA4A4A] text-white flex items-center justify-center text-[8px]"
            >
               +
            </motion.div>
          </div>
        ))}
      </div>

      <div className="text-center w-full max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl text-[#CA4A4A] font-light tracking-wide mb-3">P-Type Doping</h2>
        <p className="text-white/50 text-base leading-relaxed">
          The lattice is doped with trivalent impurities. This creates an abundance of positively charged "holes" while leaving behind negatively charged acceptor ions.
        </p>
      </div>
    </motion.div>
  );
}
