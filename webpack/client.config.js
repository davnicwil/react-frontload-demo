module.exports = () => ({
  target: 'web',
  devtool: 'source-map',
  entry: ['regenerator-runtime/runtime', './src/client.js'],
  output: {
    path: `${__dirname}/../build/`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['@babel/env', '@babel/react'],
            },
          },
        ],
      },
    ],
  },
})
