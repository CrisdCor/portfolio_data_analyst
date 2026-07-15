"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="habilidades" className="relative py-32 border-t border-white/5">
      <div className="container-x">
        <Reveal>
          <p className="font-mono text-signal text-xs tracking-[0.25em] mb-4">
            // HABILIDADES
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-16">
            Herramientas con las que trabajo
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.08}>
              <motion.div
                whileHover={{ y: -6, borderColor: "rgba(255,90,0,0.4)" }}
                transition={{ duration: 0.25 }}
                className="h-full rounded-2xl border border-white/10 bg-graphite/50 p-6"
              >
                <h3 className="font-display text-sm text-signal tracking-wide mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-white/70 text-sm font-light flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
