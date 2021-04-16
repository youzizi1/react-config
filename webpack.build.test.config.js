const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");

const baseConfig = require("./webpack.base.config");

const prodConfig = {
  mode: "production",
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify("production"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          name: "vendor",
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          name: "common",
        },
      },
    },
  },
};

module.exports = merge(baseConfig, prodConfig);
