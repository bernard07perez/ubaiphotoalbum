/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      container: {
        center: true,
        padding: '0',
      },      
      fontFamily: { 
        arialblack: ['Arial Black', 'sans-serif'],
        harlow: ['harlow-solid-italic', 'sans-serif'], 
      },
      colors: {
        'custom-maroon': '#872434',
      }
    },
  },
  plugins: [],
}
