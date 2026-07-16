import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  ...nextCoreWebVitals,
  ...nextTypescript,

  {
    name: 'tap/typescript-style',
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      'react-hooks/exhaustive-deps': 'off',
    },
  },

  {
    name: 'tap/react-jsx',
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react/jsx-boolean-value': ['error', 'always'],
      // Атрибуты: label="..." вместо label={'...'}
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ],
    },
  },

  {
    name: 'tap/js',
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },

  eslintPluginPrettierRecommended,

  globalIgnores([
    'build/**',
    'dist/**',
    'coverage/**',
    'next-env.d.ts',
    '.next/**',
  ]),
]);
