var mongoose = require('mongoose');

/**
 * [userSchema description]
 * @type {[type]}
 */
var userSchema = mongoose.Schema({
  name: String,
  email: String, 
  pass: String,
  num: Number
});
//Export function to create "SomeModel" model class

module.exports = mongoose.model('UserModel', userSchema);