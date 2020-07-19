const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// create Express application.
const app = express();

// initialize connection to MongoDB via Mongoose.
mongoose
  .connect("mongodb://localhost/tech_meet", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log(err));

// start listener
app.listen(process.env.PORT);

console.log(process.env.PORT);
