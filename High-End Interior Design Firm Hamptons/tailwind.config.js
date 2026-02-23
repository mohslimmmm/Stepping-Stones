/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "#FAF0E6",
        sand: "#C2B280",
        seafoam: "#9FE2BF",
        "deep-grey": "#2F2F2F",
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Quicksand', 'sans-serif'],
      },
      borderRadius: {
        '8': '8px',
      }
    },
  },
  plugins: [],
}
