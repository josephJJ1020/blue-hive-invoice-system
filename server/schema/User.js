const mongoose = require("mongoose");
const validateUsername = require("./validators.user/validateUsername");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "Please enter a username.",
    validate: {
      validator: validateUsername,
      message: "Please enter a valid username.",
    },
    unique: true,
  },
  password: {
    type: String,
    required: "Please enter a password.",
  },
});

module.exports = UserSchema;
