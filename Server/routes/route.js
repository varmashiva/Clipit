const express = require("express");
const cors = require("cors");
const userSchemaModel = require("../model/user");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  userSchemaModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  userSchemaModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("the password is incorrect!!");
      }
    } else {
      res.json("No user by this email");
    }
  });
});

module.exports = app;
