var MongoClient =  require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
	if (err) throw err;
	var dbo = db.db("mydb");
	var obj = [
    { name:"John", address:"12 hill side"},
    { name:"doe", address:"1123 n hill"},
    { name:"John", address:"12 hill side"},
    { name:"John", address:"12 hill side"},
    { name:"John", address:"12 hill side"},
    { name:"John", address:"12 hill side"},
    { name:"John", address:"12 hill side"}

	];
	dbo.collection("customers").insertMany(obj,function(err,res){
		if (err) throw err;

		console.log('number of documents inserted:' + res.insertedCount);
        console.log(res.insertedIds);
        console.log(res.ops);
        console.log(res.result);
		db.close();
	});
});