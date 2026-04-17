"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { AutoScroll } from "@/components/AutoScroll";
import { ScrollScrubber } from "@/components/ScrollScrubber";
import { SceneController } from "@/components/scenes/SceneController";

export default function LumaApp() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <>
      <div ref={containerRef} className="h-[2000vh] w-full relative bg-[#060A10]">
        <div className="fixed inset-0 w-full h-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[#060A10] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#060A10] to-[#040608] opacity-100 pointer-events-none" />
          <SceneController scrollYProgress={scrollYProgress} />
        </div>
      </div>
      <ScrollScrubber />
      <AutoScroll />
    </>
  );
}


