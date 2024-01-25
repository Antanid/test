import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'merienda': ['MeriendaOne'],
        'monsterrat': 'Monsterrat'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "gray-100": "#DCDCDC"
      },
      colors: {
        "primary": "#0F0F0F",
        "light-gray": "#4A4A4A"
      },
    },
  },
  plugins: [],
};
export default config;
