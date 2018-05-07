'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var schema = mongoose.Schema;

/**
 * User model
**/
var userSchema = new schema({
	username: {
		type: String,
		unique: true,
		lowecase: true,
		require: true
	},
	hash_password: {
		type: String,
		require: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

userSchema.methods.comparePassword = function(password){
	return bcrypt.compareSync(password, this.hash_password);
};


mongoose.model('users', userSchema);