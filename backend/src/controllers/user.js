const Logger = require("../helpers/logger");
const User = require("../models/user");

const index = (req, res) => {
  req.session.views = req.session.views ? req.session.views + 1 : 1;
  res
    .status(200)
    .send(JSON.stringify({ status: "OK", views: req.session.views }));
};

const show = (req, res) => {};

const create = async (req, res) => {
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
      res.status(200).send(
        JSON.stringify({
          status: "OK",
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

module.exports = {
  index: index,
  show: show,
  create: create,
};
