var CopyWebpackPlugin = require('copy-webpack-plugin')
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
    new LiveReloadPlugin(),
    new CopyWebpackPlugin([
      { from: "src/index.html", to: "public/index.html" },
      { context: "node_modules", from: "semantic-ui-css", to: "public/semantic-ui-css" }
    ])
  ],
  target: "web"
}
