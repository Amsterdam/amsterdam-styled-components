const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const path = require('path')

const createTransformer = require('typescript-plugin-styled-components').default
const styledComponentsTransformer = createTransformer({ displayName: true })

const basePath = path.resolve(__dirname, '../', 'packages')

module.exports = ({ config, mode }) => {
  // This piece adds the '&quiet=true' param to the hot loader module,
  // because we use transpileOnly: true will show warnings,
  // these can be considered false positive, because we use a seperate
  // typechecker: fork-ts-checker-webpack-plugin
  const hotLoaderUrl = config.entry.find(enr => /hot-middleware/.test(enr))
  if (hotLoaderUrl) {
    config.entry.splice(config.entry.indexOf(hotLoaderUrl), 1)
    const newHotLoaderUrl = `${hotLoaderUrl}&quiet=true`
    config.entry.push(newHotLoaderUrl)
  }

  if (mode === 'DEVELOPMENT') {
    // Same motivation as described above
    config.devServer = {
      stats: 'errors-only',
    }
  }
  // Add typescript support
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          transpileOnly: (mode === 'DEVELOPMENT'), // huge performance win
          configFileName: './tsconfig.storybook.json',
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
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

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          parser: 'typescript',
        },
      },
    ],
    enforce: 'pre',
  })

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

  if (mode === 'DEVELOPMENT') {
    config.plugins = [...config.plugins, new ForkTsCheckerWebpackPlugin()]
  }

  return config
}
