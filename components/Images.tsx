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
  const [selectedType, setSelectedType] = useState("all");

  const handleFilterChange = (event: { target: { value: any } }) => {
    const selectedType = event.target.value;
    setSelectedType(selectedType);
  };

  const filteredPhotos = images.filter((photo) => {
    if (selectedType === "all") return true;
    return photo.type === selectedType;
  });

  const [imageLimit, setImageLimit] = useState(6);

  const handleShowMore = () => {
    setImageLimit(imageLimit + 3);
  };

  const handleShowLess = () => {
    setImageLimit(imageLimit - 3);
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
    <section id="images" className="relative px-4 py-8 md:px-16 space-y-4 h-fit w-screen font-light">
      <div className="flex items-center gap-2">
        <span className="bg-white w-[2px] h-12"></span>
        <motion.h1
          className="font-semibold text-4xl md:text-6xl "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "circOut", duration: 0.5 }}
        >
          Photography
        </motion.h1>
      </div>
      <div className="mx-auto">
        <div className="space-y-4">
          <p>Select between portraits, car, street, and drone photos...👇 </p>
          <select
            onChange={handleFilterChange}
            value={selectedType}
            className="block w-auto border md:text-lg mb-4 bg-transparent py-2 pr-4  rounded-md"
          >
            <option value="all">All</option>
            <option value="street">Street</option>
            <option value="drone">Drone</option>
            <option value="car">Car</option>
            <option value="portrait">Portrait</option>
          </select>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPhotos.slice(0, imageLimit).map((photo, index) => (
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
          {imageLimit < filteredPhotos.length && (
            <button
              className="border py-2 px-4 rounded-md mr-2"
              onClick={handleShowMore}
            >
              Show more
            </button>
          )}

          {imageLimit > 6 && (
            <button
              className="border py-2 px-4 rounded-md"
              onClick={handleShowLess}
            >
              Show less
            </button>
          )}
        </div>
        {selectedImage && (
          <div
            onClick={handleCloseModal}
            className="fixed top-0 left-0 w-full h-full px-4 backdrop-blur-sm hover:cursor-zoom-out bg-black bg-opacity-50 flex flex-col gap-4 justify-center items-center"
          >
            <div className="relative rounded-md h-[300px] md:h-[350px] w-full md:w-1/2 ">
              <Image
                src={selectedImage.url}
                alt={selectedImage.titre}
                fill
                quality={100}
                className="w-full h-full object-cover object-center rounded-md "
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Images;
