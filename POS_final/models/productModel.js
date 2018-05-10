'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  price: {
    type: Number
  }
  quantity: {
    type: Number
  }
});

mongoose.model('products', ProductSchema);