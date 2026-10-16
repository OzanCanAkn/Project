/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        action: '#0381FF',
        ink: '#0B122A',
        body: '#0B172A',
        muted: '#666666',
      },
      fontFamily: {
        sans: ['"SF Pro Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
