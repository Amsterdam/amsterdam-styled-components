require('@babel/register')({
  presets: ['@babel/preset-env'],
  plugins: [
    'inline-react-svg'
  ]
})
require('./src/server')
