"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { AudioToggle } from "@/components/AudioToggle";
import { SceneController } from "@/components/scenes/SceneController";

export default function LumaApp() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress across the entire page (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <>
      {/* 
        15 scenes -> 1500vh gives each scene 1 full screen of scrolling space.
      */}
      <div ref={containerRef} className="h-[1500vh] w-full relative bg-black">
        
        {/* Fixed cinematic viewport */}
        <div className="fixed inset-0 w-full h-full overflow-hidden flex items-center justify-center">
          
          {/* Base Environment */}
          <div className="absolute inset-0 bg-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black opacity-60 pointer-events-none" />

          {/* Core App Renderer */}
          <SceneController scrollYProgress={scrollYProgress} />

        </div>
      </div>

      <AudioToggle />
    </>
  );
}

