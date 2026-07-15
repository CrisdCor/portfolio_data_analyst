"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="servicios" className="relative py-32 border-t border-white/5">
      <div className="container-x">
        <Reveal>
          <p className="font-mono text-signal text-xs tracking-[0.25em] mb-4">
            // SERVICIOS
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-16 max-w-xl">
            En qué puedo ayudar a tu equipo
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className="group relative h-56 rounded-2xl border border-white/10 p-7 overflow-hidden bg-gradient-to-b from-graphite/70 to-ink"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-signal/0 group-hover:bg-signal/10 blur-2xl transition-all duration-500" />
                <span className="font-mono text-xs text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-white mt-6">{s.title}</h3>
                <p className="text-white/50 text-sm font-light mt-3 leading-relaxed">
                  {s.description}
                </p>
                <div className="absolute bottom-7 left-7 h-px w-8 bg-white/15 group-hover:w-14 group-hover:bg-signal transition-all duration-300" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
