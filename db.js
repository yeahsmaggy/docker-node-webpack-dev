const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const Promise = require('promise');
require('promise/lib/rejection-tracking').enable();
const mongoose = require('mongoose');

//http://mongoosejs.com/docs/index.html
mongoose.connect('mongodb://root:example@mongo:27017');

mongoose.Promise = global.Promise;


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports.db = db;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {


});



// var promise = new Promise(function (resolve, reject) {

//   MongoClient.connect('mongodb://mongo:27017/mappiness', (err, client) => {
// 	  if (err) {
// 		assert.isNotOk(err,'Promise error');
// 	  done();
// 	  }
// 	  else resolve(resolve);
// 		module.exports.client = client.db('mappiness');
// 		db = client.db('mappiness')

// 		// try {
// 		//    db.collection('maps').insertOne( { item: "card", qty: 15 } );
// 		// } catch (e) {
// 		//    console.log(e);
// 		// };


//       //res.sendFile(__dirname + '/index.html')
// 	  //   db.collection('techniques').find().toArray(function(err, results) {
// 	  //       if (err) return console.log(err)
// 	  //     // renders index.ejs
// 	  //     var maps = exports.maps = results;
// 	  // })
// 	})

// });



// // faux database

// var pets = exports.pets = [];

// pets.push({ name: 'Tobi', id: 0 });
// pets.push({ name: 'Loki', id: 1 });
// pets.push({ name: 'Jane', id: 2 });
// pets.push({ name: 'Raul', id: 3 });

// var users = exports.users = [];

// users.push({ name: 'TJ', pets: [pets[0], pets[1], pets[2]], id: 0  });
// users.push({ name: 'Guillermo', pets: [pets[3]], id: 1 });
// users.push({ name: 'Nathan', pets: [], id: 2 });