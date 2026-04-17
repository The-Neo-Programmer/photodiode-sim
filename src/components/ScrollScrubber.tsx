"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useScrollState } from "@/lib/scrollState";

export function ScrollScrubber() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const { setAutoScrolling } = useScrollState();

  // Spring value: 0 → 100 (percentage of total scroll)
  const springY = useSpring(0, { stiffness: 70, damping: 16, mass: 0.6 });

  // Derived motion values for DOM bindings
  const dotTop   = useTransform(springY, (v) => `${v}%`);
  const fillH    = useTransform(springY, (v) => `${v}%`);

  // Sync spring with window.scrollY
  useEffect(() => {
    const sync = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, window.scrollY / total) : 0;
      springY.set(p * 100);
    };
    window.addEventListener("scroll", sync, { passive: true });
    sync();
    return () => window.removeEventListener("scroll", sync);
  }, [springY]);

  // Navigate the page to wherever the user clicked/dragged on the track
  const navigateByClientY = useCallback((clientY: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const p = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
    const total = document.body.scrollHeight - window.innerHeight;
    window.scrollTo({ top: p * total, behavior: "instant" as ScrollBehavior });
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      isDragging.current = true;
      setAutoScrolling(false); // cancel autoscroll when user grabs scrubber
      e.currentTarget.setPointerCapture(e.pointerId);
      navigateByClientY(e.clientY);
    },
    [navigateByClientY, setAutoScrolling]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging.current) return;
      navigateByClientY(e.clientY);
    },
    [navigateByClientY]
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: "1.25rem",
        top: "10vh",
        height: "70vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        zIndex: 50,
        userSelect: "none",
        touchAction: "none",
      }}
    >
      {/* Clickable / draggable track */}
      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{
          position: "relative",
          width: "3px",
          height: "100%",
          background: "rgba(255,255,255,0.07)",
          borderRadius: "1.5px",
          cursor: "pointer",
        }}
      >
        {/* Filled portion (follows spring) */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: fillH,
            background:
              "linear-gradient(to bottom, rgba(124,220,255,0.08), rgba(124,220,255,0.45))",
            borderRadius: "1.5px",
            pointerEvents: "none",
          }}
        />

        {/* Glowing pulsing dot */}
        <motion.div
          style={{
            position: "absolute",
            left: "50%",
            top: dotTop,
            x: "-50%",
            y: "-50%",
            width: "13px",
            height: "13px",
            borderRadius: "50%",
            background: "rgba(124,220,255,0.92)",
            pointerEvents: "none",
            zIndex: 2,
          }}
          animate={{
            boxShadow: [
              "0 0 0px 0px rgba(124,220,255,0.0)",
              "0 0 0px 6px rgba(124,220,255,0.35)",
              "0 0 0px 0px rgba(124,220,255,0.0)",
            ],
          }}
          transition={{
            boxShadow: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>
    </div>
  );
}
