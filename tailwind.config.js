/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
        },
        screens: {
          sm: "70rem",
        },
      },
      fontFamily: {
        body: ["BPG Arial", "sans-serif"],
        display: ["BPG Arial Caps", "sans-serif"],
      },
    },
  },
  plugins: [],
};
