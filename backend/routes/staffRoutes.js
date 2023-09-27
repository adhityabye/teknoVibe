const express = require('express');
const router = express.Router();
const staffController = require('../controller/staffController');

router.post('/', staffController.addStaff);
module.exports = router;
