const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'teknoVibe',
    });
    console.log('Connected to database!');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Exit the process with an error code
  }
};

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Exit the process with an error code on connection error
});

module.exports = { connectDB, uri };
