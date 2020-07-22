const imageModel = require("../models/image");
const fs = require("fs");
const path = require("path");
const Logger = require("../helpers/logger");

// TODO refactor
const uploadFile = (req, res) => {
  const obj = {
    name: req.body.name,
    description: req.body.desc,
    image: {
      data: fs.readFileSync(
        path.join(__basedir + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };

  imageModel.create(obj, (err, item) => {
    if (err) new Logger("mongoose", err);
    else {
      new Logger("mongoose", "Stored image.");
      res.status(200).send({ status: "OK" });
    }
  });
};

const show = (req, res) => {
  imageModel.find({}, (err, items) => {
    if (err) new Logger("mongoose", err);
    else {
      new Logger("mongoose", "Fetched images.");
      res.status(200).send({ images: items });
    }
  });
};

module.exports = {
  upload: uploadFile,
  show: show,
};
