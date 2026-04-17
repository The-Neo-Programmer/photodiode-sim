"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Scene14RealWorld({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.93 to 1.00
  const opacity = useTransform(scrollYProgress, [0.93, 0.95, 0.98, 1.0], [0, 1, 1, 0]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  const applications = [
    {
      icon: "🌐",
      title: "Fiber Optics",
      desc: "High-speed data reception in internet backbone networks.",
      color: "#7CDFFF",
    },
    {
      icon: "📡",
      title: "IR Receivers",
      desc: "Detecting infrared pulses from remote controls and proximity sensors.",
      color: "#FF9A7C",
    },
    {
      icon: "🔍",
      title: "Smoke Detectors",
      desc: "Sensing light scattering caused by airborne smoke particles.",
      color: "#B0FFC8",
    },
    {
      icon: "🔬",
      title: "Medical Imaging",
      desc: "Light-based pulse oximeters and fluorescence microscopy.",
      color: "#FFD97C",
    },
    {
      icon: "☀️",
      title: "Solar Cells",
      desc: "Large-area photodiode arrays harvesting energy from sunlight.",
      color: "#FFCA28",
    },
    {
      icon: "📸",
      title: "Camera Sensors",
      desc: "CMOS / CCD image sensors that power every modern digital camera.",
      color: "#CF9FFF",
    },
  ];

  return (
    <motion.div
      style={{ opacity, display }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-8"
    >
      {/* Title at strict top */}
      <div className="text-center mb-10 flex-shrink-0">
        <p className="text-[11px] tracking-[0.4em] uppercase text-white/30 font-mono mb-3">
          Chapter 6 — Impact
        </p>
        <h2 className="text-3xl md:text-4xl text-white font-light tracking-wide">
          Real-World Applications
        </h2>
        <p className="text-white/50 text-sm mt-3 max-w-lg mx-auto leading-relaxed">
          From optical communication to life-saving diagnostics, photodiodes bridge the world of light and electronics.
        </p>
      </div>

      {/* Card grid strictly below the title */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto w-full">
        {applications.map((app) => (
          <div
            key={app.title}
            className="flex flex-col items-center text-center gap-3 border border-white/8 bg-white/[0.03] p-5 rounded-2xl backdrop-blur-sm"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{ background: `${app.color}15`, boxShadow: `0 0 20px ${app.color}30` }}
            >
              {app.icon}
            </div>
            <h3 className="text-sm text-white/90 tracking-wide font-medium">{app.title}</h3>
            <p className="text-xs text-white/40 leading-relaxed">{app.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
