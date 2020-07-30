const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo")(expressSession);
const Logger = require("./helpers/logger");
const requestLogger = require("./middleware/requestLogger");
const bodyParser = require("body-parser");
const databaseConstants = require("./constants/database");
const cors = require("cors");
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
app.use(cors());

// because things broke last minute...
// https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
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
