const fs = require('fs');
const path = require('path');
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";

const filePath = path.join(__dirname, 'products.json');

/*
* Function that read products.json file and return a promise
*/
exports.fetchProductData = () => {
  return new Promise((resolve,reject) => {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");

      dbo.collection("products").find({}).toArray(function(err,data) {
        if(err) reject(err);
        resolve(data);
        db.close();
      });
    });
  });
}
