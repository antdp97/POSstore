// for return res to client
var express = require("express");
var app = express();
app.use(express.static("public")); // all req sent to PUBLIC folder

// Use to render page
app.set("view engine", "ejs");
app.set("views", "./views");

// Create server
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(8080); // port

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
console.log("Serer is running");

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

var module = require("./modules/login.js");
