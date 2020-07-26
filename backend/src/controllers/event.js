const Logger = require("../helpers/logger");
const Event = require("../models/event");
const path = require("path");
const fs = require("fs");
const storageConstants = require("../constants/storage");

const index = (req, res) => {};

const create = async (req, res) => {
  const { title, description, date, time, location } = req.body;
  let event = null;
  path.exists(
    storageConstants.uploadsPath + req.file.filename,
    // check if file does not exist.
    (exists) => {
     if (!exists) {
       event = new Event({
         title: title,
         description: description,
         date: date,
         time: time,
         location: location,
       });
     } else {
       event = new Event({
         title: title,
         description: description,
         date: date,
         time: time,
         location: location,
         banner: {
           // by this time multer has already stored the file.
           data: fs.readFileSync(
             storageConstants.uploadsPath + req.file.filename
           ),
           // TODO make dynamic.
           contentType: "image/png"
         },
       });
     }
    });

  await event
    .save()
    .then((doc) => {
      res.status(200).send(
        JSON.stringify({
          status: "OK",
        })
      );
      new Logger(
        "mongoose"
        `Created event.`
      );
    })
    .catch((err) => {
      new Logger("mongoose", err);
    });
};

module.exports = {
  index: index,
  create: create
}
