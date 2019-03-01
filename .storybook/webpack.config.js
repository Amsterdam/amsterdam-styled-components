const path = require('path')
const { lstatSync, readdirSync } = require('fs')

const basePath = path.resolve(__dirname, '../', 'packages')
const packages = readdirSync(basePath).filter((name) =>
  lstatSync(path.join(basePath, name)).isDirectory(),
)

module.exports = (baseConfig, mode, defaultConfig) => {
  // Add typescript support
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [{
      loader: require.resolve('awesome-typescript-loader'),
      options: {
        configFileName: './tsconfig.storybook.json',
      },
    }],
  })
  defaultConfig.resolve.extensions.push('.ts', '.tsx')

  // Resolve every package to it's src directory
  Object.assign(defaultConfig.resolve.alias, {
    ...packages.reduce((acc, name) => ({
      ...acc,
      [`@datapunt/${name}`]: path.join(basePath, name, name !== 'asc-assets' ? '/src' : ''),
    }), {}),
  })

  // Since we use the react-scripts webpack defaultConfig, that only looks at the /src folder,
  // we need to add our ./package directory.
  defaultConfig.module.rules = defaultConfig.module.rules.map((rule) => ({
    ...rule,
    ...(Array.isArray(rule.include)) ? { include: [...rule.include, basePath] } : {},
  }))
  return defaultConfig
}
