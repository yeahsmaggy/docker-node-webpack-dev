const express = require('express')
const nunjucks = require('nunjucks')
// require the module as normal



const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const methodOverride = require('method-override');
const session = require('express-session');
const path = require('path');


//https://github.com/expressjs/express/tree/master/examples/mvc
//https://zellwk.com/blog/crud-express-mongodb/
//https://mlab.com/databases/mappiness/collections/techniques

// parse request bodies (req.body)
app.use(express.urlencoded({ extended: true }))

// Set Nunjucks as rendering engine for pages with .html suffix
app.engine( 'html', nunjucks.render ) ;
app.set( 'view engine', 'html' ) ;

// app.set('view engine', 'ejs')

// allow overriding methods in query (?_method=put)
app.use(methodOverride('_method'));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// load controllers
require('./lib/boot')(app, { verbose: !module.parent });

app.use(function(err, req, res, next){
  // log it
  if (!module.parent) console.error(err.stack);

  // error page
  //res.status(500).render('5xx');
});

  app.listen(8001, () => {
    console.log('listening on 8001')
  })


// var db

// MongoClient.connect('mongodb://mainuser:qwerty510@ds223019.mlab.com:23019/mappiness', (err, client) => {
//   if (err) return console.log(err)
//   db = client.db('mappiness')
//   app.listen(3000, () => {
//     console.log('listening on 3000')
//   })
// })

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })