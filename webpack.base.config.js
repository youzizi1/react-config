const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  module: {
    rules: [
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
  ],
};
