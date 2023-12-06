const { truncate } = require("fs");
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDescription: { type: String, required: true },
  department: { type: String, required: false },
  eventProfileUrl: { type: String, required: false },
  date: { type: Date, required: false, default: Date.now() },
  divisions: { type: String, required: true },
  deadlineDate: { type: Date, required: true },
  tnc: { type: String, required: true },
  adminId: { type: String, required: false },
  open: { type: Boolean, required: false, default: true },
  registeredParticipants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Staff' }],
});

const eventModel = mongoose.model("event", eventSchema);
module.exports = eventModel;