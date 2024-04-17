"use client";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "./ui/embla-carousel";
import { motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import {  useState } from "react";

type VideoProps = {
  videoIDs: string[];
};

const Videos: React.FC<VideoProps> = ({ videoIDs }) => {
  //const ids =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [scale, setScale] = useState(0.2);
  const { scrollYProgress } = useScroll()
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScale(latest)
  })
  // Calculate the x-offset based on scrollYProgress
  const xOffset = useTransform(scrollYProgress, [0, 1], [500, 0]);

  const OPTIONS: EmblaOptionsType = { loop: true }


  return (
    <section className="px-4 py-8 md:px-16 space-y-4 w-screen">
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
        Check out all my videos including drone shots, reels, short movies,...
      </p>
      <motion.div 
        className="relative w-full rounded-xl h-[50vh] md:h-[90vh]"
        style={{ scale, x: xOffset }}
        >
        <EmblaCarousel slides={videoIDs} options={OPTIONS} />
      </motion.div>
    </section>
  );
};

export default Videos;
