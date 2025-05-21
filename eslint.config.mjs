import css from '@eslint/css';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
  { ignores: ['**/*.js', '**/*.cjs', '**/*.mjs'] },
  {
    files: ['**/*.css'],
    plugins: { css, prettier },
    language: 'css/css',
    extends: ['css/recommended'],
    rules: {
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],
    },
  },
]);
