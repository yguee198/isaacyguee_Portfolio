/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { darkBg: '#0f0f0f' },
      animation: { 'logo-spin': 'logo-spin 20s linear infinite' },
      keyframes: { 'logo-spin': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } } },
    },
  },
  plugins: [],
};