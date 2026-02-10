"use client";


import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,

   FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFigma,SiAdobecreativecloud } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500" />,
      info: "The foundation of every modern web page — semantic and accessible structure.",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-500" />,
      info: "Brings ideas to life with responsive design, animations, and creative styling.",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
      info: "The brain of interactive web experiences, powering dynamic user interfaces.",
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
      info: "The heart of modern web apps — modular, fast, and interactive UI development.",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-200" />,
      info: "Powerful React framework with server rendering, SEO, and performance built-in.",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400" />,
      info: "Utility-first styling for speed, precision, and pixel-perfect designs.",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      info: "Handles server-side logic for dynamic applications and APIs efficiently.",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400" />,
      info: "A flexible NoSQL database perfect for scalable, real-time applications.",
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt className="text-red-500" />,
      info: "Version control and collaboration made effortless with modern workflows.",
    },
    {
      name: "Adobe Creative Cloud",
      icon: <SiAdobecreativecloud className="text-red-500" />,
      info: "Turning ideas into interactive prototypes and modern UI/UX designs.",
    },
  ];

  return (
    <section className="min-h-screen bg-linear-to-l from-gray-900/10 via-slate-900/5 to-blue-900/10 text-gray-200 px-6 md:px-12 py-20">
      {/* Heading */}
      <div className="text-center mb-20 space-y-4 max-w-6xl mx-auto bg-linear-to-b from-blue-800/10 to-blue-950/15 rounded-sm pb-12 ">
        <h2 className="mt-17 mb-10 pt-13 text-4xl  font-bold  bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-blue-300">
          My Technical Skills
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A blend of creativity and code — I specialize in building sleek,
          responsive, and high-performing web applications using cutting-edge
          technologies.
        </p>
      </div>
    

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto mb-20">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07, duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-900/22 backdrop-blur-xl p-6 rounded shadow-2xs hover:shadow-cyan-400/90  transition-translate flex flex-col items-center justify-center text-center"
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <h3 className="text-lg text-cyan-300 text-balance font-semibold mb-3">{skill.name}</h3>
            <p className="text-indigo-100 text-sm text-pretty">{skill.info}</p>
          </motion.div>
        ))}
      </div>

      {/* Descriptive Section */}

      <motion.div
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
        className="bg-linear-to-b from-blue-900/8 via-indigo-900/10 to-blue-900/10 backdrop-blur-4xl  p-6 rounded-sm mt-10 max-w-6xl mx-auto text-center space-y-6"
      >
        <h3 className=" text-3xl pt-8 pb-2  bg-linear-to-r from-green-500 via-lime-600 to-yellow-400 bg-clip-text text-transparent">
          Why These Technologies?
        </h3>
        <p className="max-w-5xl mx-auto text-stone-100 text-left md:text-center text-md "> 
          These tools are not just technologies — they’re the building blocks of
          beautiful, scalable, and lightning-fast web applications. From
          React’s dynamic UI rendering to Next.js’s server-side magic,
          and from the flexibility of Tailwind CSS to the speed of
          MongoDB, each tool helps craft experiences that are as elegant as
          they are powerful.
        </p>
        <p className="max-w-5xl mx-auto text-stone-100 leading-7 text-md text-left md:text-center  md:px-5 pb-7  ">
          For clients, this means faster load times, visually refined
          interfaces, and seamless cross-device performance — turning your
          vision into a polished digital experience that stands out from the
          crowd.
        </p>
        <p className=" max-w-5xl mx-auto text-stone-200 md:text-xl text-md md:text-center  text:left p-4  font-serif italic bg-white/7 rounded  mb-3">
          “Technology is best when it feels like art — designed with precision,
          developed with passion.”
        </p>
      </motion.div>
    </section>
  );
}
