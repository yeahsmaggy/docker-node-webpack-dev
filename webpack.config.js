//all the errors you get because webpack tries to bundle all the ndoe modules
//https://stackoverflow.com/questions/31102035/how-can-i-use-webpack-with-express
//https://stackoverflow.com/questions/41692643/webpack-and-express-critical-dependencies-warning/42425214#42425214
//https://dev.to/aurelkurtula/setting-up-a-minimal-node-environment-with-webpack-and-babel--1j04
//https://github.com/webpack/webpack/tree/master/examples/multi-compiler
//https://github.com/webpack/webpack/tree/master/examples
//https://stackoverflow.com/questions/46655964/how-do-i-use-a-nunjucks-file-as-an-entry-point-with-webpack
const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const outputDirectory = 'dist';
const nodeExternals = require('webpack-node-externals');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')


module.exports = [
{
  name: 'client',
  entry: ['./src/client/index.js', './public/index.html'],
  output: {
    path: path.join(__dirname, 'public', outputDirectory)
    // filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      { test: /\.vue$/, loader: "vue-loader" },

      // { 
      //   test: /\.json$/, use:['json-loader']
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  //https://stackoverflow.com/questions/40806689/pre-compile-typescript-vue-components-with-template-string
  resolve: {
  alias: {
    'vue$': 'vue/dist/vue.common.js'
  }
},
  target: 'web',
  // externals: [nodeExternals()],
  plugins: [
    // new CleanWebpackPlugin([outputDirectory]),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    watchOptions: {
      ignored: /node_modules/
    },
    // publicPath: "/",
    // https://stackoverflow.com/questions/46501079/cannot-get-with-webpack-dev-server
    contentBase: path.join(__dirname, 'public'),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    port: 3000,
    historyApiFallback: true,
    open: true,
    https: true,
    proxy: {
      '/api': {
      // '/': {
      target: 'http://localhost:8001',
      // pathRewrite: {'^/api' : ''}
      pathRewrite: {'^/api' : ''}
    }
    }
}
}
];