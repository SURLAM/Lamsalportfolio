

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { MdPowerSettingsNew } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsTools } from "react-icons/bs";

export default function About() {
  return (
    <section className="min-h-screen w-full bg-linear-to-b from-gray-900 via-black to-gray-900 text-gray-100 px-4 lg:px-20 py-20 md:py-32">
      
      {/* MAIN WRAPPER */}
      <div className="w-full px-5 py-5 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">
        
        {/* LEFT TEXT AREA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-4 text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-indigo-300 via-indigo-200 to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Hi, I’m <span className="font-semibold">Suresh Lamsal</span>,<br /><br />
            A passionate Frontend Developer focused on building elegant,
            high-performing web experiences using modern technologies like{" "}
            <span className="text-indigo-300 italic">Next.js</span>,{" "}
            <span className="text-cyan-300 italic">React</span>, and{" "}
            <span className="text-blue-400 italic">Tailwind CSS</span>.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            I love crafting user interfaces that combine beauty, usability, and
            performance — every pixel designed with purpose, every interaction
            crafted for impact.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            With <strong>Next.js</strong>, I build websites that load fast,
            scale effortlessly, and deliver smooth user experiences. Paired with{" "}
            <strong>Tailwind CSS</strong>, I create modern visuals that adapt
            perfectly to any screen.
          </p>
        </motion.div>

        {/* RIGHT IMAGE AREA */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-80 sm:h-96 lg:h-[520px] rounded overflow-hidden shadow-xl">
            <Image
              src="/suresh_portfolio_picture.png"
              alt="Suresh Lamsal"
              fill
              className="w-full h-auto object-cover"
              loading="lazy"

            />
            <div className="absolute inset-0 bg-linear-to-t from-blue-950/20 via-transparent to-transparent mix-blend-overlay" />
          </div>

          <div className="absolute inset-0 rounded bg-linear-to-tr from-indigo-500/10 to-cyan-500/20 blur-2xl -z-10" />
        </motion.div>
      </div>

      {/* TECHNOLOGIES SECTION */}
      <div className="max-w-6xl mx-auto mt-24 text-center space-y-10">
        
        <h3 className="text-3xl sm:text-4xl font-semibold bg-linear-to-r from-indigo-500 via-indigo-300 to-indigo-100 bg-clip-text text-transparent">
          Technologies I love to working with
          <br />
          <MdPowerSettingsNew className="inline ml-2 text-green-500 size-6" />
          <IoSettingsOutline className="inline ml-2 text-indigo-300 size-6" />
          <BsTools className="inline ml-2 text-cyan-300 size-5" />
        </h3>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 px-6 py-10 bg-linear-to-t from-gray-900/40 via-indigo-700/10 to-blue-900/20 rounded-sm">
          {[
            { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML5" },
            { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: "CSS3" },
            { icon: <FaJsSquare className="text-yellow-400 text-5xl" />, name: "JavaScript" },
            { icon: <FaReact className="text-cyan-400 text-5xl" />, name: "React.js" },
            { icon: <SiNextdotjs className="text-gray-200 text-5xl" />, name: "Next.js" },
            { icon: <SiTailwindcss className="text-sky-400 text-5xl" />, name: "Tailwind CSS" },
          ].map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col items-center"
            >
              {tech.icon}
              <span className="text-gray-300 text-sm sm:text-base font-medium mt-2">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE ME */}
      <div className="max-w-4xl mx-auto mt-20 text-center space-y-6 px-4">
        <h3 className="text-3xl sm:text-4xl font-semibold bg-lenier-to-r from-indigo-700 to-cyan-200 bg-clip-text text-transparent">
          Why Choose My Work
        </h3>

        <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
          I believe great websites aren’t just coded — they're crafted with
          emotion, optimized for speed, and designed to connect. With{" "}
          <strong>Next.js</strong>, I deliver blazing-fast performance and
          smooth navigation. With <strong>Tailwind CSS</strong>, I create
          pixel-perfect, responsive designs.
        </p>

        <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
          For clients, that means reliability, scalability, and digital
          craftsmanship that truly reflects your brand’s voice.
        </p>
      </div>

      {/* SIGNATURE */}
      <div className="mt-14 text-center font-serif text-xl italic text-indigo-200">
        “Every great website starts with a single line of thoughtful code.”
      </div>
    </section>
  );
}
