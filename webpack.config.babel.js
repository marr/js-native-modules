const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  externals: {
    'react': {
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'React',
      root: 'React',
    }
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
    ]
  },
  resolve: {
    modules: [
      path.resolve('src')
    ]
  }
}
