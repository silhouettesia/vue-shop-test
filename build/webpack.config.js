var webpack = require("webpack");
module.exports = {
  entry: [
    // "babel-polyfill", 
    "./src/main.js"],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }]
  }
}
