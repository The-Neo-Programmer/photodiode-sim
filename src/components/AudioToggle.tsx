"use client";

import { useLumaStore } from "@/lib/store";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef } from "react";

export function AudioToggle() {
  const { soundEnabled, toggleSound } = useLumaStore();
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    // Generate a sleek, cinematic underlying drone when true
    if (soundEnabled) {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const ctx = audioCtxRef.current;
      
      // Prevent creating multiple if clicked quickly
      if (ctx.state === "suspended") ctx.resume();
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Deep cinematic drone profile
      osc.type = "sine";
      osc.frequency.setValueAtTime(55.0, ctx.currentTime); // Low A1 note

      // Gentle fade in
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 2); // Very soft volume

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();

      oscillatorRef.current = osc;
      gainNodeRef.current = gain;

    } else {
      // Gentle fade out
      if (audioCtxRef.current && gainNodeRef.current && oscillatorRef.current) {
        const ctx = audioCtxRef.current;
        gainNodeRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);
        setTimeout(() => {
          oscillatorRef.current?.stop();
          oscillatorRef.current?.disconnect();
          oscillatorRef.current = null;
        }, 1000);
      }
    }

    // Cleanup on unmount
    return () => {
      if (audioCtxRef.current && oscillatorRef.current) {
         oscillatorRef.current.stop();
         oscillatorRef.current.disconnect();
         oscillatorRef.current = null;
      }
    };
  }, [soundEnabled]);

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
