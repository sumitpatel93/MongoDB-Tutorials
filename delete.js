var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,function  (err, db) {
	if (err) throw err;
	var dbo = db.db('mydb');
	var query = { name : /^doe/ };
	dbo.collection('customers').deleteMany(query,function(err,obj){
		if (err) throw err;
		console.log("1 document deleted");
		   console.log(obj.result.n + " document(s) deleted");

    db.close();

	});
});