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
    try{
      const { id, productName, prize, image } = req.body;
      var singleProduct = {
        "id":id,
        "productName":productName,
        "prize":prize,
        "image":image
      };
        client.addToBucket(singleProduct).then((message)=>{
          res.send(message);
          next();
      });
    } catch (err) {
      res.send(err);
    }
  },

  deleteFromBucket: (req, res, next) => {
    try{
      const id = req.body.id;
      client.deleteData(id).then((message)=>{
        res.send(message);
        next();
      });
    }catch(e) {
      res.send(e);
    }
  }
};
