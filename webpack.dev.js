const path = require("path");
const common = require("./webpack.config");
const {merge} = require("webpack-merge");
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      {
        // css onlu
        // test: /\.css$/,
        // use: ["style-loader","css-loader"]
        //sass
        test: /\.scss$/,
        use: [
          "style-loader", //3. js insert to dom
          "css-loader", // 2. css to js
          "sass-loader"// 1. turns sass to css
        ]
      },
    ]
  }
});