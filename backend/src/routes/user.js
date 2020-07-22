const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Logger = require("../helpers/logger");

// dynamic user route.
router.get("/:id", async (req, res) => {
});
router.post("/", async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  const user = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    password: password,
  });
  
  await user.save()
    .then((doc) => {
      res.status(200).send(JSON.stringify({
        status: "OK"
      }));

      new Logger(
        "mongoose",
        `Created user with data:\n` +
        JSON.stringify(doc, null, 2)
      )
    })
    .catch((err) => {
      res.status(400).send(JSON.stringify({
        status: "Error"
      }));

      new Logger("mongoose", err);
    });
});

module.exports = router;
