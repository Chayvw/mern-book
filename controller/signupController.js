const express = require("express");
const router = express.Router();
const db = require("../models");

// READ
router.get("/api/user/:id", (req, res) => {
    db.User.findById(req.params.id).then((foundUser) => {
        res.json({
            error: false,
            data: foundUser,
            message: "Successfully retrieved requested user"
        });


    });

});

// CREATE 
router.post("/api/user", (req, res) => {
    db.User.create(req.body).then((createdUser) => {
        res.json({
            error: false,
            data: createdUser,
            message: "Successfully created a new user"
        });


    });

});

module.exports = router;