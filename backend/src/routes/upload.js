const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/upload");
const upload = require("../middleware/upload");

router.post("/", upload.single("image"), uploadController.upload);
router.get("/", uploadController.show);

module.exports = router;
