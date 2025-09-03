/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0a1f44",   // Deep Navy
          gold: "#d4af37",   // Elegant Gold
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // clean modern font
      },
    },
  },
  plugins: [],
};
