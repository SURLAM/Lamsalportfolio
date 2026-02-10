


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function Hero() {
  return (
    <section className=" w-full max-w-7xl mx-auto  flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32  ">
      {/* LEFT TEXT AREA */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center md:text-left w-full md:w-1/2 mt-10 md:mt-0"
      >
        <h1 className="text-6xl sm:text-6xl lg:text-[85px] lg:font-extrabold md:font-black xl:text-8xl font-black bg-clip-text text-transparent bg-linear-to-l from-slate-400 via-blue-500 to-indigo-300 ">
          BUILDING <br />
          <span className="text-5xl  sm:text-5xl lg:text-7xl lg:font-extralight xl:text-8xl bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-blue-500 font-light">
            Modern Web
          </span>
        </h1>

        <p className="text-sm  font-light sm:text-base md:text-m lg:text-lg lg:font-semibold text-indigo-200 mt-6 max-w-md mx-auto md:mx-0 lg:mb-8">
          Enable Digital Transformation With Precision, Purpose & Passion.
          Cutting-Edge Frontend Architecture.
        </p>

        <p className="text-base sm:text-lg md:text-base lg:text-lg text-indigo-200 mt-4 font-base">
          —SURESH LAMSAL, Frontend Developer{" "}
          <FaReact className="inline text-cyan-300 ml-1 size-6 opacity-90" />
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 justify-center md:justify-start mt-8 lg:mt-11">
          <Link
            href="/projects"
            className="px-5 py-3 rounded-sm bg-blue-700/90 text-blue-100 hover:bg-blue-600 transition font-bold shadow-lg"
          >
            View Projects <MdArrowOutward className="inline ml-1" />
          </Link>

          <Link
            href="/contact"
            className="px-5 py-2 rounded-sm border border-blue-600 text-blue-200 hover:bg-blue-900/40 hover:text-white transition font-bold"
          >
            Contact Me <MdArrowOutward className="inline ml-1" />
          </Link>
        </div>
      </motion.div>

      {/* RIGHT IMAGE AREA */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="w-full md:w-1/2 lg:w-1/2 flex justify-center  relative"
      >
        <div className="relative w-64 sm:w-72 lg:w-[350px] xl:w-[350px]">
          <Image
            src="/Suresh_portfolio_picture.png"
            alt="Suresh Lamsal"
            width={600}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
            loading="lazy"
          />

          {/* Glow effect */}
          <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent rounded-xl blur-sm -z-10" />
        </div>
      </motion.div>
    </section>
  );
}
