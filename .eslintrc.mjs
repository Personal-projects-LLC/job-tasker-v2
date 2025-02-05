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
      // Базовое форматирование
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'double'],
      semi: ['error', 'always'],

      // TypeScript правила для безопасности типов
      '@typescript-eslint/no-unsafe-assignment': 'warn', // Предотвращает небезопасное присваивание значений
      '@typescript-eslint/no-unsafe-call': 'warn', // Предотвращает небезопасные вызовы функций
      '@typescript-eslint/no-unsafe-member-access': 'warn', // Предотвращает небезопасный доступ к свойствам
      '@typescript-eslint/no-unsafe-return': 'warn', // Предотвращает небезопасные возвраты значений
      '@typescript-eslint/no-unsafe-argument': 'warn', // Предотвращает передачу небезопасных аргументов

      // Правила для работы с Promise
      '@typescript-eslint/no-floating-promises': 'warn', // Требует обработки промисов
      '@typescript-eslint/await-thenable': 'warn', // Убеждается, что await используется только с Promise
      '@typescript-eslint/no-misused-promises': 'warn', // Предотвращает неправильное использование Promise

      // Улучшение типизации
      '@typescript-eslint/no-unnecessary-condition': 'warn', // Убирает избыточные проверки
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn', // Убирает ненужные приведения типов
      '@typescript-eslint/no-unnecessary-type-parameters': 'warn', // Убирает ненужные параметры типов

      // Предотвращение плохих практик
      '@typescript-eslint/no-explicit-any': 'warn', // Запрещает использование any
      '@typescript-eslint/no-non-null-assertion': 'warn', // Запрещает небезопасное утверждение не-null
      'no-return-assign': 'error', // Запрещает присваивание в return
      'require-await': 'error', // Требует await в async функциях
      'no-promise-executor-return': 'error', // Запрещает return в executor Promise
      'no-async-promise-executor': 'error', // Запрещает async executor в Promise

      // Promise правила
      'promise/catch-or-return': 'error', // Требует обработки ошибок промисов
      'promise/always-return': 'error', // Требует return в then()
      'promise/no-return-wrap': 'error', // Запрещает ненужное оборачивание в Promise
      'promise/param-names': 'error', // Проверяет названия параметров промисов

      // RegExp правила
      'regexp/no-unused-capturing-group': 'warn', // Предупреждает о неиспользуемых группах в регулярках
      'regexp/no-useless-flag': 'error', // Запрещает бесполезные флаги в регулярках
      'regexp/no-useless-assertions': 'error', // Запрещает бесполезные утверждения в регулярках

      // Контроль сложности
      'max-depth': ['warn', { max: 6 }], // Ограничивает глубину вложенности
      'max-params': ['warn', { max: 6 }], // Ограничивает количество параметров
      'no-nested-ternary': 'error', // Запрещает вложенные тернарные операторы

      'no-warning-comments': 'off', // Отключает предупреждения о TODO и FIXME
      'multiline-comment-style': 'off', // Отключает принудительный стиль комментариев
      'lines-around-comment': [
        'error',
        {
          // Настраивает пространство вокруг комментариев
          beforeBlockComment: true,
          afterBlockComment: false,
          beforeLineComment: true,
          afterLineComment: false,
        },
      ],

      'max-lines-per-function': ['warn', { max: 50 }], // Ограничение размера функций
      'no-magic-numbers': 'warn', // Запрет магических чисел
      'id-length': ['error', { min: 2 }], // Требование описательных имен
      complexity: ['warn', { max: 10 }], // Ограничение сложности функций
      'no-multi-spaces': 'error', // Запрет множественных пробелов
      curly: ['error', 'all'], // Требование использования фигурных скобок
      'no-multiple-empty-lines': ['error', { max: 1 }], // Запрет множественных пустых строк
    },
  },
];
