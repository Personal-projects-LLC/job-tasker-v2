export default [
  {
    // Наследуем базовые рекомендации ESLint, TypeScript, Prettier и настройки для Next.js.
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'next',
    ],
    plugins: ['@typescript-eslint', 'jest'],
    // Определяем переопределения для файлов с тестами.
    overrides: [
      {
        files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
        plugins: ['jest'],
        extends: ['plugin:jest/recommended'],
        env: {
          jest: true,
          'jest/globals': true,
        },
        globals: {
          describe: 'readonly',
          it: 'readonly',
          test: 'readonly',
          expect: 'readonly',
          jest: 'readonly',
        },
        rules: {
          'no-undef': 'off',
        },
      },
    ],
    // Определяем глобальные переменные среды.
    env: {
      browser: true,
      node: true,
      es2021: true,
      jest: true,
    },
    // Указываем, какие файлы учитывать.
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    // Настройки языка и парсера для TypeScript.
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: ['./tsconfig.json'],
      },
      globals: {
        browser: 'readonly',
        node: 'readonly',
      },
    },
    // Правила линтинга.
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'double'],
      semi: ['error', 'always'],
    },
  },
];
