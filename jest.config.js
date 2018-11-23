module.exports = {
  collectCoverageFrom: [
    'packages/**/*.{js,jsx}',
    '!packages/**/*.test.{js,jsx}',
    '!packages/*/RbGenerated*/*.{js,jsx}',
    '!packages/app.js',
    '!packages/global-styles.js',
    '!packages/*/*/Loadable.{js,jsx}',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  moduleDirectories: ['node_modules', 'packages'],
  moduleNameMapper: {
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/testing/mocks/image.js',
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  setupTestFrameworkScriptFile: '<rootDir>/config/testing/test-bundler.js',
  setupFiles: ['raf/polyfill', '<rootDir>/config/testing/enzyme-setup.js'],
  testRegex: '.*\\.test\\.jsx?$',
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
