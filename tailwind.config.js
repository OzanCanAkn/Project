/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        action: '#3B82F6',
      },
      screens: {
        'tablet': '768px',
        'desktop': '1024px',
        'widescreen': '1400px',
      },
      breakpoints: {
        'tablet': '768px',
        'desktop': '1024px',
        'widescreen': '1400px',
      },
      fontFamily: {
        sans: [
          '"SF Pro Display"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
