const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required: "Book name is required"
    },
    hasRead :{
        type: Boolean,
        default: false,
    },

   



})

const Book = mongoose.model("Book", BookSchema);

module.exports = Book; 