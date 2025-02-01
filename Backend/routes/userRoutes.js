const express = require("express");
const router = express.Router();
const Tour = require("../models/tourModel");
const Booking = require("../models/bookingModel");

router.get("/tours", async (req, res) => {
  const tours = await Tour.find();
  res.json(tours);
});

router.post("/book", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.status(201).json({ message: "Booking confirmed!" });
});

module.exports = router;
