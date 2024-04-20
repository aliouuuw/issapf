"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Menu = ({ href }: any) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="z-20 relative w-full h-fit hover:cursor-pointer flex flex-col items-end"
    >
      <a href={href} className="relative">
        Menu
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-10 -right-16  "
          >
            <MenuContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenuContent = () => {
  return (
    <div className="w-full border rounded-md p-6 shadow-xl backdrop-blur-lg backdrop-brightness-75">
      <div className="mb-3 space-y-3">
        <a href="#videos" className="block text-sm hover:underline">
          Videography
        </a>
        <a href="#images" className="block text-sm hover:underline">
          Photography
        </a>
        <a href="#services" className="block text-sm hover:underline">
          Services
        </a>
        <a href="#contact" className="block text-sm hover:underline">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Menu;
