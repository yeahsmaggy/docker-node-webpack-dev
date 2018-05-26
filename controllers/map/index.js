/**
 * Module dependencies.
 */
var db = require('../../db');
const ObjectId = require('mongodb').ObjectId;
const MapModel = require('../../models/mapmodel')
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
exports.list = function(req, res, next) {
    MapModel.find(function(err, results) {
        if (err) return console.error(err);
        // res.status(200).json(results);
        res.render('list', {
            maps: results
        });
    });
};
exports.edit = function(req, res, next) {

    MapModel.findById(req.params.map_id, function findMap(err, results) {
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
    // mapSchema.methods.speak = function () {
    //   var greeting = this.name
    //     ? "Meow name is " + this.name
    //     : "I don't have a name";
    //   console.log(greeting);
    // }
    var mycoolmap = new MapModel({
        name: body.name,
        date: Date.now()
    });
    // mycoolmap.speak(); // "Meow name is mycoolmap"
    mycoolmap.save(function(err, mycoolmap) {
        res.redirect('/maps');
        if (err) return console.error(err);
        //mycoolmap.speak();
        // res.status(500).send(err);

    });
    // try {
    //  db.client.collection('maps').insertOne( { id: "asdf", name: 15 } );
    //  console.log('gooooo');
    // // res.status(200).json(body);
    // res.render('list', { map: req.map });
    // } catch (e) {
    //   //console.log(e);
    //    res.status(500).send(e);
    // };
};
exports.show = function(req, res, next) {

     MapModel.findById(req.params.map_id, function findMap(err, results) {
        if (err) {
            return next(err);
        }
        // Success - go to map list
         res.render('show', {
            map: results
        });
    })

};

exports.destroy = function(req, res, next) {

    MapModel.findByIdAndRemove(req.body.id, function deleteMap(err) {
        if (err) {
            return next(err);
        }
        // Success - go to map list
        res.redirect('/maps')
    })


};


exports.update = function(req, res, next) {
    var body = req.body;
    req.map.name = body.map.name;
    res.message('Information updated!');
    res.redirect('/map/' + req.map.id);
};