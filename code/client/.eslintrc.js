module.exports = {
    root: true,
    env: {
      node: true,
      es6: true,
    },
    parserOptions: { 
      ecmaVersion: 8,
      sourceType: "module"
    }, 
    ignorePatterns: [
        'node_modules/*', 
        '.next/*', '.out/*', 
        '!.prettierrc.js',
        'dist/',
        "tests/"
    ],
    extends: ['eslint:recommended'],
    overrides: [
      // This configuration will apply only to TypeScript files
      {
        files: ['**/*.ts', '**/*.tsx'],
        parser: '@typescript-eslint/parser',
        settings: { react: { version: 'detect' } },
        env: {
          browser: true,
          node: true,
          es6: true,
        },
        extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:react/recommended',
          'plugin:react-hooks/recommended',
          'plugin:jsx-a11y/recommended', // Accessibility rules
        ],
        rules: {
          // We will use TypeScript's types for component props instead
          'react/prop-types': 'off',
  
          // No need to import React when using Next.js
          'react/react-in-jsx-scope': 'off',
  
          // This rule is not compatible with Next.js's <Link /> components
          'jsx-a11y/anchor-is-valid': 'off',
  
          // no unused variables
          '@typescript-eslint/no-unused-vars': ['error'],

          // no console logs, disable eslint temporarily if you want to log
          // using "eslint-disable-next-line"
          'no-console': ["error"],
  
          // I suggest this setting for requiring return types on functions only where useful
          '@typescript-eslint/explicit-function-return-type': [
            'warn',
            {
              allowExpressions: true,
              allowConciseArrowFunctionExpressionsStartingWithVoid: true,
            },
          ],
        },
      },
    ],
  }