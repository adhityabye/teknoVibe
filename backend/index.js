const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
require("dotenv").config();
const { connectDB } = require('./config/dbConnect');

// Configure CORS (Cross-Origin Resource Sharing) settings
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

// Call the connectDB function to establish the MongoDB connection
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

app.post('/register', (req, res) => {
  const {name, email, password} = req.body;
  bcrypt.hash(password, 6)
  .then(hash => {
      userModel.create({name, email, password: hash})
      .then(user => res.json("Success"))
      .catch(err => res.json(err))
  }).catch(err => res.json(err))
})

// Import and use staffRoutes for staff-related API endpoints
const staffRoutes = require('./routes/staffRoutes');
app.use('/api/staff', staffRoutes);

// Import and use userRoutes for user-related API endpoints
const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);

// Import and use searchEventRoutes for searchEvent-related API endpoints
const searchEventRoutes = require('./routes/searchRoutes');
app.use('/search', searchEventRoutes);

// Import and use eventRoutes for event-related API endpoints
const eventRoutes = require('./routes/eventRoutes');
app.use('/event', eventRoutes);

// Start your Express server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});

