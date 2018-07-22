var mongoose = require('mongoose');

/**
 * [pageSchema description]
 * @type {[type]}
 */
var pageSchema = mongoose.Schema({
  title: String,
  date: Date, 
  content: String
});
//Export function to create "SomeModel" model class

module.exports = mongoose.model('PageModel', pageSchema);