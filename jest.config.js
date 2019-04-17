module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    'packages/asc-ui/src/**/*.{js,jsx,ts,tsx}',
    '!packages/asc-ui/src/styles/**/*.{js,jsx,ts,tsx}',
    '!packages/**/*.(test|stories).{js,jsx,ts,tsx}',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov', 'html'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleDirectories: ['node_modules', 'packages'],
  moduleNameMapper: {
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/testing/mocks/image.ts',
    '^@datapunt/(.*)$': '<rootDir>/packages/$1/src',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/lib/',
    '/examples/',
    '/config/',
    '/package/',
    '/scripts/',
    '/packages/asc-assets/',
    '/packages/asc-core/',
    '/packages/asc-ui/src/style',
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
