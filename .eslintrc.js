module.exports = {
  root: true,

  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
  overrides: [
    // Standard typescript rules
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jest'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
      ],
      rules: {
        'no-unused-expressions': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        // Disallow `any`.  (This is overridden for test files, below)
        '@typescript-eslint/no-explicit-any': 'error',
        // To allow placeholder vars:
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],
        // To allow e.g. `interface Props extends RouteComponentProps {}`:
        '@typescript-eslint/no-empty-interface': [
          'error',
          { allowSingleExtends: true },
        ],
        // Typescript will do this:
        'react/prop-types': 'off',
        // Allow newspaper code structure:
        '@typescript-eslint/no-use-before-define': 'off',
        // Allow async functions that don't have awaits
        '@typescript-eslint/require-await': 'off',
        // Don't allow focused tests
        'jest/no-focused-tests': 'warn',
        // Soften eslint defaults so that callbacks don't need to be as verbose
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
      },
    },
    // Additional rules for TS test files
    {
      files: ['tests/**/*', '**/*.stories.{ts,tsx}', '**/*.spec.{ts,tsx}'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
    // TS Configuration files in the root dir
    {
      files: ['*.ts'],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
    // JS Configuration files in the root dir
    {
      files: ['*.js'],
      extends: 'eslint:recommended',
      parserOptions: {
        ecmaVersion: 2018,
      },
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
