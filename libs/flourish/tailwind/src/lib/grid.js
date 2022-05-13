module.exports = {
  screens: {
    sm: '375px',
    '-sm': { max: '767px' },
    '@sm': { min: '375px', max: '767px' },
    md: '768px',
    '-md': { max: '1439px' },
    '@md': { min: '768px', max: '1439px' },
    lg: '1440px',
  },
  theme: {
    extend: {
      gap: {
        sm: '8px',
        md: '16px',
        lg: '32px',
      },
    },
  },
}
