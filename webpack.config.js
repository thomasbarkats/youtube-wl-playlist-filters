const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/PlaylistPageEnhancer.ts',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};