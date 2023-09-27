const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');

router.post('/add', eventController.addEvent);

module.exports = router;