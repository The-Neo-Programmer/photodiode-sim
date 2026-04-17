"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene11_12Graph({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.690 to 0.795 — strictly does NOT overlap circuit (0.790–0.880)
  const opacity = useTransform(scrollYProgress, [0.690, 0.710, 0.775, 0.795], [0, 1, 1, 0]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  // Graph line draws as user scrolls through middle of this window
  const pathLength = useTransform(scrollYProgress, [0.714, 0.778], [0, 1]);

  // Tip dot follows the line end
  const tipX = useTransform(pathLength, [0, 1], [0, 100]);
  const tipY = useTransform(pathLength, [0, 1], [90, 10]);

  const gridValues = [25, 50, 75];

  return (
    <motion.div
      style={{ opacity, display }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-8"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-accent)]/60 font-mono mb-3">Chapter 5 — Response</p>
        <h2 className="text-2xl md:text-3xl text-white font-light tracking-wide mb-3">Photocurrent vs. Light Intensity</h2>
        <p className="text-white/70 text-sm max-w-lg leading-relaxed">
          Scroll to plot the relationship. As incident light intensity increases, the photocurrent rises linearly — a defining characteristic of the photodiode.
        </p>
      </div>

      {/* Graph */}
      <div className="relative w-full max-w-lg mx-auto" style={{ paddingLeft: "4rem", paddingBottom: "3rem" }}>
        {/* Y-axis label */}
        <span className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] uppercase tracking-widest text-white/40 font-mono whitespace-nowrap">
          Photocurrent I_ph
        </span>

        {/* X-axis label */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-white/40 font-mono">
          Incident Intensity Φ
        </span>

        {/* Graph area */}
        <div className="w-full aspect-video border-l-2 border-b-2 border-white/25 relative">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">

            {/* Grid lines — keyed React.Fragment */}
            {gridValues.map((v) => (
              <React.Fragment key={`grid-${v}`}>
                <line x1="0" y1={v} x2="100" y2={v} stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                <line x1={v} y1="0" x2={v} y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              </React.Fragment>
            ))}

            {/* Dark current baseline */}
            <line x1="0" y1="92" x2="100" y2="92" stroke="rgba(202,74,74,0.35)" strokeWidth="0.7" strokeDasharray="3 2" />

            {/* Glow behind line */}
            <motion.path
              d="M 0 90 L 100 10"
              stroke="var(--color-accent, #7CDFFF)"
              strokeWidth="7"
              fill="none"
              style={{ pathLength, opacity: 0.12 }}
              strokeLinecap="round"
            />

            {/* Main photocurrent line */}
            <motion.path
              d="M 0 90 L 100 10"
              stroke="var(--color-accent, #7CDFFF)"
              strokeWidth="2"
              fill="none"
              style={{ pathLength }}
              strokeLinecap="round"
            />

            {/* Moving tip dot */}
            <motion.circle
              cx={tipX as any}
              cy={tipY as any}
              r="2.5"
              fill="white"
              style={{ filter: "drop-shadow(0 0 5px var(--color-accent))" }}
            />

            {/* Projection dashes from tip */}
            <motion.line
              x1={tipX as any} y1={tipY as any}
              x2={tipX as any} y2="100"
              stroke="var(--color-accent)"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              opacity="0.4"
            />
            <motion.line
              x1="0" y1={tipY as any}
              x2={tipX as any} y2={tipY as any}
              stroke="var(--color-accent)"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              opacity="0.4"
            />
          </svg>

          {/* Dark current label */}
          <span className="absolute bottom-[10%] -left-28 text-[#FF9A9A] text-[9px] uppercase tracking-wider font-mono whitespace-nowrap">
            ← Dark I_d
          </span>
        </div>
      </div>
    </motion.div>
  );
}
