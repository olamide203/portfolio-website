import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Calibre", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
        "1fr-auto": "1fr auto",
        "auto-fit-skills": "repeat(auto-fit, minmax(100px, 1fr))",
      },
      colors: {
        neutral: {
          50: "#FFFFFF",
          100: "#FDFEFF",
          500: "#2C2C2C",
          600: "#1B1F23",
          700: "#1E1E1E",
          800: "#1A1A1A",
          900: "#121415",
        },
        blue: {
          50: "hsla(199, 58%, 66%, 0.1)",
          100: "#B8D9FB",
          200: "#77BBDB",
          400: "#44A2D2",
          500: "#0096FF",
          600: "#102351",
        },
        navy: {
          500: "#112240",
          700: "#0B193C",
          800: "#020C1B",
        },
        slate: {
          50: "#CCD6FC",
          100: "#8892B0",
          300: "#688EA1",
          500: "#3B6D86",
        },
        green: {
          100: "#64FFDA",
          200: "#57CBFF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
