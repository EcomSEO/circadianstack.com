import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // CircadianStack brand tokens — dark-mode-first
        midnight: "#0B1929",
        dawn: "#E6A940",
        zenith: "#5EAFC9",
        ember: "#C97D5E",
        paper: "#E8E4D9",
        charcoal: "#2A2A2A",
        slate: "#6B7A8A",
        // Legacy aliases (map to dark theme equivalents so shared templates render)
        sage: "#E6A940",
        cream: "#0B1929",
        forest: "#E8E4D9",
        terracotta: "#E6A940",
      },
      fontFamily: {
        serif: ['"IBM Plex Serif"', '"Söhne Breit"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
