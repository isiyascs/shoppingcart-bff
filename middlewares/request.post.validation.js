
const { check, validationResult } = require('express-validator/check');
const validator = require('express-validator');

module.exports = {
  validatePostBasketBody : (req, res, next) => {
    console.log("***************************-");
    try{
      const {id,productName,prize,image} = req.body;
      console.log(id);

      req.checkBody(productName , "Enter a valid productName.").isEmpty();
      req.checkBody(id,"Enter a valid id").isEmpty();
      req.checkBody(prize,"Enter dba proper prize").isEmpty();

      var errors = req.validationErrors();

      if (errors) {
        console.log("----------------------------------");
          res.send(errors);
          return;
        } else {
              next();
          }


    }catch(e) {
        res.send(e);
    }
  }
}
