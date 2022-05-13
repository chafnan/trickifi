const { colors } = require('./lib/color')
const { fontSize } = require('./lib/font')
const { screens } = require('./lib/grid')
const { borderRadius } = require('./lib/radius')
const { spacing } = require('./lib/spacing')

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
    spacing,
  },
}
