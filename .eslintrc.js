module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['jest', 'prettier', '@typescript-eslint', 'react-hooks'],
  env: {
    'jest/globals': true,
  },
  globals: {
    window: true,
  },
  overrides: [
    {
      files: ['*.test.tsx', '*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/prop-types': 0,
    'react/jsx-wrap-multilines': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    semi: [2, 'never'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    },
  },
}
