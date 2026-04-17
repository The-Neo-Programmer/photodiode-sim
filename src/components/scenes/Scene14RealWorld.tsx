"use client";

import { motion, MotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface App {
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  details: string[];
}

const applications: App[] = [
  {
    icon: "🌐",
    title: "Fiber Optics",
    subtitle: "High-speed data reception in internet backbone networks.",
    color: "#7CDFFF",
    details: [
      "Operates at wavelengths of 850nm, 1310nm, and 1550nm.",
      "Enables data rates exceeding 100 Gbps per channel.",
      "InGaAs photodiodes used for long-haul telecom.",
    ],
  },
  {
    icon: "📡",
    title: "IR Receivers",
    subtitle: "Detecting infrared pulses from remote controls and sensors.",
    color: "#FF9A7C",
    details: [
      "Sensitive in the 700nm–1000nm near-infrared band.",
      "Used in TV remotes, barcode scanners, and LIDAR.",
      "Silicon PIN photodiodes are the industry standard.",
    ],
  },
  {
    icon: "🔍",
    title: "Smoke Detectors",
    subtitle: "Sensing light scattering caused by airborne smoke particles.",
    color: "#B0FFC8",
    details: [
      "A LED + photodiode pair monitors the optical path.",
      "Smoke particles scatter the beam, triggering the alarm.",
      "Photodiode current drops, indicating danger.",
    ],
  },
  {
    icon: "🔬",
    title: "Medical Imaging",
    subtitle: "Light-based pulse oximeters and fluorescence microscopy.",
    color: "#FFD97C",
    details: [
      "Pulse oximeters use red & IR to measure blood oxygen.",
      "CT scanners use scintillator + photodiode arrays.",
      "Extremely low noise required for biological imaging.",
    ],
  },
  {
    icon: "☀️",
    title: "Solar Cells",
    subtitle: "Large-area photodiode arrays harvesting energy from sunlight.",
    color: "#FFCA28",
    details: [
      "Operate in photovoltaic (forward-biased) mode.",
      "Silicon, GaAs, and perovskite materials are common.",
      "Efficiencies now exceed 29% in lab conditions.",
    ],
  },
  {
    icon: "📸",
    title: "Camera Sensors",
    subtitle: "CMOS / CCD image sensors powering every digital camera.",
    color: "#CF9FFF",
    details: [
      "Millions of photodiode pixels in a single sensor chip.",
      "Each pixel converts photons to charge independently.",
      "Backside-illuminated (BSI) designs improve sensitivity.",
    ],
  },
];

function AppCard({ app }: { app: App }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setExpanded((v) => !v)}
      className="flex flex-col gap-3 border bg-white/[0.03] rounded-2xl cursor-pointer select-none overflow-hidden transition-colors duration-300"
      style={{
        borderColor: expanded ? `${app.color}50` : "rgba(255,255,255,0.08)",
        boxShadow: expanded ? `0 0 30px ${app.color}20` : "none",
      }}
      whileHover={{
        scale: 1.02,
        borderColor: `${app.color}60`,
        boxShadow: `0 0 25px ${app.color}25`,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="flex items-start gap-4 p-5">
        <motion.div
          className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-2xl"
          style={{
            background: `${app.color}18`,
            boxShadow: expanded ? `0 0 20px ${app.color}40` : "none",
          }}
          animate={{ scale: expanded ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {app.icon}
        </motion.div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium tracking-wide" style={{ color: expanded ? app.color : "rgba(255,255,255,0.85)" }}>
            {app.title}
          </h3>
          <p className="text-xs text-white/45 leading-relaxed mt-1">{app.subtitle}</p>
        </div>

        {/* Expand caret */}
        <motion.div
          className="text-white/25 text-sm flex-shrink-0 mt-1"
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▾
        </motion.div>
      </div>

      {/* Expandable detail section */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-white/5 pt-4 flex flex-col gap-2">
              {app.details.map((detail, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -6, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-2 text-xs text-white/60 leading-relaxed"
                >
                  <span style={{ color: app.color }} className="mt-[3px] text-[10px] flex-shrink-0">◆</span>
                  {detail}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Scene14RealWorld({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Visible 0.930 to 0.990 — after OpticalDetection (0.875-0.935)
  const opacity = useTransform(scrollYProgress, [0.930, 0.950, 0.975, 0.990], [0, 1, 1, 0]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  return (
    <motion.div
      style={{ opacity, display }}
      // pointer-events-auto so cards are clickable
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto px-8 py-10"
    >
      {/* Title */}
      <div className="text-center mb-8 flex-shrink-0">
        <p className="text-[11px] tracking-[0.4em] uppercase text-white/30 font-mono mb-3">Chapter 6 — Impact</p>
        <h2 className="text-3xl md:text-4xl text-white font-light tracking-wide">Real-World Applications</h2>
        <p className="text-white/50 text-sm mt-3 max-w-lg mx-auto leading-relaxed">
          Click any card to reveal technical details.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full overflow-y-auto" style={{ maxHeight: "70vh" }}>
        {applications.map((app) => (
          <AppCard key={app.title} app={app} />
        ))}
      </div>
    </motion.div>
  );
}
