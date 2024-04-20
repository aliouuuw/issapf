"use client";
import React from "react";
import { motion } from "framer-motion";
import { Camera, PenLine, Video } from "lucide-react";

function Services() {
  return (
    <section id="services" className="px-4 py-8 md:px-16 space-y-4 w-screen">
      <div className="flex items-center gap-2">
        <span className="bg-white w-[2px] h-12"></span>
        <motion.h1
          className="font-semibold text-4xl md:text-6xl "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "circOut", duration: 0.5 }}
        >
          Services
        </motion.h1>
      </div>
      <p className="font-light">
        Browse through our range of services tailored to meet your needs.
      </p>
      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ServiceCard
          icon={<Camera />}
          title="Photography"
          description="Capture your precious moments with our professional photography services. From portraits to events, we've got you covered."
        />
        <ServiceCard
          icon={<Video />}
          title="Videography"
          description="Bring your stories to life with our expert videography services. We specialize in capturing stunning visuals and crafting engaging narratives."
        />
        <ServiceCard
          icon={<PenLine />}
          title="Content Creation"
          description="Elevate your online presence with our content creation services. From social media posts to blog articles, we'll help you stand out in the digital world."
        />
      </div>
    </section>
  );
}

const ServiceCard = ({ title, description, icon }: any) => {
  return (
    <div className="rounded-lg border p-6  ">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800 ">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default Services;
