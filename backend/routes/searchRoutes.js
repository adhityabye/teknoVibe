const express = require('express');
const router = express.Router();
const eventModel = require('../model/event');

router.get('/', async (req, res) => {
    const eventDocs = await eventModel.find();
    return res.status(200).json(eventDocs);
  });

  module.exports = router;