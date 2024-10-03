/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite DE Grund"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
