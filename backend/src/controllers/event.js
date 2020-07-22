const Logger = require("../helpers/logger");
const Event = require("../models/event");

const index = (req, res) => {};

const create = async (req, res) => {
  const { title, description, date, time, location, banner } = req.body;
  const event = new Event({
    title: title,
    description: description,
    date: date,
    time: time,
    location: location,
    banner: banner,
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
        "mongoose",
        `Created event with data:\n${JSON.stringify(doc, null, 2)}`
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
