const { join } = require('path')
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')

module.exports = {
  presets: [require('../../../tailwind-workspace-preset')],
  content: [
    join(__dirname, 'src/**/*!(*.spec).{mdx,ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    join(__dirname, '../tailwind/src/**/*.{mdx,js}'),
    join(__dirname, '../icon/src/**/*.{mdx,js}'),
  ],
  plugins: [],
}
