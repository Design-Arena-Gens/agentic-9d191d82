const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: '#fbff12',
        coal: '#121212',
        bubblegum: '#ff71ce',
        acid: '#05ffa1',
        dusk: '#3c1c73',
        vapor: '#00c2ff',
        sand: '#f1c93b',
        ink: '#1f1b2c',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', ...fontFamily.sans],
        display: ['"Bebas Neue"', ...fontFamily.sans],
        mono: ['"JetBrains Mono"', ...fontFamily.mono],
      },
      boxShadow: {
        brutal: '12px 12px 0px 0px rgba(18, 18, 18, 0.95)',
        brutalSoft: '8px 8px 0px 0px rgba(31, 27, 44, 0.75)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      animation: {
        'scroll-pulse': 'scrollPulse 12s ease-in-out infinite',
        'gradient-shift': 'gradientShift 10s ease alternate infinite',
        'bounce-slow': 'bounceSlow 3.2s ease-in-out infinite',
      },
      keyframes: {
        scrollPulse: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
