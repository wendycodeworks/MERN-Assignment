const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    /*  location: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    }, */
    location: {
        type: String,
        required: true
    },
    banner: {
      data: Buffer,
      contentType: String
    },
    attendees: {
      type: [mongoose.Schema.Types.ObjectId]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model("Event", eventSchema);
