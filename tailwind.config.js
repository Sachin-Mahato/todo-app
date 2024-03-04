/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'hsl(0,0%, 0%)',
        'primary-background': 'linear-gradient(to bottom, hsl(192, 100%, 76%), hsl(280,87%,65%))',
        // Light Theme
        'light-gray': 'hsl(0,0%,98%)',
        'light-grayish-blue': 'hsl(236, 33%, 92%)',
        'grayish-blue-lt': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'dark-grayish-very': 'hsl(235,19%,35%)',
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

