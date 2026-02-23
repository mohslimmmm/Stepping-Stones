/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF0E6', // Linen White
        primary: '#0F172A', // Navy (Text/Primary)
        accentBlue: '#006994', // Ocean Blue
        accentGreen: '#C3B091', // Dune Grass
      },
      fontFamily: {
        heading: ['"Caslon"', 'serif'],
        body: ['"Avenir"', 'sans-serif'],
      },
      borderRadius: {
        'none': '0px',
        'sm': '0px',
        DEFAULT: '0px',
        'md': '0px',
        'lg': '0px',
        'xl': '0px',
        '2xl': '0px',
        '3xl': '0px',
        'full': '0px',
      }
    },
  },
  plugins: [],
}
