import Reveal from "./Reveal";
import Counter from "./Counter";
import { stats } from "@/lib/data";

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-32 border-t border-white/5">
      <div className="container-x">
        <Reveal>
          <p className="font-mono text-signal text-xs tracking-[0.25em] mb-4">
            // SOBRE MÍ
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[280px_1fr] gap-14 items-start">
          <Reveal delay={0.1}>
            <div className="relative w-56 h-56 rounded-full overflow-hidden border border-white/10 bg-graphite">
              <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-xs">
                FOTO
              </div>
              <div className="absolute inset-0 rounded-full ring-1 ring-signal/30" />
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.15}>
              <h2 className="font-display text-3xl md:text-4xl text-white leading-tight max-w-2xl">
                Resumen profesional pendiente por definir...
              </h2>
              <p className="text-white/60 font-light mt-6 max-w-xl leading-relaxed">
                Texto pendiente por definir. Descripción del perfil profesional,
                trayectoria y enfoque de trabajo en análisis de datos, business
                intelligence y automatización de procesos.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-14">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.1 + i * 0.06}>
                  <Counter value={s.value} suffix={s.suffix} />
                  <p className="text-white/45 text-xs mt-2 tracking-wide">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
