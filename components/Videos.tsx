"use client";
import { motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import {  useRef, useState } from "react";
import HorizontalScrollCarousel from "./ui/carousel";

type VideoType = {
  source: string
}


type VideoProps = {
  videos: VideoType[];
};

const Videos: React.FC<VideoProps> = ({ videos }) => {
  //const ids =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const targetRef = useRef(null)
  const [scale, setScale] = useState(0.2);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"]
  })
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScale(latest)
  })
  // Calculate the x-offset based on scrollYProgress
  const xOffset = useTransform(scrollYProgress, [0, 1], [500, 0]);


  return (
    <section id="videos" ref={targetRef} className="px-4 py-8 md:px-16 space-y-4 w-screen">
      <div className="flex items-center gap-2">
        <span className="bg-white w-[2px] h-12"></span>
        <motion.h1
          className="font-semibold text-4xl md:text-6xl "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "circOut", duration: 0.5 }}
        >
          Videography
        </motion.h1>
      </div>
      <p className="font-light">
        Scroll to check out all my videos including drone shots, reels, short movies,...👇
      </p>
      <motion.div 
        className="relative w-full rounded-xl"
        style={{ scale, x: xOffset }}
        >
      <HorizontalScrollCarousel videos = {videos} />
      </motion.div>
    </section>
  );
};

export default Videos;
