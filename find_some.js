var MongoClient = require('mongodb').MongoClient;
var url  = 'mongodb://localhost:27017/PROJECTS/MongoDB-Tutorials/crud';

MongoClient.connect(url,function (err,db) {
  if (err) throw  err;
  var dbo = db.db('mydb');
  dbo.collection('customers').find({ name:'Times Inc'}).toArray(function(err,result){
     if (err) throw  err;
     console.log(result);
     db.close();    
  });
  	
})