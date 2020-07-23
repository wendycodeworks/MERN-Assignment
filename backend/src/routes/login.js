const passport = require("passport");
const express = require("express");
const router = express.Router(); 

router.post("/", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login"
}), (req, res) => {
 console.log("hi") ;
});

module.exports = router;
