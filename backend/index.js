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

const staffRoutes = require('./routes/staffRoutes');
app.use('/api/staff', staffRoutes);

const searchEventRoutes = require('./routes/searchRoutes');
app.use('/search', searchEventRoutes);


// Start your Express server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});

