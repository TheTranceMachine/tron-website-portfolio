import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "tron-200": "#B5C3C5",
        "tron-300": "#b7d6db",
        "tron-400": "#a9c6ca",
        "tron-sky-500": "#BCDADE",
        "tron-sky-600": "#A6C8CC",
        "tron-sky-700": "#91B5BA",
        "tron-sky-800": "#7BA3A8",
        "tron-sky-900": "#659095",
        "tron-sky-950": "#507E83",
        "tron-sky-1000": "#3A6B71",
        "tron-turquoise": "#37adb0",
        "tron-dark-green": "#3B585C",
      },
    },
  },
  plugins: [],
};
export default config;
