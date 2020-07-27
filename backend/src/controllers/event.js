const Logger = require("../helpers/logger");
const Event = require("../models/event");
const path = require("path");
const fs = require("fs");
const storageConstants = require("../constants/storage");

const index = async (req, res) => {
  const events = await Event.find();
  res.status(200).send(JSON.stringify(events));
};

const create = async (req, res) => {
  const { title, description, date, location } = req.body;
  let event = null;
  if (!req.file) {
       event = new Event({
         title: title,
         description: description,
         date: date,
         location: location,
       });
  } else {
    event = new Event({
      title: title,
      description: description,
      date: date,
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
   };

   event
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
    }) .catch((err) => {
      new Logger("mongoose", err);
    });
};

const update = (req, res) => {
  const { title, description, date, location } = req.body;
  const event = Event.findById(req.params.id);
  event.title = title;
  event.decription = description;
  event.date = date;
  event.location = location;

  event.save()
       .then((event) =>{
         new Logger("mongoose", `Updated event: ${req.params.id}`);
         res.status(200).send(JSON.stringify(event));
       })
       .catch((err) => {
         new Logger("mongoose", err);
         res.status(400).send({ status: "ERROR" });
       });
}

module.exports = {
  index: index,
  create: create,
  update: update
}
