'use strict';

     var path = require('path');
const express = require('express'),
      favicon = require('serve-favicon'),
       logger = require('morgan'),
 cookieParser = require('cookie-parser'),
   bodyParser = require('body-parser'),

     passport = require('passport'),
      session = require('express-session'),
     mongoose = require('mongoose'),
   MongoStore = require('connect-mongo')(session),
 initPassport = require('./server/passport/init');

 const mongoUri = require('./server/config').mongoUri;
 mongoose.Promise = global.Promise;
 mongoose.connect(mongoUri);
 const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));

// App
const app = express();

// app.use(express.static(path.join(__dirname, 'dist')));
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'troutsnot',
  store: new MongoStore({mongooseConnection: db}),
  resave: false,
  saveUninitialized: false,
  cookie : { httpOnly: true, maxAge: 3600000}
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/isAlive', require('express-healthcheck')({
  healthy: () => {
    return true;
  }
}));

db.once('open', () => {

  const routes = require('./server/routes/index')(passport);
  initPassport(passport);

  app.use('/', routes);
  app.use(express.static(path.join(__dirname, '/dist')));

  app.use( (req, res, next) => {
    console.log('404 error - resource not found');
    res.status(404).redirect('/');
    next();
  });

});

module.exports = app;
