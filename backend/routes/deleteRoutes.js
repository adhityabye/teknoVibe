const express = require('express');
const router = express.Router();
const eventModel = require('../model/event');

router.delete('/:eventId', async (req, res) => {
    try {
      const eventId = req.params.eventId;
    //   console.log(eventId);
  
      // Use Mongoose to find and delete the event by ID
      const deletedEvent = await eventModel.findByIdAndDelete(eventId);
  
      if (!deletedEvent) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      return res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;
  