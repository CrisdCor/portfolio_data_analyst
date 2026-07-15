export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg text-white">
            Cris<span className="text-signal">Cor</span>
          </p>
          <p className="text-white/40 text-xs mt-1 font-light">
            Cristian Corrales — Data Analyst · Business Intelligence · Automatización
          </p>
        </div>

        <div className="flex gap-6">
          {["LinkedIn", "GitHub", "Correo"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs text-white/50 hover:text-signal transition-colors focus-ring"
            >
              {s}
            </a>
          ))}
        </div>

        <p className="text-white/30 text-xs font-mono">
          © {new Date().getFullYear()} CrisCor. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
