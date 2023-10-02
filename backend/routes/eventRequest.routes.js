const express = require('express');
const router = express.Router();
const eventRequest = require('../controller/eventRequest.controller');

router.post('/add', eventRequest.addEvent);
router.get('/', eventRequest.searchEvent);
router.post('/', eventRequest.addStaff);
router.delete('/:eventId', eventRequest.deleteEvent);
router.patch('/:eventId', eventRequest.editEvent);

module.exports = router;