"use client";
import Hero from "@/components/Hero";
import Videos from "@/components/Videos";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const text = "ISSA NDAO".split(" ");
  return (
    <main className="relative">
      <Hero />
      <Videos />
    </main>
  );
}
