const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/product");
mongoose.connect('mongodb://localhost/storedatabase');

const productSchema = mongoose.Schema({
    code    :   String,
    name    :   String,
    price   :   Number,
    quantity:   Number,
    re_order:   Boolean
});

//create a model
const product = mongoose.model('product', productSchema);

//get information function
// router.get("/", (req, res, next) => {
router.get("/", function (req, res) {
    console.log('abc');
    res.json('aaa');
    Product.find()
    .exec((err, result) => {
        res.status(200);
        res.type('application/json');
        res.json(result);
    });
    product.find().exec((err,responseData) =>{
        console.log(responseData);
    })
    // .exec()
    //     .then(docs => {
    //         console.log(docs);
    //             if (docs.length >= 0) {
    //                 res.status(200).json(docs);
    //             } else {
    //                 res.status(404).json({
    //                     message: 'No entries found'
    //                 });
    //             }
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json({
    //             error: err
    //          });
    //     });
});


// //add a new product function
// router.post("/", (req, res, next) => {
//     const product = new Product({
//         // _id: new mongoose.Types.ObjectId(),
//         name    :   req.body.name,
//         price   :   req.body.price,
//         code    :   req.body.code,
//         quantity:   req.body.quantity,
//         re_order:   req.body.re_order,
//     });
//     product
//         .save()
//         .then(result => {
//             console.log(result);
//             res.status(201).json({
//                 message: "Handling POST requests to /products",
//                 createdProduct: result
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// });


// //get a product information as id
// router.get("/:productId", (req, res, next) => {
//     const id = req.params.productId;
//     Product.findById(id)
//         .exec()
//         .then(doc => {
//             console.log("From database", doc);
//             if (doc) {
//                 res.status(200).json(doc);
//             } else {
//                 res.status(404)
//                 .json({ message: "No valid entry found for provided ID" });
//              }
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: err });
//         });
// });

// //edit a product with id
// router.patch("/:productId", (req, res, next) => {
//     const id = req.params.productId;
//     const updateOps = {};
//     for (const ops of req.body) {
//         updateOps[ops.propName] = ops.value;
//     }
//     Product.update({ _id: id }, { $set: updateOps })
//         .exec()
//         .then(result => {
//             console.log(result);
//             res.status(200).json(result);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// });


// //delete a product
// router.delete("/:productId", (req, res, next) => {
//     const id = req.params.productId;
//     Product.remove({ _id: id })
//         .exec()
//         .then(result => {
//             res.status(200).json(result);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// });

module.exports = router;
