const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const loginController = require("./controller/loginController");
const signupController = require("./controller/signupController");
const bookController = require("./controller/bookController");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

app.get("/api/config", (req, res) =>{
    res.json({success:true})
});

app.use(loginController);
app.use(signupController);
app.use(bookController);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernbook", { useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{console.log("Connected Successfully")})
.catch((err)=>{console.log("Unable to connect")});



app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
} )

app.listen(PORT, () =>{
    console.log(`Express server running on http://localhost:${PORT}`)
});

