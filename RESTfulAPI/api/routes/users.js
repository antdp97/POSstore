const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user");

// Handle incoming GET requests to /users
router.get('/', (req, res, next) => {
    User.find()
        .exec()
        .then(docs => {
            console.log(docs);
                if (docs.length >= 0) {
                    // res.send("Users:");
                    res.status(200).json(docs);
                } else {
                    res.status(404).json({
                        message: 'No users found'
                    });
                }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
             });
        });
});


//add a new user function
router.post('/', (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        level   :   req.body.level,
        name    :   req.body.name,
        username:   req.body.username,
        password:   req.body.password
    });
    user
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Handling POST requests to /products",
                createdUser: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});



//get a user information as id
router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;
    User.findById(id)
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404)
                .json({ message: "No valid entry found for provided ID" });
             }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});


router.delete('/:userId', (req, res, next) => {
    const id = req.params.usertId;
    User.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;