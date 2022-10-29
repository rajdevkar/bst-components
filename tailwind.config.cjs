/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['Noto Sans', 'sans-serif']
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
        primary: {
          DEFAULT: "#0A3473",
          hover: "#082A5E",
          focus: "#72A6F3",
          disabled: "#B9D2F9",
        },
        secondary: {
          DEFAULT: "#868685",
          hover: "#6C6C6B",
        },
        neutral: {
          250: '#7D7D7D',
          350: '#424242',
          750: '#333333',
          850: '#1F1F1F',
        },
        'gold': {
          50: '#ffec5d',
          100: '#ffe253',
          200: '#ffd849',
          300: '#ffce3f',
          400: '#f8c435',
          500: '#eeba2b',
          550: '#FBB03A',
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
