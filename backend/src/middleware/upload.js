const multer = require("multer");
const storageConstants = require("../constants/storage");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, storageConstants.uploadsPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
const upload = multer({ storage: storage });
module.exports = upload;
