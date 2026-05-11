/*
   Copyright (C), 2024-2025, Maurice Williams
   Author: Maurice Williams
   FileName: MarqueeCards.jsx
   Version: 1.0.0
   Creation: 26/11/2025
   Last modification: 26/11/2025
*/

import Marquee from "react-fast-marquee";

const MarqueeCards = ({ children, direction }) => {
  return (
    <Marquee
      direction={direction}
      gradient={false}
      speed={100}
      pauseOnHover={true}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;
