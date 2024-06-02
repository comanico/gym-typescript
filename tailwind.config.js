/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-gold": "#FFD700",
        "royal-blue": "#4169E1",
        "pearl-white": "#E2DFD2",
        "sky-50": "#0ea5e9",
        "blue-20": "#93c5fd",
        "blue-30": "#93c5fd",
        "blue-50": "#3b82f6",
        "blue-90": "#1e3a8a",
        "blue-95": "#fde047",
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "bone-white": "#F9F6EE",
        "primary-100": "#a5f3fc",
        "primary-300": "#d1d5db",
        "primary-500": "#fafafa",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/Dr. Dana Marinca.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
