'use strict';

var path = require('path');
const express = require('express');

// Constants
const PORT = process.env.APPLICATION_PORT || 8200;

// App
const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));
app.use('/isAlive', require('express-healthcheck')({
  healthy: function () {
    return true;
  }
}));

// rewrite virtual urls to app to enable refreshing of internal pages
app.get('*', function (req, res) {
    res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(PORT, function() {
  console.log('listening on port: ' + PORT)
});
