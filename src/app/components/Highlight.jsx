

"use client";

import { motion } from "framer-motion";

export default function HighlightQuote() {
  return (
    <section className="relative py-20 md:py-25 lg:py-25 overflow-hidden bg-linear-to-b from-white/3 via-slate-900/20 to-blue-900/10 text-white ">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-linear-to-tr from-cyan-900/10 via-transparent to-indigo-900/20 blur-3xl opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto px-6 text-center"
      >
        {/* Main Quote */}
        <h2 className="text-2xl  font-sans ">
          <span className="max-w-3xl mx-auto bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-slate-300 to-indigo-400">
            “ Design is not just what it looks like and feels like—
          </span>
          <span className="block mt-2">
            it’s how it{" "}
            <span className="text-indigo-400">works beautifully</span>. ”
          </span>
        </h2>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10   text-gray-300 max-w-2xl mx-auto text-lg  font-light leading-relaxed"
        >
          Crafting digital experiences where{" "}
          <span className="text-indigo-400">performance</span>,
          <span className="text-cyan-400"> design</span>, and{" "}
          <span className="text-blue-400">emotion</span> blend together to form
          something unforgettable.
        </motion.p>

        {/* Signature Line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-14 md:mt-16 text-indigo-200 text-md md:text-lg font-serif italic"
        >
          “Where aesthetics meet functionality — crafted with purpose.”
        </motion.p>
      </motion.div>
    </section>
  );
}
