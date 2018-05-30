const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const Promise = require('promise');
require('promise/lib/rejection-tracking').enable();
const mongoose = require('mongoose');

mongoose.connect('mongodb://root:example@mongo:27017');

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports.db = db;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});