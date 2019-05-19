module.exports = () => ({
  target: 'node',
  node: {
    __dirname: false,
  },
  devtool: 'source-map',
  entry: ['regenerator-runtime/runtime', './src/server.js'],
  output: {
    path: `${__dirname}/../build/`,
    filename: 'server.js',
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
