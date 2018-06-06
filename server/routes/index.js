'use strict';

const express = require('express');
const router = express.Router(); 
const User = require('../models/user');


const isRecognized = function (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		res.status(200).send('User is not recognized');
	}
};

const isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} 
	else {
		console.log('unauthorized');
		res.status(401).end();
	}
};

const isAlreadyLoggedIn = function (req, res, next) {
	if (req.isAuthenticated()) {
		console.log('User already logged in as:' + req.user.username);
		res.status(400).send('You are already Logged in as: ' + req.user.username);
	} 
	else {
		return next();
	}
};

module.exports = function(passport) {

	router.get('/logout', function(req, res){
	  req.logout();
	  res.status(200).end();
	});

	router.post('/user-signup', passport.authenticate('signup'), function (req, res) {
  		res.json(req.user._id);
	});

	router.post('/buyer-signup', passport.authenticate('signup'), function (req, res) {
  		res.json(req.user._id);
	});

	router.post('/login', isAlreadyLoggedIn, passport.authenticate('login'), function (req, res) {
  		res.json(req.user);
	});

	router.get('/userCheck', isRecognized, function (req, res) {
	      res.json({
	      	user: req.user
	      });

	 });

	router.post('/dash/:userId/update', isAuthenticated, function (req, res) {
		User.findById(req.params.userId, function(err, user) {
			if (err) {
				res.json(err);
			} else {
				console.log(user, req.body);
				res.json('working to update user');
			}
		});
	});

	router.get('/dash/:userId', isAuthenticated, function (req, res) {

		//make sure user is requesting their own dashboard
		if (req.params.userId.toString() === req.user._id.toString()) {
			//find businesses
			//find products
			//find profile
			//
			User.findById(req.params.userId, '-password', function(err, user) {
				if (err) {
					console.log(err);
					res.json(err);
				} else {
					console.log(user);
					res.json({
						user: user
					});
				}
			});
		} else if (req.params.userId !== req.user._id) {
			res.status(401).end();
		}

	 });

	return router;
};