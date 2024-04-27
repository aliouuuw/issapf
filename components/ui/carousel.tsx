"use client";
import { Carousel, IconButton } from "@material-tailwind/react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

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
  videos?: VideoType[];
};

const HorizontalScrollCarousel = ({ videos }: CarouselProps) => {
  return (
    <Carousel
      className="w-full"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-0 left-2/4 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            ></span>
          ))}
        </div>
      )}
      loop
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      prevArrow={({ handlePrev }) => (
        <IconButton
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      {videos &&
        videos.map((video, index) => {
          return (
            <div
              key={index}
              className="h-fit w-full hover:cursor-pointer flex flex-none items-center justify-center"
            >
              <ReactPlayer
                url={video.source}
                controls
                playsinline
                config={{
                  file: {
                    attributes: {
                      preload: "metadata",
                    },
                  },
                }}
              />

              {/* <div className="w-full h-[50vh] flex items-center justify-center">
                <video
                  className="h-full"
                  controls
                  preload="metadata"
                  src={video.source}
                ></video>
              </div> */}
            </div>
          );
        })}
    </Carousel>
  );
};

export default HorizontalScrollCarousel;
