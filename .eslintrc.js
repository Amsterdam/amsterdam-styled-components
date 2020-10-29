module.exports = {
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
    'plugin:mdx/recommended',
  ],
  plugins: ['jest', 'prettier', '@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  overrides: [
    {
      files: ['*.test.tsx', '*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.stories.mdx'],
      rules: {
        'import/prefer-default-export': 'off',
        'react/jsx-fragments': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-console': 2,
    'prettier/prettier': ['error'],
    'react/prop-types': 0,
    'react/jsx-wrap-multilines': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // Check why we disabled some rules: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-am-using-a-rule-from-eslint-core-and-it-doesnt-work-correctly-with-typescript-code
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-undef': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
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
        extensions: ['.ts', '.tsx', '.mdx'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    semi: [2, 'never'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.mdx'],
      },
    },
  },
}
