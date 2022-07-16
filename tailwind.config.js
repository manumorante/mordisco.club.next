module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 0 24px 16px #111111',
      },
      animation: {
        'in-delay': 'fade-in 1s 0.5s forwards',
        'out-delay': 'fade-out 1s 0.5s forwards',

        'bye-slow': 'fade-out 20s forwards ease-in-out',

        'fade-in': 'fade-in 0.4s forwards',
        'fade-out': 'fade-out 0.4s forwards',

        'zoom-in': 'zoom-in 0.4s forwards',
        'zoom-out': 'zoom-out 0.4s forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
        'zoom-out': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.5)' },
        },
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
      },
    },
  },
  plugins: [],
}