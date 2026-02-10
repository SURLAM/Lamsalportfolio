"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { PiArrowCircleRightThin } from "react-icons/pi";
import Link from "next/link";
import Divide from "../components/Divide";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-10 md:py-14  overflow-hidden">
      {/* Soft gradient glow behind */}
      <div className="absolute inset-0 bg-linear-to-t from-indigo-500/10 to-transparent blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto px-6 text-center"
      >
        {/* Signature Name */}

        <h2 className="text-sm  font-normal tracking-tight  cursor-pointer text-blue-300">
          <Link href="/">sureshlamsal.com </Link>{" "}
          <BsBoxArrowUpRight className="inline ml-1 text-blue-300 size-4 " />
        </h2>

        <p className="mt-2 text-gray-300 text-sm ">
          Crafting elegant digital experiences with{" "}
          <span className="text-indigo-300">Next.js</span> &{" "}
          <span className="text-cyan-600">Tailwind</span>
        </p>

        {/* Social Media Icons */}
        {/* <div className="flex justify-center gap-6 mt-8 mb-8">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 hover:scale-110 transition-all duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 hover:scale-110 transition-all duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </div> */}

        <Divide />

        {/* Divider */}
        <div className="mt-3  pt-6">
          <p className="text-gray-300 text-xs">
            © {new Date().getFullYear()} sureshlamsal.com All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
