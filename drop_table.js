var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,function(err,db){
	if (err) throw err;
	var dbo  = db.db('mydb');
	dbo.dropCollectionion('customers',function(err,delOk){
		if(err) throw  err;
		if(delOk) console.log('the table has been successfully deleted from db');
		db.close();
	});
});