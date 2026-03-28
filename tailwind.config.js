/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        sfpro: ["SF Pro", "sans-serif"],
        delagothic:["Dela Gothic One", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        spin: {
          "0%": {
            transform: "rotate(0)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spin: "spin 1s linear infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "purple-main": "#A755F7",
        "purple-light": "#F4EBFE",
        "gray-text": "#787878",
        "gray-light": "#f3f3f3",
      },
      backgroundImage: {
        'brand-purple-gradient': 'linear-gradient(182.09deg, #C38BFA 1.21%, #A755F7 53.87%, #8216EB 123.92%)',
        'gold-gradient': 'linear-gradient(98.37deg, #D4A017 0%, #F5D060 100%)',
      },
    },
  },
  plugins: [tailwindcssAnimate, require("tailwindcss-animate")],
};
