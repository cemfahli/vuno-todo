const Task = require('../models/task/model.js');

module.exports = function(req, res, next) {
  Task.findOne({
    user: res.locals.userId,
  }, 'task', function(error, result) {
    if(error) {
      next(error);
    } else {
      res.send(result)
    }
  });
}