//all the errors you get because webpack tries to bundle all the ndoe modules
//https://stackoverflow.com/questions/31102035/how-can-i-use-webpack-with-express
//https://stackoverflow.com/questions/41692643/webpack-and-express-critical-dependencies-warning/42425214#42425214

const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const outputDirectory = 'dist';


module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader'
  //       }
  //     },
  //     {
  //       test: /\.css$/,
  //       use: ['style-loader', 'css-loader']
  //     }
  //   ],
  // },
  plugins: [
    // new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin()
  ]
  // devServer: {
  //   port: 3000,
  //   open: true,
  //   proxy: {
  //       "/": "http://localhost:8080"
  //   }
  // },
};