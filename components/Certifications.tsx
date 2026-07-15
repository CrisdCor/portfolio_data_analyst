import Reveal from "./Reveal";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certificaciones" className="relative py-32 border-t border-white/5">
      <div className="container-x">
        <Reveal>
          <p className="font-mono text-signal text-xs tracking-[0.25em] mb-4">
            // CERTIFICACIONES
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-16 max-w-xl">
            Formación y respaldo técnico
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((c, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="rounded-2xl border border-white/10 p-6 h-full flex flex-col justify-between hover:border-signal/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/30 font-mono text-[10px]">
                  LOGO
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-base text-white">{c.name}</h3>
                  <p className="text-white/45 text-xs mt-1">{c.issuer} · {c.date}</p>
                  <a href="#" className="inline-block mt-4 text-xs text-signal hover:text-signal-hot transition-colors focus-ring">
                    Ver certificado →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
