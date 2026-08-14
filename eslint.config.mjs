import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import prettierPlugin from 'eslint-plugin-prettier';

// eslint-config-next 15.x still ships eslintrc-style configs only — the flat
// `eslint-config-next/core-web-vitals` entry point arrives with Next 16. Until
// then FlatCompat translates the legacy `extends` into flat config. Drop the
// compat layer and import the flat configs directly once Next 16 lands (#22).
const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
});

const eslintConfig = [
  // Flat config only ignores node_modules and .git by default. `next lint`
  // used to keep build output out of scope implicitly by scanning just the
  // source directories; now that eslint is pointed at the repo root, the
  // generated trees have to be excluded explicitly.
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  // 'prettier' (eslint-config-prettier) must stay last of the two: it switches
  // off the stylistic rules that would otherwise fight prettier/prettier.
  ...compat.extends('next/core-web-vitals', 'prettier'),
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
  },
];

export default eslintConfig;
