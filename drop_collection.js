var MongoClient = require('mongodb').MongoClient;
var url =  'mongodb://localhost:27017';

MongoClient.connect(url,function(err,db){
	if (err) throw err;
	var dbo =  db.db('mydb');
	//drop method takes a  callback function containing call back function and  result parameter which returns true if collection was succesfully deleted or returns false.
	dbo.collection('customers').drop(function(err,delOk){
		if (err) throw err;
		if (delOk) console.log('the collection has been succesfully deleted');
		db.close();
	});
});