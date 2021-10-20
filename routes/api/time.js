const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
// (1): require User Model
const Time = require("../../models/Time");
const config = require("config");

// @ route-> POST api/time
// @desc -> -> Register Time
// @access -> Public

router.post(
  "/",
  [check("time_meeting", "Waktu Meeting Harus Di isi").notEmpty()],
  // (2) menggunakan promise async/await
  async (req, res) => {
    // handle request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //(3) : membuat variable menggunakan destructure
    const { time_meeting, desc } = req.body;

    // (4) : membuat try catch
    try {
      time = new Time({
        time_meeting,
        desc,
      });

      const postTime = await time.save();
      res.json(postTime);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }

    // res.send('User Route');
  }
);

router.get("/", async (req, res) => {
  try {
    const time = await Time.find({});

    if (!time) {
      return res.status(400).json({ msg: "Empty" });
    }

    res.json(time);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

//export route
module.exports = router;
