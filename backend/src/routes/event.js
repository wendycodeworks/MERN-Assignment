const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event");
const upload = require("../middleware/upload");

router.get("/", eventController.index);
router.post("/", upload.single("image"), eventController.create);
router.put("/:id", eventController.update);
router.delete("/:id", eventController.destroy);

module.exports = router;
