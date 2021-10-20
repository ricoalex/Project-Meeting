const mongoose = require("mongoose");

const ObjectId = mongoose.ObjectId;
const TrxSchema = new mongoose.Schema({
  date_trx: {
    type: Date,
    required: true,
    default: new Date(),
  },
  idroom: {
    type: ObjectId,
    required: true,
  },
  necessary: {
    type: String,
    required: true,
  },
  date_use: {
    type: String,
    required: true,
  },
  start_time: {
    type: String,
    required: true,
  },
  finish_time: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    default: 1,
  },
  reason: {
    type: String,
    default: "-",
  },
});

module.exports = Trx = mongoose.model("trx", TrxSchema);
