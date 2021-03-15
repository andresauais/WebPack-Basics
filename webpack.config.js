const path = require("path");
const webpack = require('webpack');

module.exports = {
  entry: {
    main: "./src/js/index.js",
    vendor: "./src/js/vendor.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
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