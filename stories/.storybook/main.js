module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  staticDirs: ['../../packages/asc-assets/static'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
  ],
}
