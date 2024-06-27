/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#22064C',
          200: '#3A0A83',
          300: '#490CA4',
        },
        secondary: {
          100: '#2C8F82',
          200: '#226F65',
        },
        google: '#1976D2'
      },
    },
  },
  plugins: [],
}

