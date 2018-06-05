'use strict';

const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

    // Generates hash using bCrypt
    const createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };

	passport.use('signup', new LocalStrategy({
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {

            const findOrCreateUser = function(){
                // find a user in Mongo with provided username
                User.findOne({ "username" :  username }, function(err, user) {
                    if (err){
                        console.log('Error in SignUp: '+err);
                        return done(err);
                    }

                    // user already exists
                    if (user) {
                        console.log('User already exists with username: '+username);
                        return done(null, false);
                    } else {

                        // if there is no user with that email

                        const newUser = new User();

                        newUser.admin = false;
                        newUser.username = username;
                        newUser.password = createHash(password);
                        newUser.email = req.body.email;
                        newUser.name.first = req.body.firstname;
                        newUser.name.last = req.body.lastname;
                        newUser.bio = req.body.biogrpahy;

                        newUser.save(function(err) {
                            if (err){
                                console.log('Error in Saving user: '+err);  
                                throw err;  
                            }
                            console.log('User Registration succesful for '+newUser);    
                            return done(null, newUser);
                        });

                    }
                });
            };
            // Delay the execution of findOrCreateUser and execute the method
            // in the next tick of the event loop
            process.nextTick(findOrCreateUser);
            // findOrCreateUser();
        })
    );

};