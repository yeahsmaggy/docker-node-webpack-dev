// //https://github.com/christianalfoni/webpack-express-boilerplate
// //https://github.com/expressjs/express/tree/master/examples/mvc
// //https://zellwk.com/blog/crud-express-mongodb/
// //https://mlab.com/databases/mappiness/collections/techniques
// //https://hackernoon.com/full-stack-web-application-using-react-node-js-express-and-webpack-97dbd5b9d708
const path = require('path');
const session = require('express-session');
const express = require('express')
const nunjucks = require('nunjucks')
const bodyParser= require('body-parser')
const http = require('http')
const logger = require('morgan');

const MongoClient = require('mongodb').MongoClient
const methodOverride = require('method-override');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 8001 : process.env.PORT;
const app = express();
const server = http.createServer(app)

const cors = require('cors')

app.use(cors())


//parse request bodies (req.body)
app.use(express.urlencoded({ extended: true }))

// allow overriding methods in query (?_method=put)
app.use(methodOverride('_method'));


// log
if (!module.parent) app.use(logger('dev'));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

require('./lib/boot')(app, { verbose: !module.parent });


app.use(function(err, req, res, next){
  // log it
  if (!module.parent) console.error(err.stack);

  // error page
  res.status(500).render('5xx');
});


app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

module.exports = app;

