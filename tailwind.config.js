/*
  Palette color: https://coolors.co/d7263d-f46036-2e294e-f7fdfd-def5f7-1b998b-c5d86d
*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light_background: "#F7FDFD",
        light_green: "#F1F6DB",
        orange: "#f46036",
        dark_orange: "#D7441B"
      }
    },
  },
  plugins: [

    // ...
  ],
};
