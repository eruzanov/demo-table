const path = require('path');

module.exports = {
  entry: './app',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'less-loader'
        ]
      }
    ]
  }
};
