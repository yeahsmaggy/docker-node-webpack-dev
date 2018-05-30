//https://github.com/christianalfoni/webpack-express-boilerplate
//https://github.com/expressjs/express/tree/master/examples/mvc
//https://zellwk.com/blog/crud-express-mongodb/
//https://mlab.com/databases/mappiness/collections/techniques
//https://hackernoon.com/full-stack-web-application-using-react-node-js-express-and-webpack-97dbd5b9d708
const path = require('path');
const express = require('express')
const webpack = require('webpack');
const nunjucks = require('nunjucks')
const bodyParser= require('body-parser')
// const MongoClient = require('mongodb').MongoClient
const methodOverride = require('method-override');
const session = require('express-session');
// const httpProxy = require('http-proxy');
// var proxy = httpProxy.createProxyServer();

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 8080 : process.env.PORT;
const app = express();

//parse request bodies (req.body)
app.use(express.urlencoded({ extended: true }))

// // Set Nunjucks as rendering engine for pages with .html suffix
app.engine( 'html', nunjucks.render ) ;
app.set( 'view engine', 'html' ) ;

// // allow overriding methods in query (?_method=put)
app.use(methodOverride('_method'));

// // serve static files
// app.use(express.static(path.join(__dirname, 'public')));

require('./lib/boot')(app, { verbose: !module.parent });


//respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('homepage. <a href="/maps/">maps</a>');
})

app.listen(port, 'localhost', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});

