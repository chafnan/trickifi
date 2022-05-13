// @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Fira Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Fira Sans"', ...defaultTheme.fontFamily.serif],
        mono: ['"Fira Sans"', ...defaultTheme.fontFamily.mono],
        fira: ['"Fira Sans"'],
      },
    },
  },
  fontSize: {
    xs: '11px',
    sm: '12px',
    base: '14px',
    md: '14px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
  },
}
