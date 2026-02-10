


"use client";
import { motion } from "framer-motion";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { TrendingUp } from "lucide-react";
import { GiWireframeGlobe } from "react-icons/gi";
import { PiLightbulbFilamentThin } from "react-icons/pi";
import Link from "next/link";

export default function DigitalAdvice() {
  return (
    <section className="relative w-full py-10 bg-linear-to-b from-gray-950 via-gray-900/30 to-gray-950 text-gray-200 overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-indigo-900/30 via-blue-700/20 to-cyan-800/20 blur-3xl opacity-40 -z-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:my-14 text-center">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl  font-semibold tracking-tight leading-tight text-balance"
        >
          <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-300 via-slate-200 to-indigo-300 ">
            Empowering Businesses Through
          </span>

          <br />

          <span className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-slate-200 to-blue-400">
            Digital Presence
            
          </span>
        </motion.h2>

        {/* SUB TITLE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-blue-300/90 mt-10  text-base leading-relaxed max-w-4xl mx-auto lg:my-22 lg:bg-white/3 lg:py-12 px-16 shadow rounded-md"
        >
          Your website is more than a digital space — it’s your brand’s first
          impression, trust builder, and the foundation of modern business
          growth. A powerful online presence sets you apart from your
          competition.
        </motion.p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-14 ">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="rounded-sm p-10 bg-linear-to-b from-gray-900/60 to-gray-950/20 border border-gray-800 hover:border-indigo-300/30 transition-all shadow-md backdrop-blur"
          >
            <div className="flex justify-center mb-4">
              <PiLightbulbFilamentThin className="text-indigo-400 size-6" />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-indigo-300">
              Creative & Modern Vision
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I blend design precision with technical depth to build clean,
              futuristic, and high-performance websites tailored to elevate your
              brand identity.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="rounded-sm p-10 bg-linear-to-b from-gray-900/60 to-gray-950/20 border border-gray-800 hover:border-blue-300/30 transition-all shadow-md backdrop-blur"
          >
            <div className="flex justify-center mb-4">
              <GiWireframeGlobe className="text-blue-400 size-6" />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-blue-300">
              Digital Transformation
            </h3>

            <p className="text-gray-300 leading-relaxed">
              A well-built Next.js website ensures speed, stability, and global
              reach — helping you build trust and expand your digital footprint.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="rounded-sm p-10 bg-linear-to-b from-gray-900/60 to-gray-950/20 border border-gray-800 hover:border-teal-300/30 transition-all shadow-md backdrop-blur"
          >
            <div className="flex justify-center mb-4">
              <TrendingUp className="text-teal-400 size-6" />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-teal-300">
              Results That Matter
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Every animation, layout, and detail is optimized to convert
              visitors into customers with faster load times and seamless UX.
            </p>
          </motion.div>
        </div>

        {/* FINAL MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <p className="text-blue-100 text-lg  lg:font-normal leading-relaxed font-light">
            Whether you're a startup or a growing brand — your website is your
            strongest asset. Let’s build something modern, fast, and crafted
            with purpose.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-serif lg:pb-10 italic mb-8 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-blue-200 to-indigo-300">
            Ready To Elevate Your Brand?
          </h3>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold rounded-full bg-linear-to-r from-blue-700 via-blue-600 to-blue-700 hover:opacity-90 transition-transform hover:scale-105 shadow-lg"
          >
            Start Your Digital Journey
            <BsBoxArrowUpRight className="size-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
