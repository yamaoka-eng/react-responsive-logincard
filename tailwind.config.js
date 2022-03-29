module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '-100%': '-100%',
      },
      width: {
        '2/1': '200%'
      },
      height: {
        '2/1': '200%'
      },
      transitionDuration: {
        '550': '550ms',
        '600': '600ms',
      },
      keyframes: {
        'slide-in-right-y50': {
          '0%': {
            '-webkit-transform': 'translate(1000px, -50%)',
            transform: 'translate(1000px, -50%)',
            opacity: 0
          },
          '100%': {
            '-webkit-transform': 'translate(-50%, -50%)',
            transform: 'translate(-50%, -50%)',
            opacity: 1
          }
        },
        'slide-in-right': {
          '0%': {
            '-webkit-transform': 'translate(1000px, 0%)',
            transform: 'translate(1000px, 0%)',
            opacity: 0
          },
          '100%': {
            '-webkit-transform': 'translate(0%, 0%)',
            transform: 'translate(0%, 0%)',
            opacity: 1
          }
        }
      },
      animation: {
        'slide-in-right-y50': "slide-in-right-y50 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both 0.5s",
        'slide-in-right': "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both 0.5s"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
