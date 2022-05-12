const { join } = require('path')
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')

module.exports = {
  presets: [require('../../tailwind-workspace-preset')],
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
}
