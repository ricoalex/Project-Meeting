const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
// (1): require User Model
const Trx = require("../../models/Trx");
const config = require("config");

// @ route-> POST api/time
// @desc -> -> Register Time
// @access -> Public

router.post(
  "/",
  [check("idroom", "Ruang Meeting Harus Di isi").notEmpty()],
  [check("necessary", "Kebutuhan Meeting Harus Di isi").notEmpty()],
  [check("date_use", "Tanggal Meeting Harus Di isi").notEmpty()],
  [check("start_time", "Waktu Mulai Meeting Harus Di isi").notEmpty()],
  [check("finish_time", "Waktu Berakhir Meeting Harus Di isi").notEmpty()],
  // (2) menggunakan promise async/await
  async (req, res) => {
    // handle request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //(3) : membuat variable menggunakan destructure
    const { idroom, necessary, date_use, start_time, finish_time } = req.body;

    // (4) : membuat try catch
    try {
      if (start_time === finish_time) {
        res.status(400).json({
          message: "Waktu Mulai dan Berakhir meeting tidak boleh sama",
        });
      } else {
        trx = new Trx({ idroom, necessary, date_use, start_time, finish_time });

        validationTime = await Trx.find({
          $and: [
            { idroom: idroom },
            {
              date_use: date_use,
            },
          ],
          // $and: [
          //   { start_time: { $gte: start_time } },
          //   { finish_time: { $lte: finish_time } },
          //   {
          //     $or: [
          //       { start_time: { $lte: start_time } },
          //       { finish_time: { gte: finish_time } },
          //     ],
          //   },
          // ],
        });

        const postTrx = await trx.save();
        res.json(postTrx);
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }

    // res.send('User Route');
  }
);

//export route
module.exports = router;
