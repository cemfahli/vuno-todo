const Task = require('../models/task/model.js');

module.exports = function(req, res, next) {
  Task.find({
    user: res.locals.userId,
  }, ['task', '_id'], function(error, result) {
    if(error) {
      next(error);
    } else {
      res.status(200).send(result)
    }
  });
}