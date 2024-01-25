import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f13a01'
      },
      keyframes: {
        rotate: {
          "0%": {
            transform: "rotate(0)"
          },
          "100%" : {
            transform: "rotate(360deg)"
          }
        }
      },
      animation: {
        animationBefore: "spin 4s -2s linear infinite",
        animationAfter: "spin 4s linear infinite",
      }
    },
  },
  plugins: [],
};
export default config;
