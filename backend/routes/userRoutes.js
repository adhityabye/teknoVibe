const express = require('express');
const router = express.Router();
const { registerUser, getUsers, loginUser } = require('../controller/userController');

// Define the route for user registration
router.post('/register', registerUser);

// Define the route for user login
router.post('/login', loginUser);

// Define the route for listing users
router.get('/users', getUsers);

module.exports = router;