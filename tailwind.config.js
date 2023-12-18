/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FA3F15",
        secondary: "#CC2363",
        title: "black",
        "almost-white": "#F9F7F5",
        "almost-black": "#0B0B0B",
      },
      fontFamily: {
        title: ["Jost", "sans-serif"],
        description: ["Jost", "sans-serif"],
      },
      fontWeight: {
        title: 600,
        description: 600,
      },
    },
  },
  plugins: [],
};
