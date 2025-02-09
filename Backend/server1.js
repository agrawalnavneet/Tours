require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


// Initialize Express app
const app = express();

app.use(cors());
app.use(bodyParser.json());  // To parse JSON bodies from incoming requests

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));
  
  app.get('/admin', (req, res) => {
    res.send('<h1>Hello, this is the Admin Panel</h1>');
  });



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
