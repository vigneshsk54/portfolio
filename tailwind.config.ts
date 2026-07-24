import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#06070C",
        panel: "#0C1120",
        "panel-2": "#101728",
        line: "#1E2536",
        "line-soft": "#161C2C",
        ink: "#EDEFF7",
        muted: "#8890A6",
        "muted-2": "#5C6580",
        blue: {
          DEFAULT: "#4C7CFF",
          soft: "#7B9CFF",
        },
        violet: {
          DEFAULT: "#9D5CFF",
          soft: "#BB8CFF",
        },
        signal: "#34D399",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "aurora-1":
          "radial-gradient(60% 60% at 20% 20%, rgba(76,124,255,0.20) 0%, rgba(76,124,255,0) 70%)",
        "aurora-2":
          "radial-gradient(60% 60% at 80% 30%, rgba(157,92,255,0.18) 0%, rgba(157,92,255,0) 70%)",
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(6,7,12,0.9) 85%)",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        scan: "scan 3.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        "spin-slow": "spin-slow 14s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
