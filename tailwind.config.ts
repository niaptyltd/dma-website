import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "var(--brand-ink)",
          forest: "var(--brand-forest)",
          emerald: "var(--brand-emerald)",
          sand: "var(--brand-sand)",
          gold: "var(--brand-gold)",
          mist: "var(--brand-mist)",
          line: "var(--brand-line)",
          surface: "var(--brand-surface)",
          paper: "var(--brand-paper)",
          muted: "var(--brand-muted)",
          accent: "var(--brand-accent)",
          lineDark: "var(--brand-line-dark)"
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 30px 90px -45px rgba(0, 0, 0, 0.9)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
