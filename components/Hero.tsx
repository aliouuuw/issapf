"use client"
import React, { useEffect, useState } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { motion, animate, useMotionValueEvent, useScroll} from "framer-motion";
import Image from "next/image";
import { ChevronsDown } from 'lucide-react';
import Menu from "./ui/menu";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function Hero() {
  const words = "Welcome to a world where imagination meets reality, where memories are immortalized in pixels and film."

  useEffect(()=> {
    animate([["#hero_photo", {y: [1000, 0], opacity: [0, 1]}, {delay: 5, duration: 1.2} ],])
  }, [])
  
  return (
    <>
      <AuroraBackground classID="max-w-screen h-screen">
        <div className="max-w-screen h-screen text-white z-10 flex flex-col justify-between py-8 px-8 md:px-16">
          <div className="flex items-center justify-between screen font-light">
            <div className="z-30 relative w-56 h-16">
              <Image src="/issathecreator.png" alt="Issa logo" fill className="w-full h-full object-cover object-center" quality={100}/>
            </div>
            <Menu />
          </div>
          <div className="z-20 relative flex items-center justify-center h-[12rem] text-[3.5rem] md:text-9xl xl:text-[12rem]">
            <TextGenerateEffect words={words} />
          </div>
          <div className="z-20 flex justify-between items-center md:items-end font-light max-md:pb-4">
            <div className="flex items-center text-sm animate-pulse">

            <ChevronsDown size={32} strokeWidth={1} className="h-12 w-12 text-[#EF0134]"/>
            </div>
            <div className="max-w-52 md:max-w-72 text-pretty">
            Location:
            <span className="text-[#EF0134] animate-pulse"> Sudbury, ON, CA.</span>
            </div>
          </div>
        </div>
      </AuroraBackground>
      <div 
        id= "hero_photo"
        className="absolute z-10 top-0 left-0 w-screen h-screen flex"
      >
        <Image
          src={"/issapf0.png"}
          alt="Bg image"
          fill
          quality={100}
          className="object-cover object-center md:object-contain md:object-bottom grayscale contrast-[1.10] max-md:pt-8"
          priority
        ></Image>
      </div>
      <div className="absolute z-10 top-0 left-0 w-screen h-screen shadow-[inset_0px_-40px_30px_10px_rgba(2,2,2,1)]">
      </div>
    </>
  );
}

export default Hero;
