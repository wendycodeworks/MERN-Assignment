const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event");

router.get("/", eventController.index);
router.post("/", eventController.create);

module.exports = router;
