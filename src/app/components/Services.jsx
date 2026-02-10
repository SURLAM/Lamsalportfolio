

"use client";

import { motion } from "framer-motion";
import {
  Code,
  Brush,
  Smartphone,
  Globe,
  Database,
  Rocket,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: (
        <Code className="stroke-1 size-8 text-indigo-400 group-hover:text-indigo-300 transition" />
      ),
      title: "Next.js Development",
      desc: "High-performance, scalable, production-ready applications built with clean architecture and modern Next.js best practices.",
    },
    {
      icon: (
        <Brush className="stroke-1 size-8 text-pink-400 group-hover:text-pink-300 transition" />
      ),
      title: "UI/UX Implementation",
      desc: "Pixel-perfect, accessible and visually consistent interfaces that make every interaction intuitive and meaningful.",
    },
    {
      icon: (
        <Smartphone className="stroke-1 size-8 text-emerald-400 group-hover:text-emerald-300 transition" />
      ),
      title: "Responsive Design",
      desc: "Beautifully adaptive layouts ensuring exceptional user experience across mobile, tablet, desktop and ultra-wide screens.",
    },
    {
      icon: (
        <Globe className="stroke-1 size-8 text-cyan-400 group-hover:text-cyan-300 transition" />
      ),
      title: "Frontend Integration",
      desc: "Seamless API integration and real-time data handling for a dynamic and unified digital experience.",
    },
    {
      icon: (
        <Database className="stroke-1 size-8 text-amber-400 group-hover:text-amber-300 transition" />
      ),
      title: "Database Connectivity",
      desc: "Secure and optimized data communication through scalable backend integration with modern databases.",
    },
    {
      icon: (
        <Rocket className="stroke-1 size-8 text-purple-400 group-hover:text-purple-300 transition" />
      ),
      title: "SEO Optimization",
      desc: "Improve visibility with SSR, metadata tuning, Core Web Vitals optimization and enhanced site performance.",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 px-6 bg-linear-to-b from-blue-950/30 via-gray-900/10 to-slate-950 text-indigo-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-balance bg-clip-text text-transparent bg-linear-to-r from-cyan-500 via-slate-200 to-indigo-500 leading-tight">
          Services & <span className="text-blue-400">Expertise</span>
        </h2>

        {/* Subtitle */}
        <p className="text-indigo-300 max-w-2xl mx-auto mt-8 mb-16 text-lg  font-light ">
          Blending design precision with development power to craft smooth,
          modern and high-performance digital experiences.
        </p>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-7 bg-lenier-to-br from-white/3 to-white/4 
                         border border-white/15 hover:border-white/30 rounded-sm 
                         shadow-lg backdrop-blur-sm transition-all duration-300 
                         hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>

              <h3 className="text-xl  font-semibold text-indigo-200/90 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-300/70 text-normal leading-relaxed items-center">
                {service.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
