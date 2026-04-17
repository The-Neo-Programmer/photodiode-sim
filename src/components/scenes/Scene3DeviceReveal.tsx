"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene3DeviceReveal({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Scene 3 fades in 0.2 to 0.25, peaks at 0.25-0.35, fades out 0.4
  const opacity = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  
  // Parallax / rotate effect
  const rotateX = useTransform(scrollYProgress, [0.2, 0.4], [40, 60]);
  const rotateZ = useTransform(scrollYProgress, [0.2, 0.4], [-20, -40]);
  
  // Spread layers apart
  const spreadMultiplier = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  // Use a map to calculate translateZs based on the multiplier
  const pLayerZ = useTransform(spreadMultiplier, (val) => val * 40);
  const depLayerZ = useTransform(spreadMultiplier, (val) => val * 0);
  const nLayerZ = useTransform(spreadMultiplier, (val) => val * -40);

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none perspective-[1200px]"
    >
      {/* 3D Container Wrapper */}
      <motion.div 
        style={{ rotateX, rotateZ, transformStyle: "preserve-3d" }}
        className="relative w-72 h-72 md:w-96 md:h-96"
      >
        {/* N-Region (Bottom Layer) */}
        <motion.div 
          style={{ translateZ: nLayerZ }}
          className="absolute inset-0 bg-[#0A1A2F]/80 border border-[#1A3A5F] rounded-2xl shadow-lg backdrop-blur-sm flex items-end justify-start p-4"
        >
          <span className="text-[#4A8ACA] text-xs font-mono uppercase tracking-widest transform -rotate-z-[45deg]">n-type</span>
        </motion.div>

        {/* Depletion Region (Middle Layer) */}
        <motion.div 
          style={{ translateZ: depLayerZ }}
          className="absolute inset-4 bg-transparent border border-white/10 rounded-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
          <span className="absolute bottom-2 right-2 text-white/40 text-[10px] uppercase tracking-[0.3em]">Depletion Region</span>
        </motion.div>

        {/* P-Region (Top Layer) */}
        <motion.div 
          style={{ translateZ: pLayerZ }}
          className="absolute inset-8 bg-[#2A1010]/80 border border-[#5A2020] rounded-xl shadow-[0_10px_30px_rgba(255,0,0,0.1)] backdrop-blur-md flex items-start justify-end p-4"
        >
          <span className="text-[#CA4A4A] text-xs font-mono uppercase tracking-widest">p-type</span>
        </motion.div>
      </motion.div>
      
      {/* Annotation */}
      <motion.div className="absolute top-1/4 text-center">
        <h2 className="text-xl md:text-2xl text-white font-light tracking-wide mb-2">Internal Structure</h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          A p-n junction with an active depletion region. 
          This is where photons will interact.
        </p>
      </motion.div>

    </motion.div>
  );
}
