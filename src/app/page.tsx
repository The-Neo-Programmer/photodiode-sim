"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { AudioToggle } from "@/components/AudioToggle";
import { ControlPanel } from "@/components/ControlPanel";
import { SceneController } from "@/components/scenes/SceneController";

export default function LumaApp() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress across the entire page
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <>
      {/* 
        This div defines the physical scroll height of our page. 
        We have 9 scenes, so 900vh gives each scene 1 full screen of scrolling.
      */}
      <div ref={containerRef} className="h-[900vh] w-full relative">
        
        {/* Fixed cinematic viewport */}
        <div className="fixed inset-0 w-full h-full overflow-hidden flex items-center justify-center">
          
          {/* Base Environment: deepest dark background, subtle glow */}
          <div className="absolute inset-0 bg-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black opacity-60" />

          {/* Rendering the continuous visual canvas here */}
          <SceneController scrollYProgress={scrollYProgress} />

        </div>
      </div>

      <ControlPanel />
      <AudioToggle />
    </>
  );
}
