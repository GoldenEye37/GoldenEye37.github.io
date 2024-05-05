/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./img/background.png')",
        'hero-image': "url('./img/hero image.png')",
        'sphere': "url('./img/sphere.png')",
      },
      width: {
        '350': '24rem',
        '450': '28rem',
        '980': '61rem',
        '650': '40.625rem',
        '720': '45rem',
      },
      height: {
        '350': '24rem',
        '450': '28rem',
        '550': '32rem',
        '650': '35rem',
        '680': '37rem',
        '720': '40rem',

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        abhay: ['Abhaya Libre', 'serif'],
      },
      colors: {
        primary: {
          light: '#a5d6a7', // Light shade of your primary color
          DEFAULT: '#259FC5', // Main primary color
          dark: '#388e3c', // Dark shade of your primary color
        },
      },
    },
  },
  plugins: [],
}

