//dependencies
const express   =   require("express");
const app       =   express();
const bodyParser =  require("body-parser");
const mongoose  =   require("mongoose");
// const productRoutes = require("./api/routes/products");
const productRoutes = require("./api/routes/products-trung");
const userRoutes  = require("./api/routes/users");
const _         =   require('lodash');


//connect to database
mongoose.connect('mongodb://localhost/storedatabase');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes which should handle requests
app.use("/products", productRoutes);
app.use("/users", userRoutes);

//handle error
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
