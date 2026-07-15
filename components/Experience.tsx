import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-32 border-t border-white/5">
      <div className="container-x">
        <Reveal>
          <p className="font-mono text-signal text-xs tracking-[0.25em] mb-4">
            // EXPERIENCIA
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-16 max-w-xl">
            Trayectoria profesional
          </h2>
        </Reveal>

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />

          <div className="space-y-14">
            {experience.map((e, i) => (
              <Reveal key={i} delay={i * 0.1} className="relative pl-10">
                <span className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-signal bg-ink" />
                <p className="font-mono text-xs text-white/40 tracking-wide">{e.period}</p>
                <h3 className="font-display text-xl text-white mt-2">{e.role}</h3>
                <p className="text-signal text-sm mt-1">{e.company}</p>
                <p className="text-white/55 text-sm font-light mt-3 leading-relaxed max-w-xl">
                  {e.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {e.achievements.map((a, j) => (
                    <li key={j} className="text-white/45 text-sm font-light flex gap-2">
                      <span className="text-signal">—</span>{a}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
