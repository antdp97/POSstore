'use strict';

module.exports = function(app) {
	var userHandlers = require('../controllers/userController.js');

	app.route('/auth/register')
		.post(userHandlers.register);

	app.route('/auth/sign_in')
		.post(userHandlers.sign_in);

	app.get('/homepage', function(req, res){
		res.render('index');
	});
};
