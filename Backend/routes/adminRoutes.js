const express = require("express");
const router = express.Router();
const Tour = require("../models/tourModel");

router.post("/add-tour", async (req, res) => {
  const tour = new Tour(req.body);

  res.status(201).json({ message: "Tour added successfully!" });
});

module.exports = router;
