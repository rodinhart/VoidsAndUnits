module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./public/bundle.js",
    chunkFilename: "./public/bundle.js"
  },
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
  target: "web"
}
