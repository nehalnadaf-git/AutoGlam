import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian:      "#080808",
        "obsidian-2":  "#111111",
        gold:          "#C9A84C",
        "gold-light":  "#E8C97A",
        ivory:         "#F5F0E8",
        "ivory-muted": "#BDB5A6",
      },
      fontFamily: {
        headline: ["var(--font-bebas)", "sans-serif"],
        serif:    ["var(--font-cormorant)", "Georgia", "serif"],
        body:     ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
