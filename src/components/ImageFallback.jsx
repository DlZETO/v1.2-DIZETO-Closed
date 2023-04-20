import React, { useState } from "react";
import Image from "next/image";

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const triplet = (e1, e2, e3) => keyStr.charAt(e1 >> 2) + keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) + keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) + keyStr.charAt(e3 & 63);
const rgbDataURL = (r, g, b) => `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

export default function ImageFallback({ src, alt, width }) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return <Image src={src} placeholder="blur" blurDataURL={rgbDataURL(220, 38, 38)} alt={alt} width={width} height={0} style={{ height: loaded ? "auto" : "350px" }} onLoad={handleLoad} priority />;
}
