// Import modules
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/userModel');
var bodyParser = require('body-parser');
var jsonwebtoken = require("jsonwebtoken");
var routes = require('./routes/todoListRoutes');
var server = require("http").Server(app);
var io = require("socket.io")(server);
var fs = require("fs");
var json = require('./products.json');

// Define
var url = 'mongodb://localhost/database';
var port = 3000;
var contents = fs.readFileSync("./products.json");
var products = JSON.parse(contents);

app.use(express.static("public")); // all req sent to PUBLIC folder
mongoose.connect(url);

// Use to render page
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create server
app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});
routes(app);
server.listen(port);

// Update database
function updateData(pid, pquantity){
	for(var i=0; i<pid.length; i++){
		product.update({id: pid[i]}, {quantity: pquantity[i]});
	}
};

// Listen for connection, when connection -> call this
io.on("connection", function(socket){
	console.log("have connection " + socket.id);
	socket.on("Client-send-data", function(data){
		console.log("Send:" + data);
		productObj = data;
	});

	socket.on("Product", function(data){
		io.sockets.emit("Productt", products);
	});
});


// Render page
app.get("/", function(req, res){
	res.render("login");
});
app.get('/logout',function(req,res){
	res.redirect('/');
})

console.log("Serer is running");