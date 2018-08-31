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
  }
};
