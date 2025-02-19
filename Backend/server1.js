require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

app.use(cors());
app.use(bodyParser.json());  // To parse JSON bodies from incoming requests

// MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB (without deprecated options)
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));
  
  app.get('/admin', (req, res) => {
    res.send('<h1>Hello, this is the Admin Panel</h1>');
  });

// Create a schema for the booking form with a single bookingDate field
const bookingSchema = new mongoose.Schema({
  name: String,
  telephone: String,
  country: String,
  members: Number,
  address: String,
  countryCode: String,
  bookingDate: {
    type: Date,
    required: true, // Ensure the user provides a date
  },
});

// Create a model for the booking data
const Booking = mongoose.model('Booking', bookingSchema);

// API endpoint to handle form submission (POST request)
app.post('/api/bookings', async (req, res) => {
  const { name, telephone, country, members, address, countryCode, bookingDate } = req.body;

  // Log each field with its name when the form is submitted
  console.log('Received Booking Data:');
  console.log(`name: ${name}`);
  console.log(`telephone: ${telephone}`);
  console.log(`country: ${country}`);
  console.log(`members: ${members}`);
  console.log(`address: ${address}`);
  console.log(`countryCode: ${countryCode}`);
  console.log(`bookingDate: ${bookingDate}`);
  
  // Make sure we only store the `bookingDate` from the form, not the current date.
  const parsedBookingDate = new Date(bookingDate);  // Ensure that it's parsed correctly from the client

  // Validate that the date is a valid Date object
  if (isNaN(parsedBookingDate)) {
    return res.status(400).json({ error: 'Invalid booking date provided.' });
  }

  const parsedBookingDate = new Date(bookingDate);  // Ensure that it's parsed correctly from the client

  // Validate that the date is a valid Date object
  if (isNaN(parsedBookingDate)) {
    return res.status(400).json({ error: 'Invalid booking date provided.' });
  }

  // Create a new booking entry
  const newBooking = new Booking({
    name,
    telephone,
    country,
    members,
    address,
    countryCode,
    bookingDate: parsedBookingDate,  // Use the date provided by the user
  });

   try {
    // Save the booking data to MongoDB
    await newBooking.save();
    res.status(200).json({ message: 'Booking confirmed', booking: newBooking });
  } catch (error) {
    res.status(500).json({ error: 'Error saving booking' });
  }
});
// Start the server
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
