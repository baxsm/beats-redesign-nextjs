/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['Poppins', 'sans-serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      biggestFontSize: "var(--biggest-font-size)",
      biggerFontSize: "var(--bigger-font-size)",
      bigFontSize: "var(--big-font-size)",
      h2FontSize: "var(--h2-font-size)",
      h3FontSize: "var(--h3-font-size)",
      normalFontSize: "var(--normal-font-size)",
      smallFontSize: "var(--small-font-size)",
      smallerFontSize: "var(--smaller-font-size)",
    },
    plugins: [],
  }
}
