/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js}","app/**/*.{js,jsx}", "components/**/*.{js,jsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake","garden"],
  },
  theme: {
    extend: {
      
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'] ,// Add your custom font here
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        clash: ['ClashGrotesk-Extralight', 'sans-serif'],
        Ubuntu:['Ubuntu', 'sans-serif'],
        passion: ["Passion One", 'sans-serif'],
        new: ["Playwrite AU SA", 'serif'],
        tight: ["Inter Tight", 'sans-serif']



      },

      // creating animation
      keyframes: {
        slideInLeft: {
          "0%": {
            transform: "translateX(-100%)",  // Start off-screen left
            opacity: "0",
          },
          "20%": {
            opacity: "1",  // Fade in while moving in
          },
          "90%": {
            opacity: "0.9",  // Slight fade out as it moves
          },
          "100%": {
            transform: "translateX(100%)",  // End in the original position
            opacity: "1",  // Keep visible at the end
          },
         
        },
      

        slideInRight: {
          "0%": {
            transform: "translateX(100%)",  // Start off-screen left
            opacity: "0",
          },
          "20%": {
            opacity: "1",  // Fade in while moving in
          },
          "90%": {
            opacity: "0.9",  // Slight fade out as it moves
          },
          "100%": {
            transform: "translateX(-100%)",  // End in the original position
            opacity: "1",  // Keep visible at the end
          },
        },

      },
      animation: {
        slideInLeft: "slideInLeft 25s  forwards ease-in-out infinite ",
        slideInRight:"slideInRight 25s ease-in-out forwards infinite ",  // Fixed animation without infinite loop
      },

      

      
    

    },
  },
  plugins: [
    require('daisyui'),
  ],
}