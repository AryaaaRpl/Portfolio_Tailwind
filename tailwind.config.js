/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        red: '#dc2626',
        hitam: '#0f172a',
        kedua: '#64748b'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

