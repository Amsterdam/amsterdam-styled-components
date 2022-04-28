module.exports = {
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:mdx/recommended',
    'plugin:@typescript-eslint/recommended',
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
    'no-console': 'error',
    'prettier/prettier': ['error'],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off',
    'no-restricted-exports': 'off',
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
    'react/jsx-props-no-spreading': 'off',
    semi: ['error', 'never'],
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
    'no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.mdx'],
      },
    },
  },
}
