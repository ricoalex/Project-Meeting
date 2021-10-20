const mongoose = require('mongoose');

const TimeSchema  = new mongoose.Schema({
  time_meeting: {
    type: String,
    required: true
  },
  desc: {
    type:String
  },
});

module.exports = Time = mongoose.model('time', TimeSchema);