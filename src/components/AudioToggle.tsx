"use client";

import { useLumaStore } from "@/lib/store";
import { Volume2, VolumeX } from "lucide-react";

export function AudioToggle() {
  const { soundEnabled, toggleSound } = useLumaStore();

  return (
    <button
      onClick={toggleSound}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full backdrop-blur-md border transition-all duration-500 ease-in-out flex items-center justify-center ${
        soundEnabled 
          ? "bg-white/10 border-white/20 text-white hover:bg-white/15" 
          : "bg-black/20 border-white/5 text-white/40 hover:text-white/80 hover:bg-black/40"
      }`}
      aria-label="Toggle ambient sound"
    >
      {soundEnabled ? <Volume2 size={20} strokeWidth={1.5} /> : <VolumeX size={20} strokeWidth={1.5} />}
    </button>
  );
}
