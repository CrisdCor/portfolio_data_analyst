"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 60, y: 80 }, { x: 220, y: 40 }, { x: 340, y: 140 },
  { x: 140, y: 220 }, { x: 300, y: 300 }, { x: 60, y: 320 },
  { x: 400, y: 60 }, { x: 400, y: 260 },
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [2, 6], [0, 3], [3, 4], [4, 7], [3, 5], [1, 4],
];

const bars = [40, 70, 50, 90, 65, 100, 45];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden noise"
    >
      <div className="absolute inset-0 bg-grid-faint bg-grid [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-glow-radial blur-3xl" />

      <div className="container-x relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-signal text-xs tracking-[0.25em] mb-6"
          >
            // CRISCOR — DATA &amp; BI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-gradient"
          >
            Cristian
            <br />
            Corrales
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {["Data Analyst", "Business Intelligence", "Automatización"].map((t) => (
              <span
                key={t}
                className="text-xs font-mono text-white/70 border border-white/10 rounded-full px-3 py-1.5"
              >
                {t}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 text-white/60 text-lg max-w-md font-light"
          >
            Convierto datos dispersos en decisiones claras — dashboards precisos,
            automatización real y arquitectura de información al servicio del negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="#proyectos"
              className="inline-flex items-center bg-signal hover:bg-signal-hot transition-colors text-white text-sm font-medium px-6 py-3.5 rounded-full shadow-signal focus-ring"
            >
              Ver proyectos
            </a>
            <a
              href="/cv-cristian-corrales.pdf"
              className="inline-flex items-center border border-white/15 hover:border-white/40 transition-colors text-white text-sm font-medium px-6 py-3.5 rounded-full focus-ring"
            >
              Descargar CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[420px] md:h-[500px]"
        >
          <div className="absolute inset-0 rounded-3xl border border-white/8 bg-graphite/40 glass overflow-hidden">
            <svg viewBox="0 0 460 380" className="w-full h-full opacity-90">
              {edges.map(([a, b], i) => (
                <motion.line
                  key={i}
                  x1={nodes[a].x} y1={nodes[a].y}
                  x2={nodes[b].x} y2={nodes[b].y}
                  stroke="#FF5A00"
                  strokeOpacity={0.25}
                  strokeWidth={1}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 + i * 0.08 }}
                />
              ))}
              {nodes.map((n, i) => (
                <motion.circle
                  key={i}
                  cx={n.x} cy={n.y} r={5}
                  fill={i % 3 === 0 ? "#FF5A00" : "#ffffff"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: i % 3 === 0 ? [0.6, 1, 0.6] : 0.8 }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}

              <g transform="translate(20, 300)">
                {bars.map((h, i) => (
                  <motion.rect
                    key={i}
                    x={i * 16}
                    width={9}
                    fill={i === 5 ? "#FF5A00" : "rgba(255,255,255,0.25)"}
                    rx={2}
                    initial={{ height: 0, y: 0 }}
                    animate={{ height: h, y: -h }}
                    transition={{ duration: 0.9, delay: 1 + i * 0.06, ease: "easeOut" }}
                  />
                ))}
              </g>
            </svg>
          </div>

          <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-card">
            <p className="font-mono text-[10px] text-white/50 tracking-widest">LIVE_METRIC</p>
            <p className="font-display text-2xl text-signal mt-1">+37.2%</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
