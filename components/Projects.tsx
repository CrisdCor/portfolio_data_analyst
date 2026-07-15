"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-32 border-t border-white/5">
      <div className="container-x">
        <Reveal>
          <p className="font-mono text-signal text-xs tracking-[0.25em] mb-4">
            // PROYECTOS
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-16 max-w-xl">
            Casos de estudio seleccionados
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/10 bg-graphite/40 overflow-hidden"
              >
                <div className="relative h-56 bg-gradient-to-br from-steel to-ink flex items-center justify-center">
                  <span className="font-mono text-white/20 text-xs tracking-widest">
                    IMAGEN DEL PROYECTO
                  </span>
                  <div className="absolute inset-0 bg-glow-radial opacity-40" />
                </div>

                <div className="p-7">
                  <h3 className="font-display text-xl text-white">{p.title}</h3>
                  <p className="text-white/55 text-sm font-light mt-3 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-white/60 border border-white/10 rounded-full px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-6">
                    <a href="#" className="text-sm text-signal hover:text-signal-hot transition-colors focus-ring">
                      Ver proyecto →
                    </a>
                    <a href="#" className="text-sm text-white/50 hover:text-white transition-colors focus-ring">
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
