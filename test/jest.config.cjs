/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: '../test/tsconfig.test.json'
    }],
    '^.+\\.(js|jsx)$': ['babel-jest', {
      presets: ['next/babel']
    }]
  },
  testMatch: [
    '../test/**/*.test.(ts|tsx|js|jsx)',
    '../src/**/*.test.(ts|tsx|js|jsx)'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  rootDir: '..'
};

module.exports = config;