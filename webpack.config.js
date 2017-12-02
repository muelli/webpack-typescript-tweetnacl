var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: {
        "main": "./assets/ts/app.ts"
      //, "patient_search": "./medcenter/static/medcenter/ts/patient_search.ts"
  },
  devtool: 'inline-source-map',
  output: {
      path: path.resolve('./assets/webpack_bundles/'),
      filename: "[name]-[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
  ]
}
