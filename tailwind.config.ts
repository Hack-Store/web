import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    ...defaultTheme,
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        hs: {
          50: "#f7a1ad",
          100: "#f58e9c",
          200: "#f47b8c",
          300: "#f2687b",
          400: "#f1556b",
          500: "#ef425a",
          600: "#d73b51",
          700: "#bf3548",
          800: "#a72e3f",
          900: "#8f2836",
          950: "#601a24",
        },
      },
      screens: {
        'xs': '321px',
        'ms': '400px',
        'xxl': '1440px',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      fontSize: {
        'xxl': '1.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  variants: {
    cursor: ['disabled', 'focus'],
    pointerEvents: ['disabled', 'focus'],
    backgroundColor: ['disabled', 'focus'],
    color: ['disabled', 'focus'],
    text: ['disabled', 'focus'],
    'box-shadow': ['disabled', 'focus'],
    opacity: ['disabled', 'focus'],
    border: ['disabled', 'focus'],
    'border-color': ['disabled', 'focus'],
  },
  plugins: [],
};
export default config;
