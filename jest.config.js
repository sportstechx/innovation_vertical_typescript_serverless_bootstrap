module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  resetModules: true,
  restoreMocks: true,
  roots: [
    '<rootDir>/tests/'
  ],
  testEnvironment: 'node',
  verbose: true,
  collectCoverageFrom: [
    'src/**'
  ],
  coverageDirectory: 'tests/test-results',
  reporters: ['default'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  }
}
