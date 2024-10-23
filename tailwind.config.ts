import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jet: "#191b1e",
        gunmetal: "#212326",
        white: '#FFFFFF',     // accent
        lavender: '#9f8fe8',  // background
        gray: '#949597',      // text
      }
    },
  },
  plugins: [],
};
export default config;
