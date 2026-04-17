"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// A self-contained audio toggle that does NOT depend on Zustand.
// Uses the Web Audio API to synthesize a cinematic ambient pad
// from scratch — no external files required.
export function AudioToggle() {
  const [enabled, setEnabled] = useState(false);

  // Web Audio nodes
  const ctxRef    = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);

  /** Build the complete drone graph once and park it silenced. */
  function buildDrone(ctx: AudioContext, master: GainNode) {
    const notes = [55, 82.4, 110, 146.8]; // A1 E2 A2 D3

    notes.forEach((freq, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Slight detune for richness
      osc.detune.setValueAtTime((i % 2 === 0 ? 1 : -1) * (i * 3), ctx.currentTime);

      gain.gain.setValueAtTime(0.18 / notes.length, ctx.currentTime);

      osc.connect(gain);
      gain.connect(master);
      osc.start();
    });

    // Add a subtle shimmer (high-frequency sine, very quiet)
    const shimmer = ctx.createOscillator();
    const shimGain = ctx.createGain();
    shimmer.type = "sine";
    shimmer.frequency.setValueAtTime(880, ctx.currentTime);
    shimGain.gain.setValueAtTime(0.01, ctx.currentTime);
    shimmer.connect(shimGain);
    shimGain.connect(master);
    shimmer.start();
  }

  useEffect(() => {
    if (enabled) {
      // Create context on first interaction (browser requirement)
      if (!ctxRef.current) {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const master = ctx.createGain();
        master.gain.setValueAtTime(0, ctx.currentTime);
        master.connect(ctx.destination);

        ctxRef.current  = ctx;
        masterRef.current = master;

        buildDrone(ctx, master);
      }

      const ctx    = ctxRef.current!;
      const master = masterRef.current!;

      if (ctx.state === "suspended") ctx.resume();

      // Fade in
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 2.5);

    } else {
      if (ctxRef.current && masterRef.current) {
        const ctx    = ctxRef.current;
        const master = masterRef.current;

        // Fade out gracefully
        master.gain.cancelScheduledValues(ctx.currentTime);
        master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
        master.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.5);

        setTimeout(() => {
          if (ctx.state !== "closed") ctx.suspend();
        }, 1600);
      }
    }
  }, [enabled]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      ctxRef.current?.close();
    };
  }, []);

  return (
    <button
      onClick={() => setEnabled((v) => !v)}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full backdrop-blur-md border transition-all duration-500 ease-in-out flex items-center justify-center ${
        enabled
          ? "bg-white/10 border-white/25 text-white shadow-[0_0_12px_rgba(255,255,255,0.1)]"
          : "bg-black/30 border-white/8 text-white/40 hover:text-white/80 hover:bg-black/40"
      }`}
      aria-label="Toggle ambient sound"
    >
      {enabled ? (
        <Volume2 size={20} strokeWidth={1.5} />
      ) : (
        <VolumeX size={20} strokeWidth={1.5} />
      )}
    </button>
  );
}
