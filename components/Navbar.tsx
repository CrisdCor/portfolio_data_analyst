"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nav } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-auto"
    >
      <nav
        className={`glass rounded-full flex items-center justify-between md:justify-start gap-1 px-3 transition-all duration-300 ${
          scrolled ? "py-2 shadow-card" : "py-3"
        }`}
      >
        <a
          href="#inicio"
          className="font-display text-sm tracking-wide px-3 py-1.5 rounded-full text-white focus-ring"
        >
          Cris<span className="text-signal">Cor</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {nav.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-3 py-1.5 text-xs tracking-wide text-white/70 hover:text-white transition-colors rounded-full focus-ring"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden md:inline-flex ml-1 items-center text-xs font-medium bg-signal text-white px-4 py-2 rounded-full hover:bg-signal-hot transition-colors focus-ring"
        >
          Hablemos
        </a>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white/80 px-3 py-2 focus-ring"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mt-2 rounded-2xl p-3 flex flex-col gap-1 md:hidden"
        >
          {nav.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-sm text-white/80 hover:text-white rounded-lg focus-ring"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
