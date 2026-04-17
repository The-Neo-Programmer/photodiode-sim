"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollState } from "@/lib/scrollState";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

export function AutoScroll() {
  const { isAutoScrolling, setAutoScrolling } = useScrollState();
  const requestRef = useRef<number | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Track scroll position to show/hide tooltip only on the first screen
  const { scrollY } = useScroll();
  const tooltipOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    // Show tooltip after a brief delay on initial load
    const timer = setTimeout(() => setShowTooltip(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const animateScroll = () => {
    // 1.5px per frame = ~90px/s at 60fps.
    // Total height 2000vh = 20,000px on typical screen.
    // ~220 seconds total.
    window.scrollBy(0, 1.5);

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
      setAutoScrolling(false);
      return;
    }

    requestRef.current = requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    if (isAutoScrolling) {
      requestRef.current = requestAnimationFrame(animateScroll);
    } else {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isAutoScrolling]);

  // Pause on manual interaction
  useEffect(() => {
    const handleManual = () => {
      if (isAutoScrolling) setAutoScrolling(false);
    };
    window.addEventListener("wheel", handleManual);
    window.addEventListener("touchstart", handleManual);
    return () => {
      window.removeEventListener("wheel", handleManual);
      window.removeEventListener("touchstart", handleManual);
    };
  }, [isAutoScrolling, setAutoScrolling]);

  return (
    <div className="fixed bottom-10 right-5 z-50 flex flex-col items-center gap-4">
      
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            style={{ opacity: tooltipOpacity as any }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-full right-full mr-4 mb-2 whitespace-nowrap"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl text-[11px] text-white/90 tracking-wide shadow-2xl">
              Experience the full cinematic narrative automatically.
              {/* Tooltip Arrow */}
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white/10 border-t border-r border-white/20 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-mono -rotate-90 origin-center translate-y-[-10px]">
        Auto
      </span>

      {/* Vertical Toggle Switch */}
      <div 
        onClick={() => setAutoScrolling(!isAutoScrolling)}
        className={`w-8 h-14 rounded-full border cursor-pointer transition-all duration-500 relative flex items-center justify-center ${
          isAutoScrolling 
            ? "border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 shadow-[0_0_20px_var(--color-accent)]/10" 
            : "border-white/10 bg-white/5"
        }`}
      >
        <motion.div 
          animate={{ 
            y: isAutoScrolling ? 12 : -12,
            backgroundColor: isAutoScrolling ? "var(--color-accent)" : "rgba(255,255,255,0.4)"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="w-5 h-5 rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}
