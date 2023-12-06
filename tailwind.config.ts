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
        golden: "#fddc2e",
        citron: "#c5a91d",
        midnight: "#202a37",
        navy: "#374151",
        stone: "#9ca3ae",
        grey: "#f3f4f6",
      },
    },
  },
  plugins: [],
};
export default config;
