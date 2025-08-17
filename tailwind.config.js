/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        brandPink: '#ff85a2',
        brandPinkLight: '#ffd6e7',
        brandBlue: '#2F9ABF',
  brandGold: '#c49863',
  brandInk: '#1e2732',
  brandStone: '#f5f7fa'
      },
      fontFamily: {
        comic: ['"Comic Sans MS"', 'cursive'],
        pacifico: ['"Pacifico"', 'cursive'],
        roboto: ['"Roboto"', 'sans-serif']
      },
      container: {
        center: true,
        padding: '1rem',
        screens: { lg: '1120px', xl: '1280px' }
      },
      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.12)'
      },
      spacing: {
        'section': '4.5rem'
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '33.33%': { transform: 'translateX(0%)' },
          '66.66%': { transform: 'translateX(-33.33%)' },
          '100%': { transform: 'translateX(-66.66%)' }
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        carousel: 'slide 10s infinite',
        spinSlow: 'spinSlow 20s linear infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')]
};
