const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Logger = require("../helpers/logger");

// create user
const register = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  const user = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    password: password,
  });

  await user
    .save()
    .then((doc) => {
      const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET);
      res.status(200).send(
        JSON.stringify({
          status: "OK",
          token: token,
          user: user.firstName,
          _id: user._id
        })
      );

      new Logger(
        "mongoose",
        `Created user with data:\n${JSON.stringify(doc, null, 2)}`
      );

      // set registered user as user on the session.
      req.session.user = user;
    })
    .catch((err) => {
      res.status(400).send(
        JSON.stringify({
          status: "Error",
        })
      );

      new Logger("mongoose", err);
    });
};

// logout user
const logout = async (req, res, next) => {
    req.logout();
    // destroy cookie
    res.cookie("jwt", null, { maxAge: -1 });
    res.redirect("/login");
}

// login user
const login = async (req, res, next) => {
    const token = jwt.sign({ sub: req.user._id }, process.env.JWT_SECRET);
    // set cookie
    res.cookie("jwt", token);
    res.status(200).send(JSON.stringify({
      status: "OK",
      token: token,
      user: req.user.firstName,
      _id: req.user._id
  }));
}

module.exports = {
    register: register,
    logout: logout,
    login: login
}
