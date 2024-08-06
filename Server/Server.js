const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(cors());


app.get("/",(req,res)=>{
    res.send("Working");
})

app.listen(4050, () => {
    console.log("Server is running on port 4050");
})