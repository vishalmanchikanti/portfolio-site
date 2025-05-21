/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark/light mode via class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
