/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sarpanch': ['Sarpanch', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'michroma': ['Michroma', 'sans-serif'],
        'noto': ['Noto Emoji', 'sans-serif']
      },
      keyframes: {
        blink: {
          "0%": { opacity: 1 },
          "25%": { opacity: 0.2 },
          "100%": { opacity: 1 }
        }
      },
      animation: {
        blink: "blink 1000ms infinite"
      },

      colors: {
        neutral: {
          750: '#333333',
        },
        'gold': {
          50: '#ffec5d',
          100: '#ffe253',
          200: '#ffd849',
          300: '#ffce3f',
          400: '#f8c435',
          500: '#eeba2b',
          600: '#fbb03b',
          700: '#daa617',
          800: '#d09c0d',
          900: '#c69203',
        },
      }
    },
  },
  plugins: [],
}
