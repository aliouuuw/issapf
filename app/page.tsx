"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const text = "ISSA NDAO".split(" ");
  return (
    <main className="relative">
      <AuroraBackground classID="w-screen">
        <div className="min-h-screen text-white z-10 flex flex-col justify-between p-4">
          <div className="flex justify-between w-full">
            <p>Issa Ndao</p>
            <div>Menu</div>
          </div>
          <div className="z-20 relative flex items-center justify-center h-[12rem]">
            <h1 className="w-fit text-6xl md:text-9xl font-extrabold">
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
          </div>
          <div className="flex justify-between items-end">
            (Scroll)
            <div className="max-w-72 text-justify text-pretty text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              atque, aspernatur et deleniti quidem reiciendis.
            </div>
          </div>
        </div>
      </AuroraBackground>
      <div className="absolute z-10 top-0 left-0 w-screen h-screen flex">
        <Image
          src={"/issapf2.png"}
          alt="Bg image"
          fill
          quality={100}
          className="object-contain grayscale contrast-[1.10]"
        ></Image>
      </div>
      {/* <div className="absolute top-0 left-0 w-screen h-screen">
        <Image src={"/stardust.png"} alt="Bg image" fill quality={100} className="object-cover w-screen h-screen opacity-40"/>
      </div> */}
    </main>
  );
}
