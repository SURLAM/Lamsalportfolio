"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    {name: "FAQ", href: "faq" },
    { name: "Contact", href: "contact" },
  ];

  //  Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        background: scrolled
          ? "linear-gradient(to left, #010101, #000e29, #010101)"
          : "linear-gradient(to left, #010101, #000e24, #010101)",
        paddingTop: scrolled ? "0.5rem" : "1rem",
        paddingBottom: scrolled ? "0.5rem" : "1rem",
        boxShadow: scrolled
          ? "0 2px 20px rgba(0,0,0,0.2)"
          : "0 0 0 rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(20px)",
      }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 text-gray-300"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between md:pl-11 md:pr-17 pl-4  pr-3 py-1 transition-all">
        {/* Logo */}
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/sureshlamsal.svg"
            alt="Suresh Lamsal Logo"
            width={150}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 relative">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-gray-300 font-lg font-semibold group transition hover:text-indigo-400 hover:font-semibold"
            >
              {link.name}
              <span className="absolute left-0 bottom-1 w-0 `h-[2px]` bg-indigo-500 transition-all duration-300 group hover:text-blue-900"></span>
            </Link>
          ))}

          {/* Menu-only Bottom Border */}
          <div className="absolute bottom-2 left-0  w-full h-px rounded-full" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-200 hover:text-indigo-400 transition "
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-linear-to-l from-gray-900/20 via-gray-800/20 to-gray-900/20 border-t border-gray-800"
          >
            <div className="flex flex-col items-center py-8 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-indigo-200 hover:text-indigo-400 transition text-lg font-light"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
