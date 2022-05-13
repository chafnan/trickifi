const { colors } = require('./lib/color')
const { fontSize } = require('./lib/font')
const { screens } = require('./lib/grid')
const { borderRadius } = require('./lib/radius')

module.exports = {
  presets: [
    require('./lib/font'),
    require('./lib/external'),
    require('./lib/elevation'),
    require('./lib/grid'),
  ],
  theme: {
    colors,
    screens,
    borderRadius,
    fontSize,
    spacing: {
      8: '8px',
      16: '16px',
      24: '24px',
      32: '32px',
      40: '40px',
      56: '56px',
      64: '64px',
    },
  },
}
