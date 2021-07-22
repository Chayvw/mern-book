const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) =>{
    res.json({success:true})
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernbook", { useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{console.log("Connected Successfully")})
.catch((err)=>{console.log("Unable to connect")})

app.listen(PORT, () =>{
    console.log(`Express server running on http://localhost:${PORT}`)
});

