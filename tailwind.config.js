/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#1D2934",
        alice: "#F2F5F8",
        wisteria: "#B0A3D4",
        medblue: "#6290BC",
        lightblue: "#A9C3DA",
        dimdarkblue: "#2D3F4E",
        dimalice: "#D7E0EA",
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
  darkMode: "class",
}
