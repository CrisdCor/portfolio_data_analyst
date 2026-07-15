"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Correo", href: "mailto:hola@criscor.dev" },
  { label: "WhatsApp", href: "#" },
];

export default function Contact() {
  return (
    <section id="contacto" className="relative py-32 border-t border-white/5">
      <div className="container-x grid md:grid-cols-2 gap-16">
        <Reveal>
          <p className="font-mono text-signal text-xs tracking-[0.25em] mb-4">
            // CONTACTO
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white leading-tight max-w-md">
            Hablemos de tu próximo proyecto de datos
          </h2>
          <p className="text-white/55 font-light mt-6 max-w-sm">
            Texto pendiente por definir. Cuéntame qué necesitas y te responderé
            en menos de 24 horas.
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-xs font-mono text-white/60 border border-white/10 rounded-full px-4 py-2 hover:border-signal/50 hover:text-white transition-colors focus-ring"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="text-xs text-white/50 font-mono">
                NOMBRE
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full mt-2 bg-transparent border-b border-white/15 focus:border-signal outline-none py-3 text-white placeholder-white/25 transition-colors focus-ring"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs text-white/50 font-mono">
                CORREO
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full mt-2 bg-transparent border-b border-white/15 focus:border-signal outline-none py-3 text-white placeholder-white/25 transition-colors focus-ring"
                placeholder="tucorreo@dominio.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs text-white/50 font-mono">
                MENSAJE
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full mt-2 bg-transparent border-b border-white/15 focus:border-signal outline-none py-3 text-white placeholder-white/25 transition-colors resize-none focus-ring"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            <motion.button
              whileHover={{ x: 4 }}
              type="submit"
              className="inline-flex items-center gap-2 bg-signal hover:bg-signal-hot transition-colors text-white text-sm font-medium px-7 py-3.5 rounded-full mt-4 focus-ring"
            >
              Enviar mensaje
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
