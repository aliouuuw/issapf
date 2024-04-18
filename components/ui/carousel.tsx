"use client";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

// const cards = [
//   {
//     id: 1,
//   },
//   {
//     id: 2,
//   },
//   {
//     id: 3,
//   },
//   {
//     id: 4,
//   },
//   {
//     id: 5,
//   },
//   {
//     id: 6,
//   },
//   {
//     id: 7,
//   },
//   {
//     id: 8,
//   },
//   {
//     id: 9,
//   },
//   {
//     id: 10,
//   },
//   {
//     id: 11,
//   },
//   {
//     id: 12,
//   },
//   {
//     id: 13,
//   },
//   {
//     id: 14,
//   },
// ];

type VideoType = {
  source: string;
};

type CarouselProps = {
  videos: VideoType[];
};

const HorizontalScrollCarousel = ({ videos }: CarouselProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const displacement = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div>
      <div className="flex h-10 items-center justify-center">
        {/* <span className="animate-bounce font-semibold uppercase text-neutral-500">
          Scroll down
        </span> */}
      </div>
      <div ref={targetRef} className="flex h-[500px] items-center ">
        <div className="sticky top-0 flex h-fit items-center overflow-hidden">
          <motion.div
            style={{ x: displacement }}
            className="flex flex-none gap-8 items-center"
          >
            {videos.map((video, index) => {
              return (
              <div key={index} className="h-fit w-screen md:w-1/2 flex">
                <ReactPlayer url={video.source} controls />
              </div>)
            })}
          </motion.div>
        </div>
      </div>
      <div className="flex h-10 items-center justify-center">
        {/* <span className="animate-bounce font-semibold uppercase text-neutral-500">
          Scroll up
        </span> */}
      </div>
    </div>
  );
};


export default HorizontalScrollCarousel;
