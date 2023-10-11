const express = require('express');
const router = express.Router();
const { registerUser, getUsers, loginUser, deleteUser } = require('../controller/user.controller');

// Define the route for user registration
router.post('/register', registerUser);

// Define the route for user login
router.post('/login', loginUser);

// Define the route for listing users
router.get('/users', getUsers);

// Define the route for deleting user
router.delete('/users/:id', deleteUser);

module.exports = router;