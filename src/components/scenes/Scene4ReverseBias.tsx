"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useLumaStore } from "@/lib/store";

export function Scene4ReverseBias({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { reverseBiasVoltage } = useLumaStore();

  // Active from 0.35 to 0.4, peaks 0.4 to 0.5, fades out 0.55
  const opacity = useTransform(scrollYProgress, [0.35, 0.4, 0.5, 0.55], [0, 1, 1, 0]);

  // Use the global state to widen the depletion region
  // reverseBiasVoltage goes from 0 to 100. Let's map it to padding/height
  const depletionWidth = 40 + (reverseBiasVoltage / 100) * 80;

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="text-center mb-16">
        <h2 className="text-xl md:text-2xl text-white font-light tracking-wide mb-2">Reverse Bias</h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          Applying a reverse voltage widens the depletion region, increasing sensitivity and speed.
        </p>
      </div>

      <div className="relative w-full max-w-2xl h-48 flex items-stretch">
        
        {/* P-side */}
        <div className="flex-1 bg-[#2A1010]/30 border border-[#5A2020]/50 rounded-l-lg flex flex-col justify-between p-4 relative overflow-hidden text-right">
          <div className="w-10 h-[2px] bg-white/20 absolute left-0 top-1/2 -mt-[1px]" />
          <span className="text-white/30 text-xs">Anode (-)</span>
        </div>

        {/* Depletion Region */}
        <div 
          className="bg-black border-y border-white/20 relative flex items-center justify-center overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: `${depletionWidth}px` }}
        >
          {/* subtle electric field lines */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gMTAgMCBMIDEwIDEwMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMiAyIi8+PC9zdmc+')] opacity-50" />
        </div>

        {/* N-side */}
        <div className="flex-1 bg-[#0A1A2F]/30 border border-[#1A3A5F]/50 rounded-r-lg flex flex-col justify-between p-4 relative overflow-hidden">
          <div className="w-10 h-[2px] bg-white/20 absolute right-0 top-1/2 -mt-[1px]" />
          <span className="text-white/30 text-xs mt-auto">Cathode (+)</span>
        </div>

      </div>

      <div className="mt-8 text-center text-[var(--color-accent)] font-mono text-xs opacity-70">
        Electric Field Intensity: {Math.max(10, Math.floor(reverseBiasVoltage * 1.5))} kV/cm
      </div>

    </motion.div>
  );
}
