const express = require('express');
const fs = require('fs');
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";

/*
* Function that read bucket collection and return a promise
*/
var fetchBucketData = () => {
  return new Promise((resolve,reject) => {
      try{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");
          dbo.collection("bucket").find({}).toArray(function(err,data) {
            if(err) reject(err);
            resolve(data);
            db.close();
          });
        });
      }catch(e){
        resolve([]);
      }
  });
}

/*
* Function that write to bucket collection and return a promise
*/
var addToBucket = (data) => {
  return new Promise((resolve,reject)=>{
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
    //  data = JSON.stringify(data);
      console.log("*******************************//////////////////////\n",data);
      dbo.collection("bucket").insertOne(data,function(err,bucketData) {
        if(err){
          reject(err);
        }
        resolve("SUCCESSFULLY UPDATED");
      })
    });
  });
};

/*
* Function that delete a data from bucket collection and return a promise
*/
var deleteData = (pId) => {
  return new Promise((resolve,reject)=>{
    MongoClient.connect(url,function(err,db) {
      if(err) throw err;
      var dbo = db.db("mydb");
      console.log("pId",pId);
      var myquery = {id:pId};
      dbo.collection("bucket").deleteMany(myquery, function(err, obj) {
        if (err) throw err;
        resolve("DELETED ITEM");
        db.close();
      });
    });
  });
}

module.exports = {
  fetchBucketData,
  addToBucket,
  deleteData
}
