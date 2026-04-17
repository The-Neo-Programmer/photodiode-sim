"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export function Scene1Opening({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Use a slight fade out by 0.04 for better timing
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.04], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.04], [0, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.04], [1, 1.08]);
  const display = useTransform(opacity, (o) => (o > 0 ? "flex" : "none"));

  return (
    <motion.div 
      style={{ opacity, y, scale, display }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
    >
      {/* Ambient particle glow behind logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-[var(--color-accent)]/5 blur-[80px] animate-pulse" />
      </div>

      <motion.div 
        className="mb-8 drop-shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image 
          src="/Luma-icon.png" 
          alt="Luma Identity" 
          width={88} 
          height={88} 
          sizes="88px"
          priority
          className="mx-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        />
      </motion.div>

      <motion.h1 
        className="text-7xl md:text-9xl font-light tracking-tight text-white mb-6 font-[var(--font-sans)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        style={{ textShadow: "0 0 60px rgba(255,255,255,0.1)" }}
      >
        Luma
      </motion.h1>

      <motion.p 
        className="text-lg md:text-2xl text-white/70 font-light max-w-xl mx-auto leading-relaxed font-[var(--font-sans)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
      >
        A cinematic, scroll-driven exploration <br className="hidden md:block"/>of semiconductor physics.
      </motion.p>

      <motion.p
        className="text-sm text-white/30 mt-12 tracking-[0.3em] uppercase font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
      >
        Scroll to begin
      </motion.p>
    </motion.div>
  );
}
