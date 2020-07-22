const Logger = require("../helpers/logger");
const Event = require("../models/event");
const path = require("path");
const fs = require("fs");
const index = (req, res) => {};

const create = async (req, res) => {
  const { title, description, date, time, location, banner } = req.body;
  const event = new Event({
    title: title,
    description: description,
    date: date,
    time: time,
    location: location,
    // TODO make common helper.
    banner: {
      data: fs.readFileSync(
        path.join(__basedir + "/uploads/" + req.file.filename)
      ),
      // TODO make dynamic.
      contentType: "image/png" 
    },
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
