module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  parserOptions: {
    project: './tsconfig.eslint.json'
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'cypress/'
  ]
};