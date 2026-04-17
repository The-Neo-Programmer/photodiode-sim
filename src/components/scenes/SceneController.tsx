"use client";

import { MotionValue } from "framer-motion";
import { Scene1Opening } from "./Scene1Opening";
import { Scene2WhatIsPhotodiode } from "./Scene2WhatIsPhotodiode";
import { Scene2LightAsInformation } from "./Scene2LightAsInformation";
import { Scene3Substrate } from "./Scene3Substrate";
import { Scene4PType } from "./Scene4PType";
import { Scene5NType } from "./Scene5NType";
import { Scene6PNJunction } from "./Scene6PNJunction";
import { Scene7ReverseBias } from "./Scene7ReverseBias";
import { Scene8DarkCurrent } from "./Scene8DarkCurrent";
import { Scene9PhotonsArrive } from "./Scene9PhotonsArrive";
import { Scene10Photogeneration } from "./Scene10Photogeneration";
import { Scene11_12Graph } from "./Scene11_12Graph";
import { Scene13Circuit } from "./Scene13Circuit";
import { Scene13OpticalDetection } from "./Scene13OpticalDetection";
import { Scene14RealWorld } from "./Scene14RealWorld";
import { Scene15Closing } from "./Scene15Closing";

export function SceneController({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  return (
    <div className="relative w-full h-full">
      <Scene1Opening scrollYProgress={scrollYProgress} />
      <Scene2WhatIsPhotodiode scrollYProgress={scrollYProgress} />
      <Scene2LightAsInformation scrollYProgress={scrollYProgress} />
      <Scene3Substrate scrollYProgress={scrollYProgress} />
      <Scene4PType scrollYProgress={scrollYProgress} />
      <Scene5NType scrollYProgress={scrollYProgress} />
      <Scene6PNJunction scrollYProgress={scrollYProgress} />
      <Scene7ReverseBias scrollYProgress={scrollYProgress} />
      <Scene8DarkCurrent scrollYProgress={scrollYProgress} />
      <Scene9PhotonsArrive scrollYProgress={scrollYProgress} />
      <Scene10Photogeneration scrollYProgress={scrollYProgress} />
      <Scene11_12Graph scrollYProgress={scrollYProgress} />
      <Scene13Circuit scrollYProgress={scrollYProgress} />
      <Scene13OpticalDetection scrollYProgress={scrollYProgress} />
      <Scene14RealWorld scrollYProgress={scrollYProgress} />
      <Scene15Closing scrollYProgress={scrollYProgress} />
    </div>
  );
}
