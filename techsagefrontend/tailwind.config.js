/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js}","app/**/*.{js,jsx}", "components/**/*.{js,jsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake","garden", "aqua","nord"],
  },
  theme: {
    extend: {
      
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],



      },
      boxshadow:{

        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)', // Light shadow
        'custom-heavy': '0 8px 16px rgba(0, 0, 0, 0.3)', // Heavy shadow
        'custom-color': '0 4px 6px rgba(255, 0, 0, 0.5)'

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