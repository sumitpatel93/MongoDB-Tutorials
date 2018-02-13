var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});



//  products collection
//[
//  { _id: 154, name: 'Chocolate Heaven' },
//  { _id: 155, name: 'Tasty Lemons' },
//  { _id: 156, name: 'Vanilla Dreams' }
//]

/* orders collection

[
  { _id: 1, product_id: 154, status: 1 }
]

*/

//Note: if the error shows for the lookup version, check for the db.version(),swith to the latest version as 3.4 