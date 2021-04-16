const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

const devConfig = {
  mode: "development",
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = merge(baseConfig, devConfig);
