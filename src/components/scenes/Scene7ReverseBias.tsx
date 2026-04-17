"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene7ReverseBias({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.40 to 0.47
  const opacity = useTransform(scrollYProgress, [0.40, 0.42, 0.45, 0.47], [0, 1, 1, 0]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  // The width of the depletion region responds to the scroll from 0.42 to 0.45
  const depletionWidth = useTransform(scrollYProgress, [0.42, 0.45], ["6rem", "14rem"]);

  return (
    <motion.div 
      style={{ opacity, display }}
      className="absolute inset-0 flex-col items-center justify-center pointer-events-none"
    >
      <div className="absolute top-1/4 text-center w-full">
        <h2 className="text-xl md:text-2xl text-white font-light tracking-wide mb-2">Applying Reverse Bias</h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          Scrolling further increases the reverse voltage. Observe how the depletion region physically widens, strengthening the internal electric field.
        </p>
      </div>

      <div className="mt-20 relative w-full max-w-3xl h-48 md:h-64 mx-auto flex items-stretch border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex-1 bg-[#2A1010]/30 flex flex-col justify-between p-4 border-r border-[#CA4A4A]/20">
          <span className="text-[#CA4A4A] text-xs font-mono uppercase">P-Type</span>
          <span className="text-white/30 text-[10px] uppercase tracking-widest mt-auto">Terminal: Negative (-)</span>
        </div>

        <motion.div 
          style={{ width: depletionWidth }}
          className="bg-gradient-to-r from-[#2A1010]/20 via-black to-[#0A1A2F]/20 relative border-x border-white/30 flex items-center justify-center overflow-hidden"
        >
          {/* Internal Electric Field representation */}
          <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmUgeDE9IjUiIHkxPSIxMCIgeDI9IjE1IiB5Mj0iMTAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjIgMiIvPjwvc3ZnPg==')]" />
        </motion.div>

        <div className="flex-1 bg-[#0A1A2F]/30 flex flex-col justify-between p-4 border-l border-[#4A8ACA]/20 text-right">
          <span className="text-[#4A8ACA] text-xs font-mono uppercase">N-Type</span>
          <span className="text-white/30 text-[10px] uppercase tracking-widest mt-auto">Terminal: Positive (+)</span>
        </div>
      </div>
    </motion.div>
  );
}
