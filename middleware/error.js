const winston = require("winston");

module.exports = function (err, req, res, next) {
  ///add all the error logic here
  winston.error(err.message, err);
  console.log(err.message);
  res.status(400).send(err.message);
};
