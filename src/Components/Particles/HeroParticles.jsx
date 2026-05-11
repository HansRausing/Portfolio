/*
   Copyright (C), 2024-2025, Maurice Williams
   Author: Maurice Williams
   FileName: HeroParticles.jsx
   Version: 1.0.0
   Creation: 26/11/2025
   Last modification: 26/11/2025
*/

import ParticlesComponent from "./ParticlesComponent";
import { heroOptions } from "./particlesOptions";

const HeroParticles = () => {
  return (
    <div className="w-full h-screen min-h-[800px]">
      <ParticlesComponent
        id="hero-particles"
        className="w-full h-screen z-0 min-h-[800px]"
        particlesOptions={heroOptions}
      />
    </div>
  );
};

export default HeroParticles;
