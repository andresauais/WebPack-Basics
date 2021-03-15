const path = require("path");
const webpack = require('webpack');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');


module.exports = {
  entry: {
    main: "./src/js/index.js",
    vendor: "./src/js/vendor.js"
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['mozjpeg', { progressive: true, quality: 20 }],
          ['pngquant', { quality: [0.7, 0.9], speed: 4 }],
          [
            'svgo',
            {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          ],
        ],
      },
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
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset',
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline',
        parser: {
          dataUrlCondition: {
            maxSize: 12 * 1024,
          },
        },
      },
    ]
  },
}