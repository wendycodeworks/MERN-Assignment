const express = require("express");
const router = express.Router();

const testUser = {
  name: "Morgan",
  age: 20
};

// user index.
router.get('/', (req, res) => {
  res.send(JSON.stringify(testData));
});

// dynamic user route.
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

module.exports = router;
