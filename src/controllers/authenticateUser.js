const config = require('../../config');
const user = require('../models/user/model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  user.findOne({
    username: req.body.username,
  }, function(error, user) {
    if(error) {
      next(error)
    } else {
      if(bcrypt.compareSync(req.body.password, user.password)){
        const token = jwt.sign({
          id: user._id,
        }, config.TOKEN_SECRET, {
          expiresIn: '1h' 
        });

        return res.send({
          'token': token,
        })
      } else {
        return res.status(422).send({
          error: 'Incorrect Username/Password',
        });
      }
    }
  })
}
