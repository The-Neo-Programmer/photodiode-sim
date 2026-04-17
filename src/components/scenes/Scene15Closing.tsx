"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export function Scene15Closing({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Fade in only after Scene14 starts clearing (starts at 0.970)
  const opacity = useTransform(scrollYProgress, [0.970, 0.990, 1.0], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0.970, 1.0], [30, 0]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  return (
    <motion.div 
      style={{ opacity, y, display }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-80 h-80 rounded-full bg-[var(--color-accent)]/6 blur-[100px] animate-pulse" />
      </div>

      <div className="mb-8 drop-shadow-2xl">
        <Image 
          src="/Luma-icon.png" 
          alt="Luma Identity" 
          width={80} 
          height={80} 
          sizes="80px"
          className="mx-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        />
      </div>
      <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6 font-[var(--font-sans)]" style={{ textShadow: "0 0 40px rgba(255,255,255,0.15)" }}>
        Luma
      </h1>
      <p className="text-base md:text-lg text-white/60 font-light max-w-xl mx-auto leading-relaxed font-[var(--font-sans)]">
        Light becomes current. Photons become information. <br />That bridge is the photodiode.
      </p>
    </motion.div>
  );
}
