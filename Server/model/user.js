const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const userSchemaModel = mongoose.model("users", userSchema);
module.exports = userSchemaModel;
