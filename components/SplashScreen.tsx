"use client";
import React, { useEffect, useState } from "react";


const SplashScreen = ({ finishLoading }: any) => {
  const [val, setVal] = useState(40);
  const [screen, setScreen] = useState<number>(window.innerWidth);


  useEffect(() => {
    const timeout = setTimeout(() => {finishLoading()}, 6000)
    const handleResize = () => {
      setScreen(window.innerWidth);
      console.log(window.innerWidth)
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for screen size
    handleResize();

    // Cleanup function to remove event listener
    return () => {window.removeEventListener("resize", handleResize); clearTimeout(timeout)}
  }, []);

  return (
    <div
      className={`z-[${val}] flex h-screen w-screen items-center justify-center bg-black`}
    >
      {(screen < 640) ? (
        <video id="video" playsInline autoPlay muted className="h-full w-screen">
          <source src="intro_sm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <video id="video" playsInline autoPlay muted className="h-full w-screen">
          <source src="intro_lg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default SplashScreen;
