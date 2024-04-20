"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const SplashScreen = ({ finishLoading }: any) => {
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();

  const animate = async () => {
    await controls.start({ scale: 2 });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
      animate();
      finishLoading();
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isMounted && (
        <div className="flex h-screen items-center justify-center">
          {/* <Image
            id="logo"
            src="/issalogo.png"
            alt="My logo"
            className="invert"
            width={60}
            height={60}
          /> */}
          <motion.div
            id="logo"
            className="h-32 w-fit border bg-zinc-800"
            initial={{ scale: 1 }}
            animate={controls}
          >
            Logo
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SplashScreen;
