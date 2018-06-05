'use strict';
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
		admin: {type: Boolean, default: false},
		username: String,
	    password: String,
	    name: {
	    	first: String,
	    	last: String
	    },
	    createdOn: {type: Date, default: Date.now}
	});
module.exports = mongoose.model('User', userSchema);