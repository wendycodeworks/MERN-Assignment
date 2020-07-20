const express = require("express");
const mongoose = require("mongoose");
const Logger = require("./helpers/logger");
const middleware = require("./middleware/middleware");
const databaseConstants = require("./constants/database");
require("dotenv").config();

// create Express application.
const app = express();
app.use(middleware.requestLogger);

// initialize connection to MongoDB via Mongoose.
mongoose
  .connect(
    databaseConstants.connectionString,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => new Logger("mongoose", "Connected to MongoDB!"))
  .catch((err) => new Logger("mongoose", err));

// start HTTP listener.
app.listen(process.env.PORT);
