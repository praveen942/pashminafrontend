module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      outlineOffset: {
        15: '15px',
      },
      padding: {
        '8px': '8px',
      },
      inset: {
        38: '38rem',
      },
      colors: {
        maroon: '#56112A',
        purple: '#7a1e99',
        pink: '#F2D4D7',
        yellow: '#faf8f2',
      },
      fontFamily: {
        Orpheu: ['Orpheus Pro', 'sans-serif'],
        Calibri: ['Calibri', 'sans-serif'],
      },

      backgroundImage: {
        'hero-pattern': "url('/images/bg.jpg')",
      },
      extend: {
        screens: {
          xs: [{ min: '20px', max: '340px' }],
        },
      },
    },
  },

  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar'), require('@tailwindcss/line-clamp')],
}
