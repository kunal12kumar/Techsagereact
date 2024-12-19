/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      fontFamily: {
        Instrument: ['Instrument Sans', 'serif'],
        poppins:['Poppins', 'serif'] // Add your custom font here
      },

    },
  },
  plugins: [
    require('daisyui'),
  ],
}