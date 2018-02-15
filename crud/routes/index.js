var express = require('express');
var router = express.Router();
var assert = require('assert');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';



/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});


router.get('/get-data', function(req, res, next) 
{

    MongoClient.connect(url,function(err,db){
        assert.equal(null,err);
        console.log('connected');
        if (err) throw err; 
        res.render('index')
        db.close();
    });
    
    
});


module.exports = router;