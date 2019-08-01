const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

var config = require('./config');

var app = express();

app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: [
      "'self'",
      'stackpath.bootstrapcdn.com',
      'fonts.googleapis.com',
    ],
    fontSrc: [
      'fonts.gstatic.com'
    ],
  }
}));
app.use(compression());
app.use(cors({
  origin: false,
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//https (production only)
if (app.get('env') === 'production') {
  app.use(function(req, res, next) {
    var proto = req.get('x-forwarded-proto');
    if(proto == 'https'){
      next();
    } else {
      res.redirect('https://' + req.hostname + req.url);
    }
  });
}

//connect to MongoDB
mongoose.connect(config.MONGODB_URI);
mongoose.connection.on('error', function(err) {
  console.error('Could not establish connection with MongoDB')
})

app.use('/', require('./src/api/users'));
app.use('/', require('./src/api/tasks'));
app.use(express.static('public'));

app.listen(config.PORT, function() {
  console.log('listening on port ' + config.PORT);
})

module.exports = app;