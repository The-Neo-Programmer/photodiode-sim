"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useLumaStore } from "@/lib/store";
import { useEffect, useState } from "react";

export function Scene7OpticalSignalDetection({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { signalMode } = useLumaStore();
  
  // Visible from 0.75 to 0.85
  const opacity = useTransform(scrollYProgress, [0.75, 0.8, 0.85, 0.9], [0, 1, 1, 0]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="absolute top-1/4 text-center w-full">
        <h2 className="text-xl md:text-2xl text-[var(--color-accent)] font-light tracking-wide mb-2">Detection Mode</h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          When the light signal is pulsed, the photodiode converts the optical data stream 
          into a synchronous electrical waveform.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-2xl mt-20 gap-8">
        
        {/* Optical Input */}
        <div className="flex-1 flex flex-col items-center gap-4 w-full">
          <span className="text-[10px] text-[var(--color-accent)] uppercase tracking-widest font-mono">Optical Input</span>
          <div className="h-16 w-full border-b border-white/10 flex items-center justify-around overflow-hidden px-4">
             {mounted && signalMode === 'pulsed' ? (
                <>
                  <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 1] }} className="w-8 h-8 rounded-full bg-[var(--color-accent)] blur-sm" />
                  <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2, times: [0, 0.5, 1] }} className="w-8 h-8 rounded-full bg-[var(--color-accent)] blur-sm" />
                  <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4, times: [0, 0.5, 1] }} className="w-8 h-8 rounded-full bg-[var(--color-accent)] blur-sm" />
                </>
             ) : (
                <div className="w-full h-8 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent blur-md opacity-20" />
             )}
          </div>
        </div>

        {/* Translation Icon */}
        <div className="text-white/20 px-4">→</div>

        {/* Electrical Output Trace */}
        <div className="flex-1 flex flex-col items-center gap-4 w-full">
          <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">Electrical Trace</span>
          <div className="h-16 w-full border border-white/5 bg-white/[0.02] rounded flex items-center justify-center overflow-hidden">
              {mounted && signalMode === 'pulsed' ? (
                <svg width="100%" height="100%" preserveAspectRatio="none" className="stroke-[var(--color-accent)]/80 stroke-[2px] fill-transparent">
                  <motion.path 
                    d="M 0 32 L 20 32 L 20 8 L 40 8 L 40 32 L 60 32 L 60 8 L 80 8 L 80 32 L 100 32"
                    vectorEffect="non-scaling-stroke"
                    animate={{ x: [0, -40] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path 
                    d="M 100 32 L 120 32 L 120 8 L 140 8 L 140 32 L 160 32 L 160 8 L 180 8 L 180 32 L 200 32"
                    vectorEffect="non-scaling-stroke"
                    animate={{ x: [0, -40] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              ) : (
                <div className="w-full h-[1px] bg-white/20" />
              )}
          </div>
        </div>

      </div>

    </motion.div>
  );
}
