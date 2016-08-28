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
    },
    'react-dom': {
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'moment': {
      commonjs2: 'moment',
      commonjs: 'moment',
      amd: 'moment',
      root: 'moment',
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
