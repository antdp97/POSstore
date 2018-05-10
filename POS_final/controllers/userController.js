'use strict';

var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt'),
  User = mongoose.model('users');

exports.register = function(req, res) {
  var newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function(err, user) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      user.hash_password = undefined;
      return res.json(user);
    }
  });
};

var selected =0;

exports.sign_in = function(req, res) {
  console.log(req.body);
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;
   if (!user){
    selected=0;
    res.redirect('/');
      //return res.status(401).json({ message: 'Authentication failed. Invalid username.' });
    }
    else if (!user.comparePassword(req.body.password)) {
      selected=0;
      res.redirect('/');
      //return res.status(401).json({ message: 'Authentication failed. Invalid password.' });
    }
    else{
      selected=1;
      //return res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs') });
      res.redirect('/homepage');
    }
  });
};


exports.loginRequired = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};
