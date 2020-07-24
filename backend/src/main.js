const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const expressSession = require("express-session");
const MongoStore = require("connect-mongo")(expressSession);
const Logger = require("./helpers/logger");
const requestLogger = require("./middleware/requestLogger");
const bodyParser = require("body-parser");
const databaseConstants = require("./constants/database");
require("dotenv").config();

// configure passport.
require("./config/passport");

const userRoute = require("./routes/user");
const uploadRoute = require("./routes/upload");
const eventRoute = require("./routes/event");
const authRoute = require("./routes/auth");

// base directory global
global.__basedir = __dirname;

// create Express application.
const app = express();

// register middleware
app.use(expressSession({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(requestLogger);

// register routes
app.use("/user", userRoute);
app.use("/upload", uploadRoute);
app.use("/event", eventRoute);
app.use("/auth", authRoute);

// initialize connection to MongoDB via Mongoose.
mongoose
  .connect(
    databaseConstants.connectionStringRemote,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => new Logger("mongoose", "Connected to MongoDB!"))
  .catch((err) => new Logger("mongoose", err));

// start HTTP listener.
app.listen(process.env.PORT);
