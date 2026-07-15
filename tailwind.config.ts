import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        graphite: "#111111",
        steel: "#2A2A2A",
        paper: "#FFFFFF",
        signal: {
          DEFAULT: "#FF5A00",
          hot: "#FF6A00",
          soft: "#FF6600",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "glow-radial":
          "radial-gradient(circle at 50% 50%, rgba(255,90,0,0.16), transparent 70%)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      boxShadow: {
        signal: "0 0 40px rgba(255,90,0,0.25)",
        card: "0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 60px rgba(0,0,0,0.5)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
