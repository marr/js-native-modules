const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    library: 'MyComponent'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'moment': true
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
