"use client";
import React, { useEffect } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { motion, animate, stagger } from "framer-motion";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function Hero() {
  const words =
    "Welcome to a world where imagination meets reality, where memories are immortalized in pixels and film.";
  const HIDE = "polygon(100% 100%, 100% 100%, 0% 100%, 0% 100%)";
  const SHOW = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

  useEffect(() => {
    //animate([["#hero_photo", {y: [1000, 0], opacity: [0, 1]}, {delay: 3, duration: 1.2} ],])
    animate([
      ["#image", { opacity: [0, 1] }, { duration: 5, at: 4 }],
      [
        "#clip",
        { clipPath: [SHOW, HIDE] },
        { ease: "easeInOut", delay: stagger(0.15), at: 4 },
      ],
    ]);
  }, []);

  return (
    <>
      <div className="max-w-screen h-screen text-white z-10 flex flex-col justify-end pb-24 px-8 md:px-16">
        <div className="z-20 flex items-center justify-end md:justify-center h-full text-[3.5rem] md:text-9xl xl:text-[12rem] mix-blend-difference ">
          <TextGenerateEffect words={words} />
        </div>
        <div className="z-20 flex justify-between items-center md:items-end font-light max-md:pb-4">
          <div className="flex items-center text-sm animate-pulse">
            <ChevronsDown size={32} strokeWidth={1} className="h-12 w-12" />
          </div>
          <div className="max-w-52 md:max-w-72 text-pretty">
            Location:
            <span className="text-[#EF0134] animate-pulse">
              {" "}
              Sudbury, ON, CA.
            </span>
          </div>
        </div>
      </div>
      <div
        id="image"
        className="absolute z-10 top-0 left-0 w-screen h-screen flex"
      >
        <Image
          src={"/issapf0.png"}
          alt="Bg image"
          fill
          quality={100}
          className="object-cover object-center md:object-contain md:object-bottom contrast-[1.10] max-md:pt-8 pb-20"
          priority
        />
      </div>
      <div
        id="clip"
        className="absolute z-10 top-0 left-0 w-[12%] h-screen bg-[#020202]"
      />
      <div
        id="clip"
        className="absolute z-10 top-0 left-[10%] w-[12%] h-screen bg-[#020202]"
      />
      <div
        id="clip"
        className="absolute z-10 top-0 left-[20%] w-[12%] h-screen bg-[#020202]"
      />
      <div
        id="clip"
        className="absolute z-10 top-0 left-[30%] w-[12%] h-screen bg-[#020202]"
      />
      <div
        id="clip"
        className="absolute z-10 top-0 left-[40%] w-[12%] h-screen bg-[#020202]"
      />
      <div
        id="clip"
        className="absolute z-10 top-0 left-[50%] w-[12%] h-screen bg-[#020202]"
      />
      <div
        id="clip"
        className="absolute z-10 top-0 left-[60%] w-[12%] h-screen bg-[#020202]"
      />
      <div
        id="clip"
        className="absolute z-10 top-0 left-[70%] w-[12%] h-screen bg-[#020202]"
      />
      <div
        id="clip"
        className="absolute z-10 top-0 left-[80%] w-[12%] h-screen bg-[#020202]"
      />
      <div
        id="clip"
        className="absolute z-10 top-0 left-[88%] w-[12%] h-screen bg-[#020202]"
      />
      <div className="absolute z-10 top-0 left-0 w-screen h-screen shadow-[inset_0px_-40px_30px_10px_rgba(2,2,2,1)] pb-24"></div>
    </>
  );
}

export default Hero;
