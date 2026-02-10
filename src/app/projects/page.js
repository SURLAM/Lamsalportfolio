

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Luxury Jungle Resort",
    description:
      "A warm and welcoming website for a village homestay, designed to capture the authentic local lifestyle and nature experience. Includes beautiful visuals, simple booking flow, and fully responsive layout for visitors planning their stay.",
    image:"/resort.png",
    tech: ["GSAP", "WordPress", "CDN-Hostinger", "Adobe for Graphic", "Bootstrap"],
    link: "https://atigharresort.com/",
  },
  {
    title: "EVEREST-YATRA Adventure!",
    description:
      "Luxury — Adventure Travel-Trekking in Nepal Himalayas, clean animations, gradient borders, and fast load time. Fully responsive and SEO-optimized Travel company.",
    image:"/yatra.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "React", "Canva", "Adobe", "Vercel"],
    link: "https://www.everestyatra.com",
  },
  {
    title: "Tech Company",
    description:
      "A modern and dynamic digital marketing website built with WordPress and enhanced using GSAP animations for smooth, engaging interactions. Focused on showcasing services, portfolio, and brand presence with a clean, professional UI.",
    image:"/web.png",
    tech: ["WordPress", "GSAP", "Bootstrap", "CDN-Hostinger", "Adobe for Graphic Design"],
    link: "https://everestengine.com",
  },
  {
    title:"Portfolio Website",
    description:
      "Personal portfolio designed with luxury aesthetic — clean animations, gradient borders, and fast load time. Fully responsive and SEO-optimized.",
    image:"/portfolio.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "React", "Canva", "Adobe", "Vercel"],
    link: "https://www.sureshlamsal.com",
  },
  {
    title: "Restaurant-Catering Services",
    description:
      "Food industries, hospitality and hygiene, clean animations, gradient borders, and fast load time. Fully responsive and SEO-optimized Travel company.",
    image:"/a1.png",
    tech: ["WordPress", "CSS", "Framer Motion", "Canva", "Adobe"],
    link:"https://a1tiffin.ca",
  },
  {
    title: "Handicraft-Handmade Product",
    description:
      "Handicraft display for handmade products — clean animations, gradient borders, and fast load time. Fully responsive and SEO-optimized.",
    image:"/handmade.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "React", "Canva", "Adobe", "Vercel"],
    link: "https://everesthandmade.com",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-linear-to-b from-gray-800/20 via-indigo-900/10 to-gray-900/20 text-gray-200 px-6 md:px-16 py-18">
      <div className="md:pb-10 max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-7xl font-bold md:font-stretch-65% bg-clip-text text-transparent bg-linear-to-b from-blue-700 to-cyan-600 md:pt-18 pt-8 pl-2 pb-2 text-left"
        >
          PROJECTS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-cyan-400 text-lg max-w-6xl mx-auto font-sans md:text-left text-center pl-2 md:pr-96"
        >
          Explore some of my latest works built with cutting-edge frontend technologies. <br />
          <span className="text-sm font-light text-sky-200">
            Optimized for performance and designed to deliver modern digital experiences.
          </span>
        </motion.p>
      </div>

      {/* Project Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-linear-to-b from-cyan-900/50 to-teal-900/30 rounded border border-gray-700/90 hover:border-gray-700 overflow-hidden shadow-lg hover:shadow-teal-700/20 transition-all duration-500"
          >
            {/* Project Image */}
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 group-hover:opacity-30 transition duration-500" />
            </div>

            {/* Project Info */}
            <div className="p-7 space-y-2">
              <h3 className="text-2xl font-semibold font-stretch-extra-condensed bg-clip-text text-transparent bg-linear-to-t from-indigo-300 to-cyan-400 group-hover:text-stone-300 transition pb-4 text-center">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm pb-3 text-center font-normal leading-relaxed tracking-tight">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 items-center mt-6 justify-center">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-teal-800/10 border border-gray-500 px-3 py-1 rounded text-indigo-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Overlay Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 text-gray-100 hover:text-teal-400 transition"
            >
              <ExternalLink size={22} />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Bottom Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-24 text-sky-200/60 font-serif italic text-lg bg-cyan-800/20 py-4 rounded-sm max-w-6xl mx-auto"
      >
        “Every project is a new canvas — I design experiences that are fast, functional, and unforgettable.”
      </motion.div>
    </section>
  );
}
