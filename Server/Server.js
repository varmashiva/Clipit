const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/route");
const app = express();
dotenv.config();
const URI = process.env.URI;

app.use(cors());
app.use(express.json());
app.use("/", userRoutes);

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected");
    app.get("/", (req, res) => {
      res.send("Working");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Working");
});
