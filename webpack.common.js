const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Jan Chodorowski",
      meta: {
        viewport: "width=device-width, initial-scale=1"
      }
    }),
    new CleanWebpackPlugin(["build"]),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(svg|png|jpg)$/,
        use: {
          // loader: "file-loader"
          loader: "base64-inline-loader"
        }
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: [
            ["@babel/plugin-transform-react-jsx", { pragma: "h" }],
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-syntax-dynamic-import"
          ]
        }
      }
    ]
  }
};
