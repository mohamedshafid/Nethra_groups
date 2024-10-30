/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#320f36",
        secondary:'#CA8928',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        judson: ["Judson", "serif"],
      },
    },
  },
  plugins: [],
};
