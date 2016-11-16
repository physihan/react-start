// require path
// import path from 'path'
var path = require('path')
module.exports = {

  // export default {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },


  module: {
    loaders: [
      //   { test: /\.js$/, loader: 'babel' },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        // options: {
        //   presets: ["es2015"]
        // },
      }

    ]
  }
}