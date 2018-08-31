const express = require('express');
const fs = require('fs');
/*
* Function that read bucket,json file and return a promise
*/
var fetchBucketData = () => {
  return new Promise((resolve,reject) => {
      try{
        fs.readFile('./Data/bucket.json',function(err,data){
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

module.exports = fetchBucketData;
