//dependencies
const mongoose = require('mongoose');

//schema
const productSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    code    :   String,
    name    :   String,
    price   :   Number,
    quantity:   Number,
    re_order:   Boolean
});

module.exports = mongoose.model('Product', productSchema);