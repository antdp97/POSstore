const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/database')

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

user.find().exec((err, user) => {
    console.log(user);
})

product.find().exec((err, product) => {
    console.log(product);
})