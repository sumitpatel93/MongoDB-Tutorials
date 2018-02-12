var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url,function(err,db){
	if (err) throw err;
	var dbo =  db.db('mydb');
	var obj = {name : "Times Inc", address: "1212 Highway"};
	dbo.collection('customers').insertOne(obj,function(err,res){
		if (err) throw err;
		console.log('1 data inserted into database');
		db.close();
	});
});