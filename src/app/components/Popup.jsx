"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function GreetingPopup() {
  const [show, setShow] = useState(true);

  // Auto close after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-xl flex justify-center items-center z-50 p-4"
        >
          {/* Popup Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative max-w-auto  md:max-w-4/12 bg-lenear-to-t from-black- via-gray-900 to-black border border-gray-800 rounded-sm shadow-xl text-gray-100 py-15 px-15 text-center "
          >
            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-3 text-gray-300 hover:text-gray-100 transition cursor-pointer"
            >
              <X size={22} />
            </button>

            {/* Greeting Message */}
            <h2 className="text-2xl md:text-4xl  mb-4 pt-2 pb-6 bg-clip-text text-transparent bg-linear-to-r from-indigo-200 to-violet-100 font-semibold font-stretch-70%">
              Welcome to{" "}
              <span className="text-blue-400  font-semibold">
                sureshlamsal.com
              </span>
            </h2>

            <p className="text-gray-200 mb-6 text-sm md:text-base">
              Thank you for visiting! Next.js Frontend Developer
            </p>

        
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
