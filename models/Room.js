const mongoose = require('mongoose');

const RoomSchema  = new mongoose.Schema({
  room_name: {
    type: String,
    required: true
  },
  desc: {
    type:String
  },
});

module.exports = Room = mongoose.model('room', RoomSchema);