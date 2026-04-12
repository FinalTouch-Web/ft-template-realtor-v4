import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      colors: {
        obsidian: {
          DEFAULT: "#0c0a08",
          900: "#14110d",
          800: "#1a1612",
          700: "#221d17",
          rule: "#2f2820",
        },
        bone: {
          DEFAULT: "#f0e8d4",
          muted: "#a89c82",
          faint: "#6b6354",
        },
        gold: {
          DEFAULT: "#c9a46b",
          600: "#b18d56",
          400: "#d9b982",
        },
      },
      letterSpacing: {
        luxe: "0.28em",
      },
    },
  },
  plugins: [],
} satisfies Config;
