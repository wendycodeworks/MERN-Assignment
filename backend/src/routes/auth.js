const passport = require("passport");
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router.post("/login", passport.authenticate("local", {
  failureRedirect: "/login",
  session: false
}), authController.login);

router.post("/register", authController.register);

module.exports = router;
