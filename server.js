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
 var db = mongoose.connection;

// Constants
const PORT = process.env.APPLICATION_PORT || 8200;

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
  healthy: function () {
    return true;
  }
}));

// rewrite virtual urls to app to enable refreshing of internal pages
// app.get('*', function (req, res) {
//     res.sendFile(path.resolve('./dist/index.html'));
// });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {


  const routes = require('./server/routes/index')(passport);
  initPassport(passport);

  app.use('/', routes);
  app.use(express.static(path.join(__dirname, '/dist')));

  app.use(function (req, res, next) {
    console.log('404 error - resource not found');
    res.status(404).redirect('/');
    next();
  });

});

app.listen(PORT, function() {
  console.log('listening on port: ' + PORT)
});
