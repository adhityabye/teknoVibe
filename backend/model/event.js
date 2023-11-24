const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDescription: { type: String, required: true },
  department: { type: String, required: true },
  eventProfileUrl: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now() },
  divisions: { type: String, required: true },
  deadlineDate: { type: Date, required: true },
  tnc: { type: String, required: true },
  open: { type: Boolean, required: true, default: true },
  registeredParticipants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Staff' }],
});

const eventModel = mongoose.model("event", eventSchema);
module.exports = eventModel;