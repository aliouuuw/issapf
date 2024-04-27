"use client"
import { Facebook, Instagram, Mail, MessagesSquare, Phone, Twitch, Youtube } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-8 md:px-16 space-y-4 w-screen">
        <div className="flex items-center gap-2">
        <span className="bg-white w-[2px] h-12"></span>
        <motion.h1
          className="font-semibold text-4xl md:text-6xl "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "circOut", duration: 0.5 }}
        >
          Get in touch
        </motion.h1>
      </div>
      <p className="font-light">
      Have a question or want to work together? Reach out using the
            information below.
      </p>
      <div className="grid items-center gap-8">
        <div className="grid w-full max-w-md gap-4">
          <div className="flex items-center gap-4">
            <Mail className="h-6 w-6 " />
            <div className="space-y-1">
              <p className="text-sm font-medium">Email:</p>
              <a className="text-zinc-400 text-sm hover:underline" href="mailto:issathecreator@gmail">
              issathecreator@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6 " />
            <div className="space-y-1">
              <p className="text-sm font-medium">Phone:</p>
              <a
                className="text-zinc-400 text-sm hover:underline"
                href="tel:+16132659554"
              >
                +1 (613) 265-9554
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MessagesSquare className="h-6 w-6" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Socials:</p>
              <div className="flex items-center gap-8">
                <Link target="_blank" className="text-zinc-400  hover:text-zinc-600 leading-none  flex" href="https://twitter.com/LambertIssa">
                  <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link> 
                <Link target="_blank" className="text-zinc-400  hover:text-zinc-600 leading-none  flex" href="https://www.instagram.com/issaa_lambert/">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link target="_blank" className="text-zinc-400  hover:text-zinc-600 leading-none  flex" href="https://www.youtube.com/channel/UCBU0AKPtmnq4VIQb-fWyn8A">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">Youtube</span>
                </Link>
                <Link target="_blank" className="text-zinc-400  hover:text-zinc-600 leading-none  flex" href="https://www.tiktok.com/@issa_the_creator">
                  <FontAwesomeIcon icon={faTiktok} className="h-5 w-5" />
                  <span className="sr-only">TikTok</span>
                </Link>
                <Link target="_blank" className="text-zinc-400  hover:text-zinc-600 leading-none  flex" href="https://www.twitch.tv/L0rdIssa">
                  <Twitch className="h-5 w-5" />
                  <span className="sr-only">Twitch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
