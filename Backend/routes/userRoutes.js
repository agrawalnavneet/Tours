const express = require("express");
const router = express.Router();
const Tour = require("../models/tourModel");
const Booking = require("../models/bookingModel");

router.get("/tours", async (req, res) => {
  const tours = await Tour.find();
  res.json(tours);
});


module.exports = router;
