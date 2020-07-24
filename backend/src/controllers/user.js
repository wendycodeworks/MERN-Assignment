const Logger = require("../helpers/logger");
const User = require("../models/user");

const index = async (req, res) => {
  // empty filter to return all users.
  const users = await User.find();
  res.status(200).send(JSON.stringify(users));
};

const show = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).send(JSON.stringify(user));
};

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

const destroy = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send(
      JSON.stringify({
        status: "OK",
      })
    );
  } catch (err) {
    res.status(400).send(
      JSON.stringify({
        error: `Could not find user with id: ${req.params.id}`,
      })
    );
  }
};

module.exports = {
  index: index,
  show: show,
  create: create,
  destroy: destroy,
};
