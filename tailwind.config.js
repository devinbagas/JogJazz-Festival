/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
        'light-gray': '#f7f7f7',
      },
      textShadow: {
        glow: '0 0 2px white, 0 0 10px white, 0 0 20px white',
      },
      fontFamily: {
        Poppins: ["Poppins", "Sans-Serif"],
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
