/**
 * Module dependencies.
 */

var db = require('../../db');
// const ObjectId = require('mongodb').ObjectId;
const PageModel = require('../../models/PageModel')

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

    await PageModel.find(function(err, results) {
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

    PageModel.findById(req.params.map_id, function findMap(err, results) {
        if (err) {
            return next(err);
        }
        // Success - go to map list
         res.render('edit', {
            map: results
        });
    })
};
exports.create = function(req, res, next) {
    var body = req.body;
    // NOTE: methods must be added to the schema before compiling it with mongoose.model()
    // pageschema.methods.speak = function () {
    //   var greeting = this.name
    //     ? "Meow name is " + this.name
    //     : "I don't have a name";
    //   console.log(greeting);
    // }
    var newpage = new PageModel({
        title: body.title,
        content: body.content,
        date: Date.now()
    });
    // newpage.speak(); // "Meow name is newpage"
    newpage.save(function(err, newpage) {
        res.redirect('/pages');
        if (err) return console.error(err);
        //newpage.speak();
        // res.status(500).send(err);

    });
    // try {
    //  db.client.collection('pages').insertOne( { id: "asdf", name: 15 } );
    //  console.log('gooooo');
    // // res.status(200).json(body);
    // res.render('list', { map: req.map });
    // } catch (e) {
    //   //console.log(e);
    //    res.status(500).send(e);
    // };
};
exports.show = async function(req, res, next) {

     await PageModel.findById(req.params.page_id, function(err, results) {
        if (err) {
        	res.status(400).json(e);
            // return next(err);
        }

        res.status(200).json(results);


        // Success - go to map list
        //  res.render('show', {
        //     page: results
        // });
    })

};

exports.destroy = function(req, res, next) {

     PageModel.findByIdAndRemove(req.body.id, function deleteMap(err) {
        if (err) {
            return next(err);
        }
        // Success - go to map list
        res.redirect('/pages')
    })
};


exports.update = function(req, res, next) {
    var body = req.body;
    req.map.name = body.map.name;
    res.message('Information updated!');
    res.redirect('/map/' + req.map.id);
};