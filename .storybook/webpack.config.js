const path = require('path')
const { lstatSync, readdirSync } = require('fs')

const basePath = path.resolve(__dirname, '../', 'packages')
const packages = readdirSync(basePath).filter((name) =>
  lstatSync(path.join(basePath, name)).isDirectory(),
)

module.exports = ({ config }) => {
  // Add typescript support
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [{
      loader: require.resolve('awesome-typescript-loader'),
      options: {
        configFileName: './tsconfig.storybook.json',
      },
    }],
  })
  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [{
      loader: require.resolve('@storybook/addon-storysource/loader'),
      options: { parser: 'typescript' },
    }],
    enforce: 'pre',
  });


  // Resolve every package to it's src directory
  Object.assign(config.resolve.alias, {
    ...packages.reduce((acc, name) => ({
      ...acc,
      [`@datapunt/${name}`]: path.join(basePath, name, name !== 'asc-assets' ? '/src' : ''),
    }), {})
  })

  // Since we use the react-scripts webpack config, that only looks at the /src folder,
  // we need to add our ./package directory.
  config.module.rules = config.module.rules.map((rule) => ({
    ...rule,
    ...(Array.isArray(rule.include)) ? { include: [...rule.include, basePath] } : {},
  }))
  return config
}
