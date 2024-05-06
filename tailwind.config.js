/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/index.html"],
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
        '480': '29rem',
        '500': '30rem',
        '550': '32rem',
        '980': '61rem',
        '650': '40.625rem',
        '720': '45rem',
        '950': '72rem',

      },
      height: {
        '350': '24rem',
        '450': '28rem',
        '550': '32rem',
        '650': '35rem',
        '680': '37rem',
        '720': '40rem',
        '950': '72rem',

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        abhaya: ['Abhaya Libre', 'serif'],
      },
      colors: {
        primary: {
          light: '#a5d6a7', // Light shade of your primary color
          DEFAULT: '#259FC5', // Main primary color
          dark: '#277D8E', // Dark shade of your primary color
        },
      },
      backgroundColor: {
        primary: {
          light: '#a5d6a7', // Light shade of your primary color
          DEFAULT: '#259FC5', // Main primary color
          dark: '#277D8E', // Dark shade of your primary color
        },
      }
    },
  },
  plugins: [],
}

