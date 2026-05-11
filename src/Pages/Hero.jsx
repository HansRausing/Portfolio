/*
   Copyright (C), 2024-2025, Maurice Williams
   Author: Maurice Williams
   FileName: Hero.jsx
   Version: 1.0.0
   Creation: 26/11/2025
   Last modification: 26/11/2025
*/

import { m, LazyMotion, domAnimation } from "framer-motion";
import HeroText from "../Components/HeroText";
import HeroParticles from "../Components/Particles/HeroParticles";
import HeroScroller from "../Components/elements/HeroScroller";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full flex justify-center overflow-hidden-web relative"
    >
      <LazyMotion features={domAnimation} strict>
        <m.div
          id="hero"
          className="relative w-full flex justify-center items-center h-screen min-h-[800px]"
        >
          <HeroText />
          <HeroParticles />
        </m.div>
        <HeroScroller />
      </LazyMotion>
    </div>
  );
};

export default Hero;
