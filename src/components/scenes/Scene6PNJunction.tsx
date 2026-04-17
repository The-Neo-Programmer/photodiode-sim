"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene6PNJunction({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.33 to 0.40
  const opacity = useTransform(scrollYProgress, [0.33, 0.35, 0.38, 0.40], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.33, 0.40], [0.95, 1.05]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  // Hardcoded positions to prevent hydration mismatch from Math.random()
  const positions = [
    { left: "10%", top: "10%" }, { left: "30%", top: "40%" },
    { left: "50%", top: "20%" }, { left: "70%", top: "60%" },
    { left: "20%", top: "70%" }, { left: "80%", top: "30%" },
    { left: "40%", top: "80%" }, { left: "60%", top: "10%" }
  ];

  return (
    <motion.div 
      style={{ opacity, scale, display }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
    >
      <div className="relative w-full max-w-4xl h-64 md:h-80 mx-auto flex items-stretch border border-white/5 rounded-2xl overflow-hidden shadow-2xl mb-12">
        {/* P-Type */}
        <div className="flex-1 bg-[#2A1010]/30 relative overflow-hidden flex items-center justify-center border-r border-transparent">
          <span className="absolute bottom-4 left-4 text-[#CA4A4A] text-xs font-mono tracking-widest uppercase">P-Type</span>
          <div className="opacity-40">
             {positions.map((pos, i) => (
                <div key={`p-${i}`} className="absolute" style={pos}>
                  <div className="w-8 h-8 rounded border border-[#CA4A4A]/40 flex items-center justify-center bg-black/50">
                    <span className="text-[#CA4A4A]/60 text-[10px]">-</span>
                  </div>
                </div>
             ))}
          </div>
        </div>

        {/* Depletion Region */}
        <div className="w-48 bg-gradient-to-r from-[#2A1010]/10 via-black to-[#0A1A2F]/10 relative border-x border-white/20 flex flex-col items-center justify-center">
           <span className="absolute bottom-4 text-white/30 text-[10px] font-mono tracking-[0.2em] uppercase">Depletion Region</span>
           
           {/* Electric Field Indicator */}
           <div className="absolute top-8 flex items-center gap-2 text-white/50 opacity-60">
              <span className="text-[10px]">-</span>
              <div className="w-24 h-[1px] bg-gradient-to-l from-transparent via-white to-transparent" />
              <span className="text-[10px]">+</span>
           </div>
           
           {/* Fixed Ions (No free carriers) */}
           <div className="flex justify-between w-full px-6">
              <div className="flex flex-col gap-4">
                 {[...Array(3)].map((_, i) => (
                   <div key={`ion-n-${i}`} className="w-6 h-6 rounded border border-[#CA4A4A]/80 flex items-center justify-center"><span className="text-[10px] text-[#CA4A4A]">-</span></div>
                 ))}
              </div>
              <div className="flex flex-col gap-4">
                 {[...Array(3)].map((_, i) => (
                   <div key={`ion-p-${i}`} className="w-6 h-6 rounded border border-[#4A8ACA]/80 flex items-center justify-center"><span className="text-[10px] text-[#4A8ACA]">+</span></div>
                 ))}
              </div>
           </div>
        </div>

        {/* N-Type */}
        <div className="flex-1 bg-[#0A1A2F]/30 relative overflow-hidden flex items-center justify-center">
          <span className="absolute bottom-4 right-4 text-[#4A8ACA] text-xs font-mono tracking-widest uppercase">N-Type</span>
          <div className="opacity-40">
             {positions.map((pos, i) => (
                <div key={`n-${i}`} className="absolute" style={pos}>
                  <div className="w-8 h-8 rounded border border-[#4A8ACA]/40 flex items-center justify-center bg-black/50">
                    <span className="text-[#4A8ACA]/60 text-[10px]">+</span>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </div>

      <div className="text-center w-full max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl text-white font-light tracking-wide mb-3">P-N Junction</h2>
        <p className="text-white/50 text-base leading-relaxed">
          When joined, electrons and holes recombine at the boundary. This creates a "Depletion Region" completely empty of free charge carriers, leaving only fixed ions that produce an internal electric field.
        </p>
      </div>

    </motion.div>
  );
}
