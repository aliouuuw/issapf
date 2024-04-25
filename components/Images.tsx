"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";

type ImageType = {
  titre: string;
  url: string;
  type: string;
};

type ImageProps = {
  images: ImageType[];
};

const Images: React.FC<ImageProps> = ({ images }) => {
  const portraits = images.filter((photo) => {
    return photo.type === "portrait";
  });
  const cars = images.filter((photo) => {
    return photo.type === "car";
  });
  const streets = images.filter((photo) => {
    return photo.type === "street";
  });
  const natures = images.filter((photo) => {
    return photo.type === "nature";
  });
  const drones = images.filter((photo) => {
    return photo.type === "drone";
  });

  const [imageLimits, setImageLimits] = useState({
    portraits: 6,
    cars: 6,
    streets: 6,
    natures: 6,
    drones: 6,
  });

  const handleShowMore = (type: string) => {
    setImageLimits((prevLimits: any) => ({
      ...prevLimits,
      [type]: prevLimits[type] + 3,
    }));
  };

  const handleShowLess = (type: string) => {
    setImageLimits((prevLimits: any) => ({
      ...prevLimits,
      [type]: Math.max(prevLimits[type] - 3, 6),
    }));
  };
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const handleImageClick = (image: ImageType) => {
    setSelectedImage(image);
    console.log(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="images"
      className="relative px-4 py-8 md:px-16 space-y-4 h-fit w-screen font-light"
    >
      <div className="flex items-center justify-center gap-2">
        <motion.h1
          className="font-semibold underline text-4xl md:text-6xl "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "circOut", duration: 0.5 }}
        >
          Photography
        </motion.h1>
      </div>
      <div className="mx-auto">
        {/* Drone */}
        <div className="space-y-4 pt-8">
          <h2 className="text-3xl text-center font-semibold">Drone Photos</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {drones.slice(0, imageLimits.drones).map((photo, index) => (
              <motion.li
                key={index}
                className="relative overflow-hidden h-80 w-full rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={photo.url}
                  alt={photo.titre}
                  fill
                  quality={100}
                  className="w-full h-full object-cover object-center rounded-md scale-110 hover:scale-100 hover:cursor-zoom-in duration-300"
                  onClick={() => handleImageClick(photo)}
                />
              </motion.li>
            ))}
          </ul>
          {imageLimits.drones < drones.length && (
            <button
              className="border py-2 px-4 rounded-md mr-2"
              onClick={() => handleShowMore("drones")}
            >
              Show more
            </button>
          )}

          {imageLimits.drones > 6 && (
            <button
              className="border py-2 px-4 rounded-md"
              onClick={() => handleShowLess("drones")}
            >
              Show less
            </button>
          )}
        </div>
        {/* Nature */}
        <div className="space-y-4 pt-8">
          <h2 className="text-3xl text-center font-semibold">Nature photos</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {natures.slice(0, imageLimits.natures).map((photo, index) => (
              <motion.li
                key={index}
                className="relative overflow-hidden h-80 w-full rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={photo.url}
                  alt={photo.titre}
                  fill
                  quality={100}
                  className="w-full h-full object-cover object-center rounded-md scale-110 hover:scale-100 hover:cursor-zoom-in duration-300"
                  onClick={() => handleImageClick(photo)}
                />
              </motion.li>
            ))}
          </ul>
          {imageLimits.natures < natures.length && (
            <button
              className="border py-2 px-4 rounded-md mr-2"
              onClick={() => handleShowMore("natures")}
            >
              Show more
            </button>
          )}

          {imageLimits.natures > 6 && (
            <button
              className="border py-2 px-4 rounded-md"
              onClick={() => handleShowLess("natures")}
            >
              Show less
            </button>
          )}
        </div>
        {/* Street */}
        <div className="space-y-4 pt-8">
          <h2 className="text-3xl text-center font-semibold">Street Photos</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {streets.slice(0, imageLimits.streets).map((photo, index) => (
              <motion.li
                key={index}
                className="relative overflow-hidden h-80 w-full rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={photo.url}
                  alt={photo.titre}
                  fill
                  quality={100}
                  className="w-full h-full object-cover object-center rounded-md scale-110 hover:scale-100 hover:cursor-zoom-in duration-300"
                  onClick={() => handleImageClick(photo)}
                />
              </motion.li>
            ))}
          </ul>
          {imageLimits.streets < streets.length && (
            <button
              className="border py-2 px-4 rounded-md mr-2"
              onClick={() => handleShowMore("streets")}
            >
              Show more
            </button>
          )}

          {imageLimits.streets > 6 && (
            <button
              className="border py-2 px-4 rounded-md"
              onClick={() => handleShowLess("streets")}
            >
              Show less
            </button>
          )}
        </div>
        {/* Car */}
        <div className="space-y-4 pt-8">
          <h2 className="text-3xl text-center font-semibold">Car</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cars.slice(0, imageLimits.cars).map((photo, index) => (
              <motion.li
                key={index}
                className="relative overflow-hidden h-80 w-full rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={photo.url}
                  alt={photo.titre}
                  fill
                  quality={100}
                  className="w-full h-full object-cover object-center rounded-md scale-110 hover:scale-100 hover:cursor-zoom-in duration-300"
                  onClick={() => handleImageClick(photo)}
                />
              </motion.li>
            ))}
          </ul>
          {imageLimits.cars < cars.length && (
            <button
              className="border py-2 px-4 rounded-md mr-2"
              onClick={() => handleShowMore("cars")}
            >
              Show more
            </button>
          )}

          {imageLimits.cars > 6 && (
            <button
              className="border py-2 px-4 rounded-md"
              onClick={() => handleShowLess("cars")}
            >
              Show less
            </button>
          )}
        </div>
        {/* Portraits */}
        <div className="space-y-4 pt-8">
          <h2 className="text-3xl text-center font-semibold">Portraits</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portraits.slice(0, imageLimits.portraits).map((photo, index) => (
              <motion.li
                key={index}
                className="relative overflow-hidden h-80 w-full rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={photo.url}
                  alt={photo.titre}
                  width={200} 
                  height={200}
                  quality={100}
                  className="w-full h-full object-contain object-center rounded-md scale-110 hover:scale-100 hover:cursor-zoom-in duration-300"
                  onClick={() => handleImageClick(photo)}
                />
              </motion.li>
            ))}
          </ul>
          {imageLimits.portraits < portraits.length && (
            <button
              className="border py-2 px-4 rounded-md mr-2"
              onClick={() => handleShowMore("portraits")}
            >
              Show more
            </button>
          )}

          {imageLimits.portraits > 6 && (
            <button
              className="border py-2 px-4 rounded-md"
              onClick={() => handleShowLess("portraits")}
            >
              Show less
            </button>
          )}
        </div>
        {selectedImage && (
          <div
            onClick={handleCloseModal}
            className="fixed top-0 left-0 w-full h-full px-4 backdrop-blur-sm hover:cursor-zoom-out bg-black bg-opacity-60 flex flex-col gap-4 justify-center items-center"
          >
            <div className="relative rounded-md h-[80vh] w-full ">
              <Image
                src={selectedImage.url}
                alt={selectedImage.titre}
                fill
                quality={100}
                className="w-fit h-full object-contain object-center rounded-md"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Images;
