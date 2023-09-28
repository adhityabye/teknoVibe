const express = require('express');
const router = express.Router();
const eventModel = require('../model/event');

// Define the route for partially updating an event by ID
router.patch('/:eventId', async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
  
    try {
      // Validate the ObjectId and update the event
      if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ error: 'Invalid ObjectId' });
      }
  
      // Find the event in your MongoDB collection
      const event = await eventModel.findById(id);
  
      // Check if the event was found
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
  
      // Apply partial updates to the event fields
      Object.assign(event, updateData);
  
      // Save the updated event
      const updatedEvent = await eventModel.save();
  
      // Respond with the updated event
      res.json(updatedEvent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  module.exports = router;