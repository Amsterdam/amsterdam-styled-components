const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin

const path = require('path')
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')
const createTransformer = require('typescript-plugin-styled-components').default
const styledComponentsTransformer = createTransformer({ displayName: true })

const basePath = path.resolve(__dirname, '../', 'packages')

module.exports = {
  stories: ['../packages/asc-ui/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-notes/register-panel',
    '@storybook/addon-docs/register',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config) => {
    const inDevMode = config.mode === 'development'

    // This rule transpiles `acorn` to es5 to work in IE11
    // This should probably be fixed in Storybook v6
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/acorn-jsx/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.(stories|story)\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
            presets: ['@babel/preset-env'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            useCache: true,
            forceIsolatedModules: true,
            transpileOnly: inDevMode,
            configFileName: './tsconfig.json',
            noUnusedLocals: false,
            getCustomTransformers: () => ({
              before: [styledComponentsTransformer],
            }),
            reportFiles: ['packages/**/*.{ts,tsx}'],
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            propFilter(prop) {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules')
              }

              return true
            },
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.(stories)\.tsx?$/,
      loader: require.resolve('@storybook/source-loader'),
      exclude: [/node_modules/],
      enforce: 'pre',
    })

    config.resolve.extensions.push('.ts', '.tsx')

    // Resolve every package to it's src directory
    Object.assign(config.resolve.alias, {
      '@datapunt/asc-assets/static': path.join(
        basePath,
        'asc-assets',
        '/static',
      ),
      '@datapunt/asc-assets': path.join(basePath, 'asc-assets', '/src'),
      '@datapunt/asc-ui': path.join(basePath, 'asc-ui', '/src'),
    })

    if (inDevMode) {
      config.plugins = [...config.plugins, new CheckerPlugin()]
    }

    return config
  },
}
