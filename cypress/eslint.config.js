import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import cypress from 'eslint-plugin-cypress';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['**/*.d.ts'],
    plugins: {
      '@typescript-eslint': tseslint,
      'cypress': cypress
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        project: resolve(__dirname, '../tsconfig.cypress.json'),
        tsconfigRootDir: resolve(__dirname, '..')
      },
      globals: {
        cy: true,
        Cypress: true,
        describe: true,
        it: true,
        beforeEach: true,
        before: true,
        after: true,
        afterEach: true
      }
    },
    rules: {
      ...cypress.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'error',
      'no-undef': 'off'
    }
  },
  {
    files: ['**/*.d.ts'],
    plugins: {
      '@typescript-eslint': tseslint
    },
    languageOptions: {
      parser: tsparser
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-undef': 'off'
    }
  }
];