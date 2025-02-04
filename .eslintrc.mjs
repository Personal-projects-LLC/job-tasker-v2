export default [
  {
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'next'],
    overrides: [
      {
        files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
        extends: ['plugin:jest/recommended'],
        env: {
          'jest/globals': true
        }
      }
    ],
    env: {
      "browser": true,
      "node": true,
      "es2021": true,
      "jest": true
    },

    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json']
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
  }
];