const client = require('../client/basket.client');


module.exports = {
  pickBucket: (req, res, next) => {
    try {
      client.fetchBucketData().then((data) => {
        res.send(data);
        next();
      });
    } catch (err) {
      res.send(err);
    }
  },

  fillBucket: (req, res, next) => {
    console.log("************/////////////////***************");
    try{
      const { id, productName, prize, image } = req.body;
      var singleProduct = {
        "id":id,
        "productName":productName,
        "prize":prize,
        "image":image
      };
      client.fetchBucketData().then((data) => {
        data.push(singleProduct);
        client.addToBucket(data).then((message)=>{
          res.send(message);
          next();
        });
      });
    } catch (err) {
      res.send(err);
    }
  }
};
