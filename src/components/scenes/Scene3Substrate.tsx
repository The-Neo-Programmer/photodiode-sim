"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene3Substrate({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.140 to 0.200
  const opacity = useTransform(scrollYProgress, [0.140, 0.160, 0.185, 0.200], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.140, 0.200], [0.92, 1.08]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  const latticeNodes = [
    [1,1],[1,2],[1,3],[1,4],
    [2,1],[2,2],[2,3],[2,4],
    [3,1],[3,2],[3,3],[3,4],
    [4,1],[4,2],[4,3],[4,4],
  ];

  return (
    <motion.div
      style={{ opacity, scale, display }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
    >
      <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto bg-[#060810]/60 border border-white/15 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(124,200,255,0.06)] flex items-center justify-center mb-12">
        {/* Connecting lines — each pair wrapped in keyed React.Fragment */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 16 16" preserveAspectRatio="none">
          {latticeNodes.map(([r, c]) => (
            <React.Fragment key={`lines-${r}-${c}`}>
              {c < 4 && (
                <line
                  x1={c * 3 + 1} y1={r * 3 + 1}
                  x2={(c + 1) * 3 + 1} y2={r * 3 + 1}
                  stroke="rgba(124,200,255,0.18)"
                  strokeWidth="0.12"
                />
              )}
              {r < 4 && (
                <line
                  x1={c * 3 + 1} y1={r * 3 + 1}
                  x2={c * 3 + 1} y2={(r + 1) * 3 + 1}
                  stroke="rgba(124,200,255,0.18)"
                  strokeWidth="0.12"
                />
              )}
            </React.Fragment>
          ))}
        </svg>

        {/* Lattice nodes */}
        <div className="absolute inset-4 grid grid-cols-4 grid-rows-4 gap-2">
          {latticeNodes.map(([r, c], i) => (
            <motion.div
              key={`node-${r}-${c}`}
              className="flex items-center justify-center"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.12, ease: "easeInOut" }}
            >
              <div className="w-3 h-3 rounded-full bg-[#b0d8ff] shadow-[0_0_8px_rgba(176,216,255,0.9)] border border-white/30" />
            </motion.div>
          ))}
        </div>

        <span className="absolute bottom-4 text-white/30 tracking-widest uppercase font-mono text-[10px]">
          Intrinsic Silicon
        </span>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-accent)]/60 font-mono mb-3">
          Chapter 2 — Substrate
        </p>
        <h2 className="text-2xl md:text-3xl text-white font-light tracking-wide mb-4">The Silicon Lattice</h2>
        <p className="text-white/70 text-base leading-relaxed">
          Pure silicon forms a perfect, regular crystal lattice. Each atom shares exactly 4 electrons with its neighbours — a completely stable, electrically neutral structure with no free carriers.
        </p>
      </div>
    </motion.div>
  );
}
