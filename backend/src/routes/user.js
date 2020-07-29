const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const passport = require("passport");

router.get("/", passport.authenticate('jwt', { session: false }), userController.index);
router.get("/:id", passport.authenticate('jwt', { session: false }), userController.show);
router.delete("/:id", passport.authenticate('jwt', { session: false }) ,userController.destroy);

module.exports = router;
