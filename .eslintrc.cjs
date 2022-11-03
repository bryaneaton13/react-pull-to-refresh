/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['kentcdodds', 'kentcdodds/react'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-restricted-imports': ['error', { patterns: ['~/features/*/*'] }],
    'no-warning-comments': 'off',
    radix: ['error', 'as-needed'],
    'react-hooks/exhaustive-deps': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-sort-props': ['warn', { reservedFirst: ['key'] }],
  },
};
