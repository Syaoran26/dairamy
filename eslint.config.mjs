import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules: {
      // Code logic
      eqeqeq: 'warn',
      'no-console': 'warn',
      'no-alert': 'warn',
      'no-unused-vars': 'warn',
      'no-eq-null': 'warn',
      'no-debugger': 'error',
      'default-case': 'error',
      'no-empty': 'warn',

      // Code style
      quotes: ['warn', 'single', { avoidEscape: true }],
      'jsx-quotes': ['warn', 'prefer-double'],
    },
  }),
];

export default eslintConfig;
