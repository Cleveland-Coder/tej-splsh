import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier/flat';
import prettierPlugin from 'eslint-plugin-prettier';

const eslintConfig = [
  // Flat config only ignores node_modules and .git by default. `next lint`
  // used to keep build output out of scope implicitly by scanning just the
  // source directories; now that eslint is pointed at the repo root, the
  // generated trees have to be excluded explicitly. eslint-config-next ships
  // this same list, but state it here too: `out/` and `build/` are this
  // repo's to declare, not a detail to inherit from the framework preset.
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  // 'prettier' (eslint-config-prettier) must stay after the presets above: it
  // switches off the stylistic rules that would otherwise fight
  // prettier/prettier.
  prettierConfig,
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
