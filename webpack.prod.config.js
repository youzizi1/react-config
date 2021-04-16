const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "https://cdn.example.com/assets/",
  },
  devtool: "cheap-module-source-map",
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, "src"),
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.jpg|png|jpeg|gif$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "./public/index.html"),
    }),
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
