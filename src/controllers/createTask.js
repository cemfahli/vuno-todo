const Task = require('../models/task/model');

module.exports = function(req, res, next) {
  Task.create( {
    task: req.body.task,
    user: res.locals.userId,
  }, function(error, result) {
    if(error) {
      next(error);
    } else {
      res.send({
        task: result.task,
        id: result._id,
      })
      next();
    }
  })
}