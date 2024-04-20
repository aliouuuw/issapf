"use client"
import React, { useState } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { motion, useMotionValueEvent, useScroll} from "framer-motion";
import Image from "next/image";
import { ChevronsDown } from 'lucide-react';
import Menu from "./ui/menu";

function Hero() {
  const text = "ISSA NDAO".split(" ");
  const [xValue, setXValue] = useState(0);
  const { scrollYProgress } = useScroll()
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setXValue(latest*300)
  })
  
  return (
    <>
      <AuroraBackground classID="max-w-screen h-screen">
        <div className="max-w-screen h-screen text-white z-10 flex flex-col justify-between py-8 px-8 md:px-16">
          <div className="flex items-center justify-between screen font-light">
            <div className="z-30 relative w-56 h-12">
              <Image src="/issalogo.png" alt="Issa logo" fill className="w-full h-full object-cover object-center invert" quality={100}/>
            </div>
            <Menu />
          </div>
          <div className="z-20 relative flex items-center justify-center h-[12rem] text-[3.5rem] md:text-9xl xl:text-[12rem]">
            <h1 className="w-fit font-extrabold">
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: i / 20,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </h1>
            <motion.h1 
              className="absolute w-fit font-extrabold text-stroke-1 text-transparent overflow-y-clip"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay: 1}}
              style={{x: xValue}}
            ><span className="invisible">ISSA</span> NDAO</motion.h1>
            <motion.h1 
              className="absolute w-fit font-extrabold text-stroke-1 text-transparent overflow-y-clip"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay: 1}}
              style={{x: -xValue}}
            >ISSA <span className="invisible">NDAO</span></motion.h1>
          </div>
          <div className="z-20 flex justify-between items-center md:items-end font-light max-md:pb-4">
            <div className="flex items-center text-sm animate-pulse">

            <ChevronsDown size={32} strokeWidth={1} className="h-12 w-12 "/>
            </div>
            <div className="max-w-52 md:max-w-72 text-pretty">
            Welcome to a world where imagination meets reality, where memories are immortalized in pixels and film.
            </div>
          </div>
        </div>
      </AuroraBackground>
      <div className="absolute z-10 top-0 left-0 w-screen h-screen flex">
        <Image
          src={"/issapf0.png"}
          alt="Bg image"
          fill
          quality={100}
          className="object-cover object-center md:object-contain md:object-bottom grayscale contrast-[1.10] max-md:pt-8"
        ></Image>
      </div>
      <div className="absolute z-10 top-0 left-0 w-screen h-screen shadow-[inset_0px_-40px_30px_10px_rgba(2,2,2,1)]">
      </div>
    </>
  );
}

export default Hero;
