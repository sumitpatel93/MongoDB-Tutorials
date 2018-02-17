var express = require('express');
var router = express.Router();
var assert = require('assert');
var objectId = require('mongodb').ObjectID;

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.post('/delete', function(req, res) {
  var id = req.body.id;
  MongoClient.connect(url,function(err,db){
    assert.equal(null,err);
    var dbo = db.db('mydb');

    dbo.collection('customers').deleteOne({'_id':objectId(id)},function(err,result){
        assert.equal(null,err);
        console.log('item  deleted');
        db.close();
        res.redirect('/');
    });
  });
});


router.post('/update', function(req, res, next) {
    var item = {
        name: req.body.name,
        address: req.body.address
    };

    var id = req.body.id;
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        var dbo = db.db('mydb');
        dbo.collection('customers').updateOne({ '_id': objectId(id) }, { $set: item }, function(err, result) {
            console.log('item updated');
            db.close();
            res.redirect('/');
        });
    });
});

router.post('/insert', function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db('mydb');
        var product = { name: req.body.name, address: req.body.address };
        dbo.collection('customers').insert(product, function(err, result) {
            if (err) throw err;
            db.close();
            res.redirect('/');
        });
    })
});


router.get('/get-data', function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db('mydb');
        dbo.collection('customers').find({}).toArray(function(err, result) {
            if (err) throw err;
            res.render('index', { data: result });
            console.log(result);

            db.close();
        })
    });
});
module.exports = router;