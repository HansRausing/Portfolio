/*
   Copyright (C), 2024-2025, Maurice Williams
   Author: Maurice Williams
   FileName: PreloadMedia.jsx
   Version: 1.0.0
   Creation: 26/11/2025
   Last modification: 26/11/2025
*/

import { useState } from "react";
import Loader from "./Loader";

const PreloadMedia = ({ images, children }) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  const imageElements = images.map((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = onLoad;
    return img;
  });

  return loaded ? children : <Loader />;
};

export default PreloadMedia;
