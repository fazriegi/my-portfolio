/** @type {import('tailwindcss').Config} */
export default {
  content: [`./index.html`, `./src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      colors: {
        primary: "#020617",
        secondary: "#0E2034",
        "primary-text": "#ccdbe8",
        "secondary-text": "#a2c0df",
      },
    },
  },
  plugins: [],
};
