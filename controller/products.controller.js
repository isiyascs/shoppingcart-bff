const client = require('../client/product.client');

module.exports = {
  list: (req, res, next) => {
    try {
      client.fetchProductData().then((data) => {
        res.send(data);
        next();
      });
    } catch (err) {
      res.send(err);
    }
  }
};
