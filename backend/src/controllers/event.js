const Logger = require("../helpers/logger");
const Event = require("../models/event");
const path = require("path");
const fs = require("fs");
const storageConstants = require("../constants/storage");

const index = async (req, res) => {
  const events = await Event.find();
  res.status(200).send(JSON.stringify(events));
};

const show = async (req, res) => {
    const event = await Event.findById(req.params.id);
    if (!event) {
        res.status(400).send({ status: "ERR NOT FOUND" });
    } else {
        res.status(200).send(JSON.stringify(event));
    }
}

const create = async (req, res) => {
  const { title, description, date, owner, latitude, longitude, contentType } = req.body;
  let event = null;
  // if image doesnt exist, create event without one
  if (!req.file) {
       event = new Event({
         title: title,
         description: description,
         date: date,
         owner: owner,
         location: {
           latitude: latitude,
           longitude: longitude
         }
       });
  } else {
    event = new Event({
      title: title,
      description: description,
      date: date,
      location: {
           latitude: latitude,
           longitude: longitude
      },
      banner: {
      // by this time multer has already stored the file.
        data: fs.readFileSync(
          storageConstants.uploadsPath + req.file.filename
        ),
        contentType: contentType
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

const update = async (req, res) => {
  const { owner, title, description, date, latitude, longitude } = req.body;
  const event = await Event.findById(req.params.id);

  if (!event) {
      new Logger("mongoose", `Cannot find event with id: ${req.params.id}`);
  } else {
      event.owner = owner;
      event.title = title;
      event.description = description;
      event.date = date;
    event.location.latitude = latitude;
    event.location.longitude = longitude;
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
}

const destroy = async (req, res) => {
    await Event.findByIdAndRemove({ _id: req.params.id }, (err, event) => {
        if(!err) {
            res.status(200).send(event);
        } else {
            new Logger("mongoose", `Failed to destroy event: ${ req.params.id }\nReason: '${err}'`);
            res.status(400).send(JSON.stringify({ status: "ERR NOT FOUND" }));
        }
    });

}

const addAttendee = async (req, res) => {
    try {
        const event = await Event.findById(req.body._id);
        if (event.attendees === null) {
            event.attendees = new Array;
        }
        event.attendees.push(req.body.attendee);
        await Event.update({ _id: req.body._id }, { attendees: event.attendees });
        new Logger("mongoose", `Added attendee with id: ${req.body.attendee} to ${req.body._id}`);
        res.status(200).send(JSON.stringify({ status: "OK" }));
    } catch (err) {
        new Logger("mongoose", `Couldn't add attendee to event: ${req.body._id}.\nReason: ${err}`);
        res.status(400).send(JSON.stringify({ status: "ERR NOT FOUND" }));
    }
}

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy,
  addAttendee: addAttendee
}
