const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'products.json');
/*
* Function that read products.json file and return a promise
*/
exports.fetchProductData = () => {
  return new Promise((resolve,reject) => {
      fs.readFile(filePath,function(err,data){
        if(err){
          reject('ERROR');
        }
        else {
          //onsole.log("---------------------\n\n", JSON.parse(data));
          resolve(JSON.parse(data));
        }
      });
  });
}
