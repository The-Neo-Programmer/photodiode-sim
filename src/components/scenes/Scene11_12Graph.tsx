"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene11_12Graph({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.66 to 0.80 (2 scenes length)
  const opacity = useTransform(scrollYProgress, [0.66, 0.68, 0.78, 0.80], [0, 1, 1, 0]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  // The actual line drawing progress (0 to 1) based on scroll across the graph area 0.70 to 0.78
  const pathLength = useTransform(scrollYProgress, [0.70, 0.78], [0, 1]);
  
  // Data points (Light Intensity 'Φ' vs Photocurrent 'I_p')
  // Starts with a tiny flat offset (Dark Current) on the Y axis, then linear.

  return (
    <motion.div 
      style={{ opacity, display }}
      className="absolute inset-0 flex-col items-center justify-center pointer-events-none"
    >
      <div className="absolute top-[15%] text-center w-full">
        <h2 className="text-xl md:text-2xl text-[var(--color-accent)] font-light tracking-wide mb-2">Photocurrent vs Intensity</h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          The photocurrent is linearly proportional to the incident light intensity. Keep scrolling to increase intensity and plot the graph.
        </p>
      </div>

      <div className="mt-10 relative w-full max-w-lg aspect-video mx-auto flex items-end justify-center">
         {/* Graph Axes */}
         <div className="absolute inset-0 border-l-2 border-b-2 border-white/20 pb-4 pl-4 flex items-end">
            
            {/* Y-Axis Label */}
            <span className="absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] uppercase tracking-widest text-white/50 font-mono">
              Photocurrent (I)
            </span>

            {/* X-Axis Label */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-white/50 font-mono">
              Light Intensity (Φ)
            </span>

            {/* Origin */}
            <span className="absolute -bottom-6 -left-4 text-[10px] text-white/30 font-mono">0</span>

            {/* Dark Current Marker */}
            <span className="absolute left-0 bottom-[10%] w-2 border-b border-[#CA4A4A] -ml-2" />
            <span className="absolute -left-20 bottom-[10%] text-[#CA4A4A] text-[8px] uppercase tracking-wider mb-[2px]">Dark Current</span>

            {/* SVG Plotting Area */}
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
               {/* Grid */}
               <line x1="25" y1="0" x2="25" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
               <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
               <line x1="75" y1="0" x2="75" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
               <line x1="100" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

               <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
               <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
               <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

               {/* The Line - Drawn bottom-to-top so Y goes 90 (10% up) to 10 (90% up) */}
               <motion.path 
                 d="M 0 90 L 100 10" 
                 stroke="var(--color-accent)" 
                 strokeWidth="1.5" 
                 fill="none" 
                 style={{ pathLength }}
               />
               
               {/* Projection Lines trailing the path */}
               <motion.line
                 x1={useTransform(pathLength, (v) => v * 100)}
                 y1={useTransform(pathLength, (v) => 90 - v * 80)}
                 x2={useTransform(pathLength, (v) => v * 100)}
                 y2="100"
                 stroke="var(--color-accent)"
                 strokeWidth="0.5"
                 strokeDasharray="2 2"
                 opacity="0.5"
               />
               <motion.line
                 x1="0"
                 y1={useTransform(pathLength, (v) => 90 - v * 80)}
                 x2={useTransform(pathLength, (v) => v * 100)}
                 y2={useTransform(pathLength, (v) => 90 - v * 80)}
                 stroke="var(--color-accent)"
                 strokeWidth="0.5"
                 strokeDasharray="2 2"
                 opacity="0.5"
               />
            </svg>
         </div>
      </div>
    </motion.div>
  );
}
