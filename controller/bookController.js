const express = require("express");
const router = express.Router();
const db = require("../models");


// Read All
//route to be able to 
router.get("/api/books", (req, res) =>{
    //.find{} we can pass in our search query
    db.Book.find({}).then((foundBooks) =>{
        // will return an object and just not foundIngredients 
        res.json({
            error:false,
            data:foundBooks,
            message:"Successfully retrieved all books",
        })

    }).catch((err) =>{
        // if it is an error than .catch will give you a 500 status error 
        res.status(500).json({
            error:true,
            data:null,
            message:"Unable to new  books"
        })

    })
});
// CREATE
router.post("/api/books", (req, res) =>{
    db.Book.create(req.body).then((createdBooks) => {
        res.json({
            error:false,
            data:createdBooks,
            message:"Successfully created a books",
        });
    


    }).catch((err) =>{
        // if it is an error than .catch will give you a 500 status error 
        res.status(500).json({
            error:true,
            data:null,
            message:"Unable to retrieve all  books"
        })

    })
});

//UPDATE

// DELETE
router.delete("/api/books/:id", (req, res) => {
    // console.log(req.params.id);
    db.Book.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.json({
            error:false,
            data:result,
            message:"Successfully deleted a book",
        });
    }).catch((err) =>{
        // if it is an error than .catch will give you a 500 status error 
        res.status(500).json({
            error:true,
            data:null,
            message:"Unable to delete book"
        })

    })
  });

module.exports = router;