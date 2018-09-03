const express = require('express');
const fs = require('fs');
/*
* Function that read bucket,json file and return a promise
*/
var fetchBucketData = () => {
  return new Promise((resolve,reject) => {
      try{
        fs.readFile('./datas/bucket.json',function(err,data){
          if(err){
            reject('ERROR');
          }
          else {
            resolve(JSON.parse(data));
          }
        });
      }catch(e){
        resolve([]);
      }
  });
}

var addToBucket = (data) => {
  return new Promise((resolve,reject)=>{
    fs.writeFile('./datas/bucket.json',JSON.stringify(data),function(err){
      if(err) {
        reject(err);
      }
      else {
        resolve("SUCCESSFULLY UPDATED");
      }
    });
  });
}

module.exports = {
  fetchBucketData,
  addToBucket
}
