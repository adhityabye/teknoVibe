const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();
const { connectDB } = require('./config/dbConnect');

// Configure CORS (Cross-Origin Resource Sharing) settings
const corsOptions ={
  origin:'https://tekno-vibe-fe.vercel.app/', 
  credentials:true,            
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

// Call the connectDB function to establish the MongoDB connection
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Import and use staffRoutes for staff-related API endpoints
app.use('/api/staff', require('./routes/eventRequest.routes'));

// Import and use userRoutes for user-related API endpoints
app.use('/user', require('./routes/user.routes'));

// Import and use searchEventRoutes for searchEvent-related API endpoints
app.use('/search', require('./routes/eventRequest.routes'));

// Import and use eventRoutes for event-related or adding Events API endpoints
app.use('/event', require('./routes/eventRequest.routes'));

// Import and use deleteRoutes for edit-related API endpoints
app.use('/delete', require('./routes/eventRequest.routes'));

// Import and use editRoutes for edit-related API endpoints
app.use('/edit', require('./routes/eventRequest.routes'));

// Route to retrieve registered participants for a specific event
app.use('/event', require('./routes/eventRequest.routes'));

// Start your Express server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});

