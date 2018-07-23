/**
 * Module dependencies.
 */

var db = require('../../db');
// const ObjectId = require('mongodb').ObjectId;
const UserModel = require('../../models/UserModel')

exports.engine = 'nunjucks';

exports.before = function(req, res, next) {

    var id = req.params.map_id;
    if (!id) return next();
    // pretend to query a database...
    process.nextTick(function() {
        // cant find that map
        //if (!req.map) return next('route');
        // found it, move on to the routes
        next();
    });
};
exports.list = async function(req, res, next) {

    await UserModel.find(function(err, results) {
          if (err) {
            return next(err);
        }
         res.status(200).json(results);
        // res.send('hi');
        //res.status(200).json(['asdf']);


        // res.render('list', {
        //     pages: results
        // });
    });
};
exports.edit = function(req, res, next) {
    UserModel.findById(req.params.map_id, function findUser(err, results) {
        if (err) {
            return next(err);
        }
         res.render('edit', {
            user: results
        });
    })
};
exports.create = function(req, res, next) {
    var body = req.body;

    var newuser = new UserModel({
        title: body.title,
        content: body.content,
        date: Date.now()
    });
    newuser.save(function(err, newuser) {
        res.redirect('/users');
        if (err) return console.error(err);
        // res.status(500).send(err);

    });
};
exports.show = async function(req, res, next) {
     await UserModel.findById(req.params.page_id, function(err, results) {
        if (err) {
        	res.status(400).json(e);
            // return next(err);
        }
        res.status(200).json(results);
    })

};

exports.destroy = function(req, res, next) {
     UserModel.findByIdAndRemove(req.body.id, function deleteUser(err) {
        if (err) {
            return next(err);
        }
        res.redirect('/users')
    })
};


exports.update = function(req, res, next) {
    var body = req.body;
    req.user.name = body.user.name;
    res.message('User updated!');
    res.redirect('/user/' + req.user.id);
};


exports.signup = function(req,res,next){

	var user = {
	       Name: req.body.name,
	       Email: req.body.email,
	       Pass: req.body.pass,
	       Num: req.body.num
	   };


	UserReg.create(user, function(err, newUser) {
	      if(err) return next(err);
	      req.session.user = email;
	      return res.send('Logged In!');
	   });


};


exports.login = function(req,res,next){

   var email = req.body.email;
   var pass = req.body.pass;

   User.findOne({Email: email, Pass: pass}, function(err, user) {

      if(err) return next(err);
      if(!user) return res.send('Not logged in!');

      req.session.user = email;
      return res.send('Logged In!');

  })
  };


exports.logout = function (req, res) {
   req.session.user = null;
};