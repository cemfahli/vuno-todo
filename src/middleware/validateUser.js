const config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send({
      error: 'Missing Token',
    });
  }

  var token = req.headers.authorization.substring(7);

  jwt.verify(token, config.TOKEN_SECRET, function(error, decoded) {
    if(error) {
      return res.status(401).send({
        'error': error,
      })
    } else {
      res.locals.userId = decoded.id;
      next();
    }
  });
};