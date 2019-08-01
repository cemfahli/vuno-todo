const Task = require('../models/task/model');

module.exports = function(req, res, next) {
  Task.deleteOne({
    _id: req.params.id,
    user: res.locals.userId,
  }, function(error) {
    if(error) {
      next(error);
    }
    else {
      res.sendStatus(200);
    }
  });
}