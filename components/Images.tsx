"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type ImageType = {
  titre: string;
  url: string;
  type: string;
};

type ImageProps = {
  images: ImageType[];
};

const Images: React.FC<ImageProps> = ({ images }) => {
  //const ids =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [selectedType, setSelectedType] = useState("all");

  const handleFilterChange = (event: { target: { value: any } }) => {
    const selectedType = event.target.value;
    setSelectedType(selectedType);
  };

  const filteredPhotos = images.filter((photo) => {
    if (selectedType === "all") return true;
    return photo.type === selectedType;
  });

  return (
    <section className="px-4 py-8 md:px-16 space-y-4 h-screen w-screen">
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
      <motion.div className="mx-auto py-8">
        <motion.select
          onChange={handleFilterChange}
          value={selectedType}
          className="block w-auto md:text-lg mb-4 bg-transparent mx-3"
        >
          <option value="all">All</option>
          <option value="street">Street</option>
          <option value="drone">Drone</option>
          <option value="car">Car</option>
          <option value="portrait">Portrait</option>
        </motion.select>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPhotos.map((photo, index) => (
            <motion.li
              key={index}
              className="relative overflow-hidden h-80 w-full"
            >
              <Image
                src={photo.url}
                alt={photo.titre}
                fill
                quality={100}
                className="w-full h-full object-cover object-center rounded-md"
              />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Images;
