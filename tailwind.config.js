/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: '#0a0a0a',
        principal: '#fafafa',
        secondary: '#04fb42',
        thrid: '#f83361',
      },
      fontFamily:{
        sans: ['Space Grotesk', 'Roboto'],
      }
    },
  },
  plugins: [],
}