"use client";

import { useEffect, useState, useRef } from "react";
import { Play, Square } from "lucide-react";

export function AutoScroll() {
  const [isPlaying, setIsPlaying] = useState(false);
  const requestRef = useRef<number | null>(null);

  // Speed logic
  const animateScroll = () => {
    // Scroll downwards slowly. 
    // We adjust multiplier natively to keep it readable (~1.5px per frame).
    window.scrollBy(0, 1.5);

    // Stop if we hit the bottom
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
      setIsPlaying(false);
      return;
    }

    requestRef.current = requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(animateScroll);
    } else {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying]);

  // Pause if user manually scrolls using mousewheel or touch
  useEffect(() => {
    const handleManualScroll = (e: WheelEvent | TouchEvent) => {
       if (isPlaying) {
           setIsPlaying(false);
       }
    };
    window.addEventListener("wheel", handleManualScroll);
    window.addEventListener("touchstart", handleManualScroll);
    return () => {
       window.removeEventListener("wheel", handleManualScroll);
       window.removeEventListener("touchstart", handleManualScroll);
    };
  }, [isPlaying]);

  return (
    <button
      onClick={() => setIsPlaying(!isPlaying)}
      className={`fixed bottom-6 right-20 z-50 p-3 rounded-full backdrop-blur-md border transition-all duration-500 ease-in-out flex items-center justify-center ${
        isPlaying 
          ? "bg-[var(--color-accent)]/20 border-[var(--color-accent)]/50 text-[var(--color-accent)] shadow-[0_0_15px_var(--color-accent)]" 
          : "bg-black/20 border-white/10 text-white/60 hover:text-white hover:bg-black/40"
      }`}
      aria-label="Toggle Auto Play"
    >
      {isPlaying ? <Square size={18} strokeWidth={1.5} className="fill-[var(--color-accent)]/20" /> : <Play size={18} strokeWidth={2} className="ml-0.5" />}
    </button>
  );
}
