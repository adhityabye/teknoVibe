const express = require('express');
require("dotenv").config();
const uri = process.env.MONGO_URI;
const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database!');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Exit the process with an error code
  }
};

connectDB();

const app = express();
const staffRoutes = require('./routes/staffRoutes');

app.use(express.json());
app.use('/api/staff', staffRoutes);

const PORT = 9090

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});

