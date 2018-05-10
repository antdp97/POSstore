// for return res to client
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

mongoose = require('mongoose'),
  Task = require('./models/todoListModel'),
  User = require('./models/userModel'),
  bodyParser = require('body-parser'),
  jsonwebtoken = require("jsonwebtoken");
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static("public")); // all req sent to PUBLIC folder
mongoose.connect('mongodb://localhost/Tododb'/*, { useMongoClient: true }*/);
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
var routes = require('./routes/todoListRoutes');
routes(app);

//create server
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000); // port

//JSON exec
var fs = require("fs");
var contents = fs.readFileSync("./products.json");
var products = JSON.parse(contents);

/*
var server1 = require("http").Server(app);
var io1 = require("socket.io")(server1);
server1.listen(3000); // port
*/

// Update database
/*function updateData(pid, pquantity){
	for(var i=0; i<pid.length; i++){
		product.update({id: pid[i]}, {quantity: pquantity[i]});
	}
};
*/



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

/** 
 *Search product
**/
var json = require('./products.json');
console.log(json[1].name);
console.log(json[1].price);

app.get('/logout',function(req,res){
	res.redirect('/');
})


/*
app.post('/new', function(req, res){
	new user({
		_id    : req.body.barcode,
		id : req.body.id,
		name: req.body.name,
		price   : req.body.price,
		quantity : req.body.quantity	
	}).save(function(err, doc){
		if(err) res.json(err);
		else    res.redirect('/view');
	});
});
*/

console.log("Serer is running");