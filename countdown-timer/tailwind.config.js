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
        'flipDown': 'flipDown 200ms ease-in',
        'flipUp': 'flipUp 200ms ease-out 200ms',
      }
    },
  },
  plugins: [],
}

