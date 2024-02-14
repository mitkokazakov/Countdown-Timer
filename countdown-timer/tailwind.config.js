/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'RedHat': ['Red Hat Text', 'sans-serif']
      },
      keyframes: {
        flipDown: {
          '100%': {transform: 'rotateX(90deg)'}
        },
        flipUp: {
          '100%': {transform: 'rotateX(0deg)'}
        }
      },
      animation: {
        'flipDown': 'flipDown 3000ms ease-in',
        'flipUp': 'flipUp 3000ms ease-out 3000ms',
      }
    },
  },
  plugins: [],
}

