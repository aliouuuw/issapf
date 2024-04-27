"use client";
import React, { useEffect, useState } from "react";


const SplashScreen = ({ finishLoading }: any) => {


  useEffect(() => {
    const timeout = setTimeout(() => {finishLoading()}, 6000)
    return () => clearTimeout(timeout)
  }, []);

  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-black"
    >
        <video id="video" playsInline autoPlay muted className="h-full w-screen md:hidden">
          <source src="intro_sm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video id="video" playsInline autoPlay muted className="h-full w-screen max-md:hidden">
          <source src="intro_lg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  );
};

export default SplashScreen;
