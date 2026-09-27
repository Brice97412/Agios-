import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        marine: {
          DEFAULT: "#0F2A3F",
          light: "#1C425F",
          dark: "#081826",
        },
        corail: {
          DEFAULT: "#FF5A36",
          light: "#FF7E5F",
          dark: "#D9431F",
        },
        creme: "#FAF7F2",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;
