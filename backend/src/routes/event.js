const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event");
const upload = require("../middleware/upload");
const passport = require("passport");

router.get("/", eventController.index);
router.get("/:id", eventController.show);
router.post("/", passport.authenticate('jwt', { session: false }), upload.single("image"), eventController.create);
router.put("/:id", passport.authenticate('jwt', { session: false }), eventController.update);
router.delete("/:id", passport.authenticate('jwt', { session: false }), eventController.destroy);
router.post("/:id/attendee", passport.authenticate('jwt', { session: false }), eventController.addAttendee);

module.exports = router;
