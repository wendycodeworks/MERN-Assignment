const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 36
  }
});

module.exports = mongoose.model("User", userSchema);
