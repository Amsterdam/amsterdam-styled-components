const path = require('path')

const basePath = path.resolve(__dirname, '../', 'packages')

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  // Add typescript support
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [{
      loader: require.resolve('awesome-typescript-loader'),
    }],
  })
  defaultConfig.resolve.extensions.push('.ts', '.tsx')

  // Since we use the react-scripts webpack config, that only looks at the /src folder,
  // we need to add our ./package directory.
  defaultConfig.module.rules = defaultConfig.module.rules.map((rule) => ({
    ...rule,
    ...(rule.include) ? { include: [...rule.include, basePath] } : {},
  }))
  return defaultConfig
}
