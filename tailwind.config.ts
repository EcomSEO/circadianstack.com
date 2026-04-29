import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // CircadianStack brand tokens — dark-mode-first
        midnight: "#0B1929",
        "midnight-deep": "#060F1B",
        "midnight-raised": "#112337",
        dawn: "#E6A940",
        "dawn-deep": "#C8912F",
        zenith: "#5EAFC9",
        ember: "#C97D5E",
        paper: "#E8E4D9",
        "paper-dim": "#C9C4B5",
        slate: "#6B7A8A",
        "slate-deep": "#4A5868",
        rule: "#1E3047",
        charcoal: "#2A2A2A",

        // Legacy aliases so shared components / pre-existing class
        // names still render something readable on the dark surface.
        sage: "#E6A940",
        "sage-light": "#F0C678",
        cream: "#0B1929",
        "cream-deep": "#112337",
        forest: "#E8E4D9",
        "forest-deep": "#E8E4D9",
        terracotta: "#E6A940",
        "terracotta-deep": "#C8912F",
        stone: "#6B7A8A",
      },
      fontFamily: {
        serif: [
          "var(--font-ibm-serif)",
          '"IBM Plex Serif"',
          "Georgia",
          "serif",
        ],
        sans: [
          "var(--font-ibm-sans)",
          '"IBM Plex Sans"',
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-ibm-mono)",
          '"IBM Plex Mono"',
          "ui-monospace",
          "monospace",
        ],
      },
      maxWidth: {
        prose: "68ch",
        reading: "42rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0, 0, 0, 0.28), 0 8px 24px rgba(0, 0, 0, 0.18)",
        card: "0 2px 4px rgba(0, 0, 0, 0.32), 0 10px 32px rgba(0, 0, 0, 0.22)",
        dawn: "0 0 0 1px rgba(230, 169, 64, 0.3), 0 6px 24px rgba(230, 169, 64, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
