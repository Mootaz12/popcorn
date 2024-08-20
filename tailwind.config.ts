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
        primaryViolet: "#5b38d2",
        secondaryViolet: "#6f46f1",
        bgColor: "#1c2022",
        placeholderColor: "#aca8d8",
        gray: "#25292d",
        accentGray: "#2a3335",
        gold: "#ffca20",
      },
    },
  },
  plugins: [],
};
export default config;
