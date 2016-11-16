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
        // include: /src/,
        // exclude: /node_modules/,
        loader: "babel",
        // options: {
        //   presets: ["es2015"]
        // },
        //  query: {  
        //     presets: ['react', 'es2015']  
        //   }  
      }
      // { test: /\.js$/, loader: "jsx!babel", include: /src/ },
    ]
  }
}