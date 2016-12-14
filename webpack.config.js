var LiveReloadPlugin = require('webpack-livereload-plugin')

module.exports = {
  entry: "./src/index.js",
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
        babelrc: true
      }
    ]
  },
  output: {
    filename: "./public/bundle.js",
    chunkFilename: "./public/bundle.js"
  },
  plugins: [
    new LiveReloadPlugin()
  ],
  target: "web"
}
