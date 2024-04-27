"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrolling(currentPosition > scrollTop && currentPosition > 0);
    setScrollTop(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollTop]);

  return (
    <header
      className={`z-50 h-20 sticky top-0 left-0 py-2 px-8 md:px-16 flex justify-between items-center transition-transform duration-300 ${
        scrolling ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative w-fit h-16">
        <Image
          src="/issathecreator.png"
          alt="Issa logo"
          width={100}
          height={16}
          className="w-full h-full object-cover object-left"
          quality={100}
        />
      </div>
      <div className="max-md:hidden flex flex-wrap gap-8 justify-center items-center hover:[&_a]:underline hover:[&_a]:text-[#EF0134]">
        <a href="#videos">VIDEOS</a>
        <a href="#memos">MEMORIES</a>
        <a href="#services">SERVICES</a>
      </div>
      <div className="flex items-center justify-end">
        <a href="#contact" className="mix-blend-overlay inline-flex animate-shine items-center justify-center rounded-full text-xs border border-neutral-600 bg-[linear-gradient(110deg,#020202,45%,rgba(239,1,52,0.5),50%,#000103)] bg-[length:200%_100%] px-4 py-2 font-medium transition-colors">
          <p>Open for work</p>
        </a>
      </div>
    </header>
  );
}
