const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDescription: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now() },
  divisions: { type: String, required: true },
  deadlineDate: { type: Date, required: true },
  tnc: { type: String, required: true },
  open: { type: Boolean, required: true, default: true },
});

const eventModel = mongoose.model("event", eventSchema);
module.exports = eventModel;