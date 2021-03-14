const path = require("path");
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
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
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset',
      },
    ]
  }
}