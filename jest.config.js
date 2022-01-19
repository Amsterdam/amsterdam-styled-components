module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: false,
  collectCoverageFrom: [
    'packages/asc-ui/src/**/*.{js,jsx,ts,tsx}',
    'packages/asc-ui-beta/src/**/*.{js,jsx,ts,tsx}',
    '!packages/asc-ui/src/(styles|internals)/**/*.{js,jsx,ts,tsx}',
    '!packages/asc-ui-beta/src/(styles|internals)/**/*.{js,jsx,ts,tsx}',
    '!packages/**/*.(test|stories).{js,jsx,ts,tsx}',
    '!packages/**/(index).{js,jsx,ts,tsx}',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleDirectories: ['node_modules', 'packages'],
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/config/testing/mocks/svg.ts',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|sv|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/testing/mocks/image.ts',
    '^@amsterdam/asc-ui': '<rootDir>/packages/asc-ui/src',
    '^@amsterdam/asc-ui-beta': '<rootDir>/packages/asc-ui-beta/src',
    '^@amsterdam/asc-assets': '<rootDir>/packages/asc-assets/src',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/lib/',
    '/es/',
    '/examples/',
    '/config/',
    '/package/',
    '/scripts/',
    '/packages/asc-assets/',
    '/packages/asc-ui/src/internals',
    '/packages/asc-ui-beta/src/internals',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/config/testing/mocks/matchMedia.ts',
    '<rootDir>/config/testing/test-bundler.ts',
  ],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  testRegex: ['/__tests__/.*\\.(ts|tsx|js)$', '/*.test\\.(ts|tsx|js)$'],
}
