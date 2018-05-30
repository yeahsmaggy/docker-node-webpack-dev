var mongoose = require('mongoose');

/**
 * [mapSchema description]
 * @type {[type]}
 */
var mapSchema = mongoose.Schema({
  name: String,
  date: Date
});
//Export function to create "SomeModel" model class

module.exports = mongoose.model('MapModel', mapSchema);