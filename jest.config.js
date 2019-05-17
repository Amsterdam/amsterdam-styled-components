module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    'packages/asc-ui/src/**/*.{js,jsx,ts,tsx}',
    '!packages/asc-ui/src/(styles|internals)/**/*.{js,jsx,ts,tsx}',
    '!packages/**/*.(test|stories).{js,jsx,ts,tsx}',
    '!packages/**/(index).{js,jsx,ts,tsx}',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov'],
  coverageThreshold: {
    global: {
      statements: 61,
      branches: 46,
      functions: 62,
      lines: 43,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleDirectories: ['node_modules', 'packages'],
  moduleNameMapper: {
    '^@datapunt/asc-assets/.*\\.svg$': '<rootDir>/config/testing/mocks/ svg.ts',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|sv|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/testing/mocks/image.ts',
    '^@datapunt/asc-ui': '<rootDir>/packages/asc-ui/src',
    '^@datapunt/asc-core': '<rootDir>/packages/asc-core/src',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/lib/',
    '/examples/',
    '/config/',
    '/package/',
    '/scripts/',
    '/packages/asc-assets/',
    '/packages/asc-ui/src/internals',
  ],
  setupFilesAfterEnv: ['<rootDir>/config/testing/test-bundler.ts'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  testRegex: ['/__tests__/.*\\.(ts|tsx|js)$', '/*.test\\.(ts|tsx|js)$'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
