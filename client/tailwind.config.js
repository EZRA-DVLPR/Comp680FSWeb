/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        newgreen: "#9DC183",
        vuejs: {
          100: "#91556e",
          200: "#dd750a"
        }
      }
    },
  },
  plugins: [],
}

