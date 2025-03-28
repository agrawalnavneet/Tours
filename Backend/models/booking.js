import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  tour: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['booked', 'cancelled', 'completed'],
    default: 'booked'
  }
}, {
  timestamps: true 
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;