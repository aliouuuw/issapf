"use client";
import React, { useEffect, useState } from "react";
import { animate } from "framer-motion";
import Image from "next/image";

const SplashScreen = ({ finishLoading }: any) => {
  const [val, setVal] = useState(50)

  useEffect(() => {
    const timeout = setTimeout(() => {finishLoading()}, 6000)
    //  animate([["#logo", {opacity: 0}, {delay: 0.5}],["#logo", {scale:1.5, opacity:1},], ["#logo", {scale:1}]])
    return () => clearTimeout(timeout)
  }, []);

  return (
    <div className={`z-[${val}] flex h-screen w-screen items-center justify-center bg-black`}>
      
      {/* <Image id="logo" src="/issathecreator.png" alt="logo" width={200} height={200} /> */}
      
      <video
        id="video"
        autoPlay
        muted
        className="h-full w-screen"
      >
        <source src="intro.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default SplashScreen;
