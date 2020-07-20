const express = require("express");
const router = express.Router();

const users = [
  {
    id: 1,
    name: "Morgan",
  },
  {
    id: 2,
    name: "Steve",
  },
];

// user index.
router.get("/", (req, res) => {
  res.status(200).send(JSON.stringify(users));
});

// dynamic user route.
router.get("/:id", (req, res) => {
  let foundUser = null;
  users.forEach((user) => {
    if (user.id == req.params.id) {
      foundUser = user;
    }
  });

  if (foundUser) {
    res.status(200).send(foundUser);
  } else {
    res.status(404).send({
      error: "User not found!",
    });
  }
});

module.exports = router;
