"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiVercel } from "react-icons/si";
import { FaArrowDownLong } from "react-icons/fa6"; // 👈 Elegant arrow icon
import { MdPowerSettingsNew } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";


const techIcons = [
  { icon: <FaHtml5 className="text-orange-500 text-4xl" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500 text-4xl" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-400 text-4xl" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400 text-4xl" />, name: "React" },
  { icon: <SiNextdotjs className="text-white text-4xl" />, name: "Next.js" },
  {
    icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
    name: "Tailwind",
  },
  {
    icon: <SiFramer className="text-pink-400 text-4xl" />,
    name: "Framer Motion",
  },
  { icon: <FaGithub className="text-gray-400 text-4xl" />, name: "GitHub" },
  { icon: <SiVercel className="text-white text-4xl" />, name: "Vercel" },
];

export default function TechMarquee() {
  return (
    <section className="relative bg-linear-to-b from-black-900/10 via-gray-800/10 to-black-950 py-10 md:py-10 md:lg-15 pt-2 flex justify-center ">
      {/* Gradient Overlay */}
      <div className=" bg-center absolute inset-0 bg-linear-to-t from-indigo-900/15 via-gray-900/10 to-transparent blur-5xl" />

      {/* Content Container */}
      <div className="relative w-full max-w-5xl mx-auto px-6">
        {/* Section Title */}

        <div className="text-center my-15">
          <h2 className="amber-200 text-2xl  font-semibold text-transparent bg-clip-text bg-linear-to-r bg-indigo-400 via-blue-300 to-indigo-300 inline-block pt-2  ">
            Technologies I work with
            <br />
            
              <MdPowerSettingsNew className="inline ml-1 text-green-400 size-7 mt-4" />
              {/* <IoSettingsOutline className="inline ml-1 text-indigo-300 size-6 mt-4 " /> */}
              <IoMdSettings
                className="inline ml-1 text-indigo-400 size-7 mt-4
            "
              />
              <BsTools className="inline ml-1 text-cyan-400 mt-4 size-5 " />
          
          </h2>

          {/* Animated Arrow */}
          <motion.div
            initial={{ y: 0, opacity: 0.7 }}
            animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.4] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className=" mt-8 flex justify-center text-indigo-400 text-2xl"
          >
            <FaArrowDownLong />
          </motion.div>
        </div>

        {/* Marquee Section */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 60, // 👈 slow elegant motion
              ease: "linear",
            }}
            className="flex gap-12  items-center my-15"
          >
            {[...techIcons, ...techIcons].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[100px]"
              >
                <div className="text-5xl md:text-5xl hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
                  {item.icon}
                </div>
                <p className="mt-4 text-violet-200 text-sm">{item.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


// bd525eab-3319-4d09-80ce-7b638d25b013