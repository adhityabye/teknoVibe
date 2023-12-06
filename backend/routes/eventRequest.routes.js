const express = require('express');
const router = express.Router();
const eventRequest = require('../controller/eventRequest.controller');

// Create a new event
router.post('/add', eventRequest.addEvent);

// Retrieve events and apply optional sorting
router.get('/', eventRequest.searchEvent);

// Update the search route to include the 'sort' query parameter
router.get('/search', eventRequest.searchEvent);

// Add a new staff member to an event
router.post('/', eventRequest.addStaff);

// Delete an event by its ID
router.delete('/:eventId', eventRequest.deleteEvent);

// Edit an event by its ID
router.patch('/:eventId', eventRequest.editEvent);

// Retrieve the participants registered for a specific event
router.get('/:eventId/participants', eventRequest.getRegisteredParticipants);

// Compare Event Admin Id and current User Id
router.post('/compareId', eventRequest.compareId);

// Upload image to database
router.post('/:eventId/uploadImage', eventRequest.uploadImage);

// Get images from the database
router.get('/:eventId/getImage', eventRequest.getImage);

// Get all images from the database - testing purposes
router.get('/getImage', eventRequest.getAllImage);

// Delete all images from the database - testing purposes
router.delete('/delImage', eventRequest.delImage);

module.exports = router;
