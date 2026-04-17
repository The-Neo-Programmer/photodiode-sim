"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { AudioToggle } from "@/components/AudioToggle";
import { AutoScroll } from "@/components/AutoScroll";
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
        16 scenes -> 1600vh gives each scene 1 full screen of scrolling space.
      */}
      <div ref={containerRef} className="h-[1600vh] w-full relative bg-[#060A10]">
        
        {/* Fixed cinematic viewport */}
        <div className="fixed inset-0 w-full h-full overflow-hidden flex items-center justify-center">
          
          {/* Base Environment (Brightened specifically from V2) */}
          <div className="absolute inset-0 bg-[#060A10] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#060A10] to-[#040608] opacity-100 pointer-events-none" />

          {/* Core App Renderer */}
          <SceneController scrollYProgress={scrollYProgress} />

        </div>
      </div>

      <AutoScroll />
      <AudioToggle />
    </>
  );
}

