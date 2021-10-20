const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
// (1): require User Model
const Room = require("../../models/Room");
const config = require("config");

// @ route-> POST api/room
// @desc -> -> Register Room
// @access -> Public

router.post(
  "/",
  [check("room_name", "Nama Ruangan Harus Di isi").notEmpty()],
  // (2) menggunakan promise async/await
  async (req, res) => {
    // handle request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //(3) : membuat variable menggunakan destructure
    const { room_name, desc } = req.body;

    // (4) : membuat try catch
    try {
      room = new Room({
        room_name,
        desc,
      });

      const postRoom = await room.save();
      res.json(postRoom);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }

    // res.send('User Route');
  }
);

router.get("/", async (req, res) => {
  try {
    const room = await Room.find({});

    if (!room) {
      return res.status(400).json({ msg: "Empty" });
    }

    res.json(room);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

//export route
module.exports = router;
