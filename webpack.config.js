module.exports = {
  devtool: "source-map", //使用这个来防止打包后有eval，导致插件报错
  entry: __dirname + "/js/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
    ],
  },
}