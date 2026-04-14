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
          DEFAULT: "rgb(var(--color-obsidian) / <alpha-value>)",
          900: "rgb(var(--color-obsidian-900) / <alpha-value>)",
          800: "rgb(var(--color-obsidian-800) / <alpha-value>)",
          700: "rgb(var(--color-obsidian-700) / <alpha-value>)",
          rule: "rgb(var(--color-obsidian-rule) / <alpha-value>)",
        },
        bone: {
          DEFAULT: "rgb(var(--color-bone) / <alpha-value>)",
          muted: "rgb(var(--color-bone-muted) / <alpha-value>)",
          faint: "rgb(var(--color-bone-faint) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "rgb(var(--color-gold) / <alpha-value>)",
          600: "rgb(var(--color-gold-600) / <alpha-value>)",
          400: "rgb(var(--color-gold-400) / <alpha-value>)",
        },
      },
      letterSpacing: {
        luxe: "0.28em",
      },
    },
  },
  plugins: [],
} satisfies Config;
