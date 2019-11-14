const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin

const path = require('path')

const createTransformer = require('typescript-plugin-styled-components').default
const styledComponentsTransformer = createTransformer({ displayName: true })

const basePath = path.resolve(__dirname, '../', 'packages')

module.exports = ({ config, mode }) => {
  const isDev = (mode === 'DEVELOPMENT')

  // Add typescript support
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          useCache: true,
          forceIsolatedModules: true,
          configFileName: './tsconfig.json',
          noUnusedLocals: false,
          ignoreDiagnostics: [7005], // Temporary fix for this issue: https://github.com/storybookjs/storybook/issues/7829
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
          reportFiles: [
            "packages/**/*.{ts,tsx}"
          ],
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

  config.resolve.extensions.push('.ts', '.tsx')

  // Resolve every package to it's src directory
  Object.assign(config.resolve.alias, {
    '@datapunt/asc-assets': path.join(basePath, 'asc-assets', '/src'),
    '@datapunt/asc-core': path.join(basePath, 'asc-core', '/src'),
    '@datapunt/asc-ui': path.join(basePath, 'asc-ui', '/src'),
  })

  // Since we use the react-scripts webpack config, that only looks at the /src folder,
  // we need to add our ./package directory.
  config.module.rules = config.module.rules.map(rule => ({
    ...rule,
    ...(Array.isArray(rule.include)
      ? { include: [...rule.include, basePath] }
      : {}),
  }))

  if (isDev) {
    config.plugins = [...config.plugins, new CheckerPlugin()]
  }

  return config
}
