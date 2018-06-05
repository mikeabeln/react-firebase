'use strict';

const express = require('express');
const router = express.Router(); 
const User = require('../models/user');


// const isRecognized = function (req, res, next) {
// 	if (req.isAuthenticated()) {
// 		return next();
// 	} else {
// 		res.status(200).send('User is not recognized');
// 	}
// };

// const isAuthenticated = function (req, res, next) {
// 	if (req.isAuthenticated()) {
// 		return next();
// 	} 
// 	else {
// 		console.log('unauthorized');
// 		res.status(401).end();
// 	}
// };

// const isAlreadyLoggedIn = function (req, res, next) {
// 	if (req.isAuthenticated()) {
// 		console.log('User already logged in as:' + req.user.username);
// 		res.status(400).send('You are already Logged in as: ' + req.user.username);
// 	} 
// 	else {
// 		return next();
// 	}
// };

module.exports = function(passport) {

	var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('index.html');
});

module.exports = router;

	return router;
};