import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import cypressPlugin from 'eslint-plugin-cypress';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}', 'pages/**/*.{js,jsx,ts,tsx}', 'test/**/*.{js,jsx,ts,tsx}'],
    ...js.configs.recommended,
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      'next': nextPlugin
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  },
  {
    files: ['cypress/**/*.{ts,tsx,d.ts}'],
    ...js.configs.recommended,
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      'cypress': cypressPlugin
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: resolve(__dirname, './cypress/tsconfig.json'),
        tsconfigRootDir: __dirname
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      ...cypressPlugin.configs.recommended.rules
    }
  }
];