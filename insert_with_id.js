var MongoClient =  require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url,function(err,db){
	if (err) throw  err;
	var dbo = db.db("mydb");
	var obj = [
           { _id:154 , name:'John'},
           { _id:155 , name: 'Doe'},
           { _id:156, name: 'rahul'}

	];
	dbo.collection('products').insertMany(obj,function(err,res){
		if (err) throw  err;
		console.log(res);
		db.close();
	});
});