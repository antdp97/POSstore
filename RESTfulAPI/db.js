// import the module
const mongoose = require('mongoose');

//connnect to the model
mongoose.connect('mongodb://localhost/database');

const productSchema = mongoose.Schema({
    code    :   String,
    name    :   String,
    price   :   Number,
    quantity:   Number,
    re_order:   Boolean
});

const userSchema = mongoose.Schema({
    level   :   String,
    name    :   String,
    username:   String,
    password:   String,
});

//create a model
const user = mongoose.model('user', userSchema);
const product = mongoose.model('product', productSchema);

user.create([
    {level   :   "manager", name   :   "eric", username : "abc", password: "123"},
    {level   :   "employee", name   :   "tom", username : "cat", password: "123"},
    {level   :   "user", name   :   "peter", username : "pete", password: "123"},
    {level   :   "user", name   :   "david", username : "dav", password: "123"}
]);

product.create([
    {code    :   "hp1", name    :   "Harry Potter 1", price   :   12.99, quantity:   1, re_order:   true},
    {code    :   "hp2", name    :   "Harry Potter 2", price   :   9.99, quantity:   20, re_order:   false},
    {code    :   "hp3", name    :   "Harry Potter 3", price   :   13.99, quantity:   25, re_order:   false},
    {code    :   "hp4", name    :   "Harry Potter 4", price   :   8.99, quantity:   10, re_order:   false},
    {code    :   "hp5", name    :   "Harry Potter 5", price   :   20.99, quantity:   3, re_order:   true},
    {code    :   "hp6", name    :   "Harry Potter 6", price   :   19.99, quantity:   35, re_order:   false},
    {code    :   "hp6", name    :   "Harry Potter 7", price   :   18.99, quantity:   15, re_order:   false},
]);