const path = require('path');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode,
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$|jsx/,
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|css|scss)$/,
        use: ["style-loader", "css- loader", "postcss-loader"],
      },
    ],
  },
  
  devServer: {
    static: path.join(__dirname, "public"),
    compress: true,
    port: 8080,
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  devtool: "eval-cheap-module-source-map",
};