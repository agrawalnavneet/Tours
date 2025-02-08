require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


// Initialize Express app
const app = express();

app.use(cors());
app.use(bodyParser.json());  // To parse JSON bodies from incoming requests




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
