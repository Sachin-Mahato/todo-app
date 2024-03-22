/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'primary-blue': 'hsl(220, 98%, 61%)',
        'primary-background': 'linear-gradient(to bottom, hsl(192, 100%, 76%), hsl(280,87%,65%))',
        // Light Theme
        'light-gray': 'hsl(0,0%,98%)',
        'light-grayish-blue': 'hsl(236, 33%, 92%)',
        'grayish-blue-lt': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'dark-grayish-very': 'hsl(235,19%,35%)',
        // Dark Theme
        'darkMode-blue': 'hsl( 235, 21%, 11%)',
        'darkMode-desaturated-blue': 'hsl(235, 24%, 19%)',
        'darkMode-grayish-blue': 'hsl(234, 39%, 85%)',
        'darkMOde-grayish-blue-hover': 'hsl(236, 33%, 92%)',
        'darkMode-dark-grayish-blue': 'hsl(234, 11%, 52%)',
        'darkMode-very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
        'darkMode-very-dark-grayish-blue-v2': 'hsl(237, 14%, 26%)'
      },
      fontSize: {
        'body-fs': '1.125rem'
      },
      fontWeight: {
        'fw-normal': '400'
      },
      fontFamily: {
        'custom': ["Josefin Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
}

