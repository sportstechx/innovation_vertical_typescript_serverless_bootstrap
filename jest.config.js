module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  resetModules: true,
  restoreMocks: true,
  roots: [
    '<rootDir>/src/'
  ],
  testEnvironment: 'node',
  verbose: true,
  collectCoverageFrom: [
    'src/**',
    '!src/@types/**',
    '!**/*.test.ts',
    '!**/*.spec.ts'
  ],
  coverageDirectory: 'test-results',
  reporters: ['default'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  }
}
