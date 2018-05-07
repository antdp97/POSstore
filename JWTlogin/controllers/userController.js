'use strict';

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var user = mongoose.model('user');

exports.register = function(req, res){
	var newUser = new user(req.body);
	newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
	newUser.save(function(err, user){
		if(err){
			return res.status(400).send({
				message: err
			});
		} else {
			user.hash_password = underfined;
			return res.json(user);
		}
	});
};

exports.sign_in = function(req. res){
	user.findOne({
		username: req.body.email
	}, function(err, user){
		if(err) throw err;
		if(!user){
			res.status(401).json({ message: 'User not found'});
		} else if (user) {
			if(!user.comparePassword(req.body.password)){
				res.status(401).json({ message: 'Wrong password'});
			} else {
				return res.json({token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'RESTFULAPIs' })});
			}
		}
	});
};

exports.loginRequired = function(req, res, next){
	if (req.user) {
    	next();
  	} else {
   	 	return res.status(401).json({ message: 'Unauthorized user!' });
  	}
};