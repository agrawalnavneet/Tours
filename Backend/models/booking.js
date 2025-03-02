
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  telephone: String,
  country: String,
  members: Number,
  address: String,
  countryCode: String,
  confirmed: { type: Boolean, default: false }, // Confirmation status
  bookingDate: { 
    type: Date, 
    required: true,  // Ensure user provides a valid booking date
  }, // The actual date of the booking provided by the user
  createdAt: { 
    type: Date, 
    default: Date.now,  // Automatically set the creation time when booking is saved
  },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;