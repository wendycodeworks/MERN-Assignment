const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
    lastName: {
    type: String,
    required: true
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
  phoneNumber: {
    type: Number,
    minlength: 6,
    maxlength: 10
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 36,
    // use mongoose-bcrypt plugin.
    bcrypt: true
  }
});

userSchema.plugin(require("mongoose-bcrypt"));

module.exports = mongoose.model("User", userSchema);
