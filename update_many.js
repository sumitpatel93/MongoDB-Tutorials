var MongoClient = require('mongodb').MongoClient;
var url =  'mongodb://localhost:27017';

MongoClient.connect(url,function(err,db){
	if (err) throw err;
	var dbo =  db.db('mydb');
	var query = { name : /^John/ };
	var newValues = { $set : { name: 'JOhn Wick' , address : '211 downing street'}};

	dbo.collection('customers').updateMany(query , newValues , function (err,res){
		if (err) throw err;
		console.log(res.result.nModified + " document(s) updated");
		db.close();
	});
});