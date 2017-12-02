import path from 'path';

module.exports = {
  entry: path.join(__dirname, 'client', 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'client', 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  }
}
