const webpack = require("webpack");
const path = require("path");
var SRC_DIR = path.join(__dirname, "/react-client/src");
var DIST_DIR = path.join(__dirname, "/react-client/dist");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)],
};
