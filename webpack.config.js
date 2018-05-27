//https://webpack.js.org/configuration/node/
//https://gist.github.com/madx/53853c3d7b527744917f
const Webpack = require('webpack');
const path = require('path')
const fs = require('fs')
module.exports = {
  mode: 'development',
  entry: {
    app: './index.js'
  },
  target: 'node',
  output: {
        libraryTarget: 'commonjs',
    },
    externals: fs.readdirSync("node_modules")
	  .reduce(function(acc, mod) {
	    if (mod === ".bin") {
	      return acc
	    }

	    acc[mod] = "commonjs " + mod
	    return acc
	  }, {})
	,
	node: {
	  console: false,
	  global: true,
	  process: true,
	  __filename: "mock",
	  __dirname: "mock",
	  Buffer: true,
	  setImmediate: true

	  // See "Other node core libraries" for additional options.
	},
	output: {
	  path: path.join(__dirname, "build"),
	  filename: "[name].js",
	},
	resolve : {
	  extensions: [
	    ".js",
	    ".json",
  	]
  },
  devServer: {
	  contentBase:'./',
	  port: 8001
	},
   // We have to manually add the Hot Replacement plugin when running
  // from Node
  plugins: [new Webpack.HotModuleReplacementPlugin()],
  // Necessary for file changes inside the bind mount to get picked up
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}