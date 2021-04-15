const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      }
    ],
  },
};
