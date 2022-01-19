/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path')

module.exports = {
  extends: ['../../.eslintrc.js'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      // Use package.json from both this package folder and root.
      { packageDir: [__dirname, join(__dirname, '../../')] },
    ],
  },
}
