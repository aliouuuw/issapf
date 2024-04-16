import React from "react";
import { motion } from "framer-motion";

function Videos() {
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
      <div className="w-full rounded-xl h-[50vh] md:h-[70vh] border ">
        {/* <video autoPlay controls className="w-full h-full">
          <source
            src="https://www.youtube.com/watch?v=krDWc30PAGg"
            type="video/mp4"
          />
        </video> */}
        {/* <iframe
          src="https://drive.google.com/file/d/195YT3GH4Kpjz_tiMBdnqvz32CdQXMD7G/view?usp=sharing&t=1"
          frameBorder={0}
          allowFullScreen
          className="w-full h-full rounded-xl"
        /> */}
      </div>
    </section>
  );
}

export default Videos;
