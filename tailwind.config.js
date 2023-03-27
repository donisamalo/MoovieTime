/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#E74C3C',
      },
      backgroundImage: {
        'wonder-woman':
          "url('~/assets/image/wonder-woman-1984-background.png')",
      },
      spacing: {},
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
