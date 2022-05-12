const { colors } = require('./lib/color')

module.exports = {
  presets: [require('./lib/font'), require('./lib/external')],
  theme: {
    colors,
  },
}
