"use client";

import { MotionValue } from "framer-motion";
import { Scene1Opening } from "./Scene1Opening";
import { Scene2LightEnters } from "./Scene2LightEnters";
import { Scene3DeviceReveal } from "./Scene3DeviceReveal";
import { Scene4ReverseBias } from "./Scene4ReverseBias";
import { Scene5PhotonInteraction } from "./Scene5PhotonInteraction";
import { Scene6LightToCurrent } from "./Scene6LightToCurrent";
import { Scene7OpticalSignalDetection } from "./Scene7OpticalSignalDetection";
import { Scene8RealWorld } from "./Scene8RealWorld";
import { Scene9Closing } from "./Scene9Closing";

export function SceneController({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  return (
    <>
      <Scene1Opening scrollYProgress={scrollYProgress} />
      <Scene2LightEnters scrollYProgress={scrollYProgress} />
      <Scene3DeviceReveal scrollYProgress={scrollYProgress} />
      <Scene4ReverseBias scrollYProgress={scrollYProgress} />
      <Scene5PhotonInteraction scrollYProgress={scrollYProgress} />
      <Scene6LightToCurrent scrollYProgress={scrollYProgress} />
      <Scene7OpticalSignalDetection scrollYProgress={scrollYProgress} />
      <Scene8RealWorld scrollYProgress={scrollYProgress} />
      <Scene9Closing scrollYProgress={scrollYProgress} />
    </>
  );
}
