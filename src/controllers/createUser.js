const config = require('../../config');
const user = require('../models/user/model');
const bcrypt = require('bcryptjs');

module.exports = function(req, res, next) {
  user.create({
    username: req.body.username,
    password: req.body.password,
  }, function(error, result) {
    if(error) {
      next(error);
    } else {
      res.send({
        'username': result.username,
      });
    }
  })
}