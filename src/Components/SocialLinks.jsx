/*
   Copyright (C), 2024-2026, Maurice Williams
   Author: Maurice Williams
   FileName: SocialLinks.jsx
   Version: 1.0.0
   Creation: 26/11/2025
   Last modification: 26/11/2025
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const SocialLinks = () => {
  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
      <a
        href="https://www.linkedin.com/in/maurice-williams-672b92409"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faLinkedin}
        />
      </a>
      <a href="mailto:williamjonson565@gmail.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faEnvelope}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
