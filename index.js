// for return res to client
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
//var bodyParser = require('body-parser');
mongoose = require('mongoose'),
  Task = require('./models/todoListModel'),
  User = require('./models/userModel'),
  bodyParser = require('body-parser'),
  jsonwebtoken = require("jsonwebtoken");
app.use(express.static("public")); // all req sent to PUBLIC folder
//app.use(bodyParser.urlencoded({ extended: true })); 
mongoose.connect('mongodb://localhost/Tododb', { useMongoClient: true });
// Use to render page

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

var routes = require('./routes/todoListRoutes');
routes(app);
// Create server
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(80); // port

// Connect DB
/*var mongoose = require("mongoose"); // Add MONGOOSE module
mongoose.connect("mongodb://localhost/local")
*/

// Listen for connection, when connection -> call this
io.on("connection", function(socket){
	console.log("have connection");
});
// Render page
app.get("/", function(req, res){
	res.render("index");
});

console.log("Server is running");

// test DB connection
// create table
/*var Test = mongoose.model("User", {name: String, ID: Number, title: String});
// create row
var user1 = new Test({name: "Lorem", ID: 1, title: "Ipsum"});

console.log(user1);

// save to DB
user1.save(function(err, userObj) {
	if(err) {
		console.log(err);
	}
	else {
		console.log("successful");
	}
});*/


