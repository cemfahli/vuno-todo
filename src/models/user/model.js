const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { schema } = require('./schema');
const saltLen = 10

schema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, saltLen);
  next();
})

const User = mongoose.model('User', schema);
module.exports = User;