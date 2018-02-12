var MongoClient = require('mongodb').MongoClient;
var url =  'mongodb://localhost:27017';

MongoClient.connect(url,function(err,db){
	if (err) throw err;
	var dbo =  db.db('mydb');
	var query = { name : 'sumit' , address: 'c 20 sector 56' };
	var newValues = { $set : { name: 'sumit patel' , address : 'b 631'}};

	dbo.collection('customers').updateOne(query , newValues , function (err,result){
		if (err) throw err;
		console.log('1 document updated');
		db.close();
	});
});